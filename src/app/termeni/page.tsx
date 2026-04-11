export default function TermeniPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="font-pirulen text-4xl lg:text-5xl text-[#1D1D1F] mb-8">
            Termeni și Condiții
          </h1>

          <p className="text-[#1D1D1F]/60 text-sm mb-10">
            Ultima actualizare: aprilie 2025
          </p>

          <div className="prose prose-lg max-w-none text-[#1D1D1F]/80 space-y-8">

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                1. Informații Generale
              </h2>
              <p className="leading-relaxed">
                Prezentul document stabilește termenii și condițiile de utilizare a site-ului
                web <strong>picaps.ro</strong> și a serviciilor oferite de PI CAPS, producător
                român de capsule modulare premium. Prin accesarea și utilizarea acestui site,
                ești de acord cu termenii prezentați mai jos.
              </p>
              <p className="leading-relaxed mt-4">
                PI CAPS este o companie cu sediul în București, România, specializată în
                producția și livrarea de capsule modulare de locuit, inclusiv modelele Alpha
                18m², Beta 28m² și Gamma 38m².
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                2. Produse și Prețuri
              </h2>
              <p className="leading-relaxed">
                Prețurile afișate pe site sunt exprimate în Euro și nu includ TVA, conform
                legislației fiscale în vigoare. Costul transportului și montajului se calculează
                separat, în funcție de locație, și este comunicat transparent înainte de
                confirmarea comenzii. Locația de referință pentru livrare este București, România.
              </p>
              <p className="leading-relaxed mt-4">
                PI CAPS își rezervă dreptul de a modifica prețurile fără notificare prealabilă.
                Prețul valabil este cel confirmat la momentul semnării contractului de vânzare-cumpărare.
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                3. Procesul de Comandă și Plată
              </h2>
              <p className="leading-relaxed">
                Procesul de achiziție se desfășoară în două etape:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Avans 50%</strong> — la confirmarea comenzii și semnarea contractului,
                  pentru demararea producției.
                </li>
                <li>
                  <strong>Rest de 50%</strong> — înainte de livrare, după finalizarea capsulei
                  și pregătirea pentru transport.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Termenul standard de producție și livrare este de aproximativ 100 de zile:
                30 de zile producție și 70 de zile transport și montaj.
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                4. Garanție
              </h2>
              <p className="leading-relaxed">
                Capsulele PI CAPS beneficiază de:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Garanție 2 ani</strong> pentru structura capsulei (extensibilă contractual).</li>
                <li><strong>Garanție 1 an</strong> pentru echipamentele și electrocasnicele incluse.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Garanția acoperă defectele de fabricație și nu se aplică în cazul deteriorărilor
                cauzate de utilizare necorespunzătoare, intervenții neautorizate sau factori externi.
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                5. Drepturi de Proprietate Intelectuală
              </h2>
              <p className="leading-relaxed">
                Toate conținuturile site-ului picaps.ro — inclusiv texte, imagini, design,
                logo-uri și modele 3D — sunt proprietatea exclusivă a PI CAPS sau sunt utilizate
                cu acordul titularilor de drepturi. Este interzisă reproducerea, distribuirea
                sau utilizarea comercială fără acordul scris al PI CAPS.
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                6. Limitarea Răspunderii
              </h2>
              <p className="leading-relaxed">
                PI CAPS nu poate fi responsabilă pentru daune indirecte, incidentale sau
                consecutive rezultate din utilizarea produselor sau serviciilor noastre, în
                măsura permisă de legea română. Informațiile privind autorizațiile de construcție
                sunt orientative — legislația poate varia în funcție de localitate și destinația
                utilizării; consultați autoritatea locală competentă.
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                7. Legea Aplicabilă
              </h2>
              <p className="leading-relaxed">
                Prezentii termeni și condiții sunt guvernați de legea română. Orice litigiu
                va fi soluționat pe cale amiabilă sau, în caz contrar, de instanțele competente
                din România. PI CAPS este înregistrată și funcționează conform legislației
                române în vigoare.
              </p>
            </section>

            <section>
              <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                8. Contact
              </h2>
              <p className="leading-relaxed">
                Pentru orice întrebări referitoare la acești termeni, ne poți contacta la:
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@picaps.ro"
                    className="text-[#1C4030] hover:underline"
                  >
                    contact@picaps.ro
                  </a>
                </li>
                <li>
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+40727511563"
                    className="text-[#1C4030] hover:underline"
                  >
                    +40 727 511 563
                  </a>
                </li>
                <li>
                  <strong>Adresă:</strong> București, România
                </li>
              </ul>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
