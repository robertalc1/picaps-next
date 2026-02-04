// src/app/politica-de-confidentialitate/page.tsx

export default function PoliticaDeConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Politica de confidențialitate
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Ultima actualizare: 11 decembrie 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* Cine suntem noi */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Cine suntem noi?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Noi suntem compania responsabilă de prelucrarea datelor tale cu
                caracter personal pe care le colectăm direct de la tine sau din
                alte surse. Potrivit legislației, compania noastră este
                operator de date cu caracter personal. Pentru ca datele tale să
                fie prelucrate în siguranță, am depus toate eforturile pentru a
                implementa măsuri rezonabile care să protejeze informațiile tale
                personale.
              </p>
            </section>

            {/* Cine ești tu */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Cine ești tu?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Potrivit legislației, tu – persoana fizică beneficiară a
                serviciilor și/sau produselor noastre, reprezentantul sau
                persoana de contact a unei companii, sau persoana aflată într-o
                relație de orice fel cu compania noastră – ești o „persoană
                vizată”, adică o persoană fizică identificată sau
                identificabilă. Pentru a fi complet transparenți în privința
                prelucrării datelor și pentru a-ți permite să îți exercți cu
                ușurință, în orice moment, drepturile, am implementat măsuri
                care să faciliteze comunicarea dintre noi, în calitate de
                operator de date, și tine, în calitate de persoană vizată.
              </p>
            </section>

            {/* Angajamentul nostru */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Angajamentul nostru
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Protecția informațiilor tale personale este foarte importantă
                pentru noi. Ne-am asumat angajamentul de a respecta legislația
                europeană și națională privind protecția datelor cu caracter
                personal, în special Regulamentul (UE) 679/2016, cunoscut sub
                denumirea de GDPR.
              </p>
            </section>

            {/* Schimbări */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Schimbări ale acestei politici
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Putem modifica această Politică de confidențialitate în orice
                moment. Toate actualizările și modificările devin aplicabile
                imediat după publicare, pe care o vom realiza prin afișare pe
                site și/sau prin notificare pe e-mail.
              </p>
            </section>

            {/* Ce fel de informații colectăm */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Ce fel de informații colectăm despre tine?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Atunci când navighezi pe site-ul nostru, completezi formularul
                de contact, ne transmiți o solicitare pe e-mail sau ne
                contactezi în orice alt scop și pe orice alt canal de
                comunicare, ne poți comunica următoarele categorii de date
                personale, pe care le colectăm direct de la tine sau din alte
                surse:
              </p>
              <ul className="text-sm md:text-base leading-relaxed text-foreground/80 list-disc pl-6 space-y-1 mb-4">
                <li>Nume și prenume</li>
                <li>Adresa de e-mail</li>
                <li>Număr de telefon</li>
                <li>Compania pe care o reprezinți</li>
                <li>Funcția deținută în cadrul companiei</li>
                <li>Comenzile plasate și istoricul interacțiunilor cu noi</li>
              </ul>

              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-2">
                Este posibil, de asemenea, să colectăm anumite informații prin
                cookie-uri sau alte tehnologii similare, precum:
              </p>
              <ul className="text-sm md:text-base leading-relaxed text-foreground/80 list-disc pl-6 space-y-1">
                <li>Adresa IP</li>
                <li>Navigatoul și sistemul de operare utilizate</li>
                <li>Locația aproximativă</li>
                <li>Paginile accesate pe site-ul nostru</li>
              </ul>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mt-4">
                Pentru detalii suplimentare, te rugăm să consulți și Politica
                de cookie-uri.
              </p>
            </section>

            {/* Temeiul legal */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Care este temeiul legal pentru prelucrarea acestor informații?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Prelucrăm datele tale cu caracter personal în următoarele
                situații:
              </p>
              <ul className="text-sm md:text-base leading-relaxed text-foreground/80 list-disc pl-6 space-y-1">
                <li>
                  atunci când ți-ai dat consimțământul pentru una sau mai multe
                  prelucrări specifice;
                </li>
                <li>
                  când prelucrarea este necesară pentru încheierea sau
                  executarea unui contract (de exemplu, un contract de prestări
                  servicii sau de vânzare);
                </li>
                <li>
                  când prelucrarea este necesară pentru a proteja interesele
                  tale vitale sau ale altei persoane fizice;
                </li>
                <li>
                  când prelucrarea este necesară în scopul intereselor noastre
                  legitime sau ale unei alte părți, cu respectarea drepturilor
                  și libertăților tale fundamentale.
                </li>
              </ul>
            </section>

            {/* Perioada de stocare */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Cât timp stocăm datele?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Stocăm datele cu caracter personal doar pe perioada necesară
                îndeplinirii scopurilor pentru care au fost colectate, dar nu
                mai mult de 5 ani de la încetarea relației contractuale sau de
                la ultima interacțiune semnificativă cu noi. După expirarea
                acestei perioade, datele tale vor fi șterse sau anonimizate, putând
                fi utilizate în scopuri de analiză statistică, cercetare
                științifică sau istorică, în măsura în care legislația permite
                acest lucru. În anumite situații expres prevăzute de lege
                putem păstra datele pentru perioade mai lungi.
              </p>
            </section>

            {/* Partajarea datelor */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Cum partajăm informațiile tale cu terții?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Putem dezvălui datele tale, cu respectarea legii aplicabile,
                partenerilor de afaceri sau altor terți. Depunem permanent
                eforturi rezonabile pentru a ne asigura că acești terți
                implementează măsuri adecvate de protecție și securitate și că
                prelucrează datele exclusiv în scopurile indicate de noi.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                De exemplu, putem transfera date către:
              </p>
              <ul className="text-sm md:text-base leading-relaxed text-foreground/80 list-disc pl-6 space-y-1 mb-4">
                <li>furnizori de servicii IT sau telecomunicații;</li>
                <li>furnizori de servicii de contabilitate și consultanță;</li>
                <li>furnizori de servicii juridice;</li>
                <li>
                  alte companii cu care avem o relație contractuală, în cadrul
                  unor proiecte sau campanii comune.
                </li>
              </ul>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                În situații limitate, putem dezvălui datele tale către
                autorități publice (de exemplu, parchete, poliție, instanțe de
                judecată sau alte autorități competente), în baza și în limitele
                obligațiilor legale care ne revin.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Ne vom asigura, în limite rezonabile, că datele tale nu
                părăsesc Spațiul Economic European. Dacă, totuși, transferăm
                date către state din afara SEE, acest lucru se va realiza
                numai în condițiile în care transferul este legitim și are la
                bază consimțământul tău explicit sau un alt temei legal adecvat.
              </p>
            </section>

            {/* Drepturile tale */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Care sunt drepturile tale?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Conform GDPR, ai următoarele drepturi principale în legătură cu
                datele tale cu caracter personal:
              </p>
              <ul className="text-sm md:text-base leading-relaxed text-foreground/80 list-disc pl-6 space-y-1 mb-4">
                <li>Dreptul de a-ți retrage consimțământul;</li>
                <li>Dreptul de a fi informat cu privire la prelucrarea datelor;</li>
                <li>Dreptul de acces la datele tale;</li>
                <li>
                  Dreptul de rectificare a datelor inexacte sau incomplete;
                </li>
                <li>
                  Dreptul de ștergere („dreptul de a fi uitat”), în condițiile
                  prevăzute de lege;
                </li>
                <li>Dreptul la restricționarea prelucrării;</li>
                <li>
                  Dreptul la portabilitatea datelor – de a transmite datele
                  către un alt operator;
                </li>
                <li>
                  Dreptul de a te opune prelucrării, inclusiv prelucrării în
                  scop de marketing direct;
                </li>
                <li>
                  Dreptul de a nu face obiectul unei decizii bazate exclusiv pe
                  prelucrarea automată, inclusiv crearea de profiluri;
                </li>
                <li>
                  Dreptul de a depune o plângere la autoritatea de
                  supraveghere competentă și de a te adresa instanțelor
                  judecătorești.
                </li>
              </ul>

              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-2">
                Dacă dorești să îți exerciți oricare dintre aceste drepturi, ne
                poți contacta printr-o cerere scrisă, semnată și datată, la
                adresa de e-mail:
                <span className="font-medium"> contact@picaps.ro</span>.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-2">
                Drepturile enumerate mai sus nu sunt absolute. În anumite
                situații, legea poate prevedea limite sau excepții. Fiecare
                cerere va fi analizată individual, iar dacă este întemeiată,
                vom lua toate măsurile necesare pentru a facilita exercitarea
                drepturilor tale.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-2">
                Vom încerca să răspundem tuturor solicitărilor în termen de 30
                de zile. În funcție de complexitatea cererii și de numărul
                solicitărilor primite, acest termen poate fi prelungit, cu
                informarea ta prealabilă.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                În situația în care nu reușim să te identificăm în mod
                rezonabil, putem solicita informații suplimentare. Dacă nu ne
                poți furniza astfel de informații, este posibil să nu putem da
                curs cererii tale.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
