import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.picaps.ro',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Helper function to get readable model names
const getModelLabel = (value: string): string => {
    const labels: Record<string, string> = {
        alfa: 'Alfa - 18m²',
        beta: 'Beta - 28m²',
        gamma: 'Gamma - 38m²',
    };
    return labels[value] || value;
};

// Helper function to get readable project type names
const getProjectTypeLabel = (value: string): string => {
    const labels: Record<string, string> = {
        rezidential: 'Rezidențial',
        investitie: 'Investiție / închiriere',
        'business-resort': 'PiCaps Business Resort (minimum 4 capsule)',
        altele: 'Altele',
    };
    return labels[value] || value;
};

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        // Updated to handle 'models' array instead of single 'model'
        const { name, email, phone, models, message, projectType } = data;

        // Validare campuri obligatorii (including projectType and models)
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Numele, emailul și telefonul sunt obligatorii.' },
                { status: 400 }
            );
        }

        if (!projectType) {
            return NextResponse.json(
                { error: 'Tipul proiectului este obligatoriu.' },
                { status: 400 }
            );
        }

        if (!models || !Array.isArray(models) || models.length === 0) {
            return NextResponse.json(
                { error: 'Trebuie să selectați cel puțin un model.' },
                { status: 400 }
            );
        }

        // Verificam daca serverul e configurat (doar ca masura de siguranta)
        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('Eroare: Lipsesc variabilele de mediu pentru email.');
            return NextResponse.json(
                { error: 'Serviciul de email nu este configurat pe server.' },
                { status: 500 }
            );
        }

        // Format models for display
        const modelsDisplay = models.map(getModelLabel).join(', ');
        const modelsForSubject = models.length === 3 ? 'Toate modelele' : modelsDisplay;
        const projectTypeDisplay = getProjectTypeLabel(projectType);

        // Design-ul Emailului (HTML Modern)
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0f172a 0%, #334155 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h2 { margin: 0; font-size: 24px; letter-spacing: 1px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px; }
        .field:last-child { border-bottom: none; }
        .label { font-weight: 700; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .value { color: #0f172a; font-size: 16px; font-weight: 500; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; }
        
        /* Stiluri pentru etichete (Badges) */
        .tags-container { text-align: center; margin-bottom: 30px; padding: 15px; background: #f8fafc; border-radius: 8px; }
        .tag { display: inline-block; padding: 6px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; margin: 4px 5px; }
        .tag-model { background-color: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; }
        .tag-project { background-color: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🚀 Cerere Ofertă Nouă</h2>
        </div>
        <div class="content">
            <div class="tags-container">
                ${models.map((m: string) => `<span class="tag tag-model">${getModelLabel(m)}</span>`).join('')}
                <span class="tag tag-project">Tip: ${projectTypeDisplay}</span>
            </div>

            <div class="field">
                <div class="label">Nume Client</div>
                <div class="value">${name}</div>
            </div>
            
            <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="field">
                <div class="label">Telefon</div>
                <div class="value"><a href="tel:${phone}" style="color: #0ea5e9; text-decoration: none;">${phone}</a></div>
            </div>

            <div class="field">
                <div class="label">Tip Proiect Selectat</div>
                <div class="value">${projectTypeDisplay}</div>
            </div>

            <div class="field">
                <div class="label">Modele de Interes (${models.length} ${models.length === 1 ? 'model' : 'modele'})</div>
                <div class="value">${modelsDisplay}</div>
            </div>

            ${message ? `
            <div class="field">
                <div class="label">Mesaj Client</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>` : ''}
        </div>
        <div class="footer">
            <p>Acest email a fost trimis automat de pe <strong>Picaps.ro</strong></p>
            <p>© ${new Date().getFullYear()} Picaps. Toate drepturile rezervate.</p>
        </div>
    </div>
</body>
</html>`;

        // Trimitere efectiva
        await transporter.sendMail({
            from: `"Formular Site Picaps" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || 'contact@picaps.ro',
            replyTo: email,
            subject: `Ofertă Nouă: ${name} - ${modelsForSubject}`,
            html: htmlContent,
        });

        // ---------------------------------------------------------
        // EMAIL CONFIRMARE CATRE CLIENT (Confirmare Primire)
        // ---------------------------------------------------------

        const customerHtmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h2 { margin: 0; font-size: 24px; letter-spacing: 1px; }
        .content { padding: 30px; text-align: center; }
        .message { font-size: 16px; color: #475569; margin-bottom: 25px; }
        .details { background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: left; margin-bottom: 25px; border-left: 4px solid #10b981; }
        .details h3 { margin-top: 0; color: #0f172a; font-size: 16px; }
        .details p { margin: 5px 0; color: #64748b; font-size: 14px; }
        .cta-button { display: inline-block; background-color: #0f172a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 30px; font-weight: 600; margin-top: 10px; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎉 Am primit solicitarea ta!</h2>
        </div>
        <div class="content">
            <p class="message">Salut <strong>${name}</strong>,</p>
            <p class="message">Îți mulțumim că ne-ai contactat! Am înregistrat cu succes cererea ta pentru o ofertă personalizată PiCaps.</p>
            
            <div class="details">
                <h3>Detaliile solicitării tale:</h3>
                <p><strong>Tip Proiect:</strong> ${projectTypeDisplay}</p>
                <p><strong>Modele:</strong> ${modelsDisplay}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
            </div>

            <p class="message">Echipa noastră analizează detaliile și te va contacta în cel mai scurt timp posibil pentru a discuta următorii pași.</p>
            
            <a href="https://picaps.ro" class="cta-button">Înapoi pe site</a>
        </div>
        <div class="footer">
            <p>Acest email a fost trimis automat. Te rugăm să nu răspunzi la acest mesaj.</p>
            <p>© ${new Date().getFullYear()} Picaps. Toate drepturile rezervate.</p>
        </div>
    </div>
</body>
</html>`;

        await transporter.sendMail({
            from: `"Echipa PiCaps" <${process.env.SMTP_USER}>`,
            to: email, // Trimite catre client
            subject: `Confirmare primire solicitare - Picaps`,
            html: customerHtmlContent,
        });

        return NextResponse.json({ success: true, message: 'Email trimis cu succes!' }, { status: 200 });

    } catch (error) {
        console.error('Eroare detaliată server:', error);
        return NextResponse.json(
            { error: 'A apărut o eroare la procesarea cererii.' },
            { status: 500 }
        );
    }
}