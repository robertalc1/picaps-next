// src/app/politica-cookies/page.tsx

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Politica de Cookies
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Ultima actualizare: Ianuarie 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* Intro */}
            <section className="mt-8 md:mt-12">
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Va rugam sa cititi cu atentie informatiile care urmeaza.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Pentru a respecta cerintele stabilite in Regulamentul (UE) 2016/679 privind protectia persoanelor fizice in ceea ce priveste prelucrarea datelor cu caracter personal si libera circulatie a acestor date (GDPR), precum si prevederile Legii nr. 506/2004 privind prelucrarea datelor cu caracter personal si protectia vietii private in sectorul comunicatiilor electronice, tuturor vizitatorilor website-ului picaps.ro li se cere consimtamantul inainte de transmiterea de cookies in dispozitivele acestora.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Acest website foloseste cookie-uri proprii si de la terti pentru a furniza vizitatorilor o experienta mai buna de navigare si servicii adaptate nevoilor si interesului fiecaruia.
              </p>
            </section>

            {/* Ce este un cookie */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Ce este un cookie?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Un cookie (cunoscut si ca browser cookie sau HTTP cookie) este un fisier de mici dimensiuni, format din litere si cifre, care va fi stocat pe computerul, telefonul mobil sau alte echipamente ale unui utilizator de pe care se acceseaza Internetul.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Cookie-ul este instalat prin solicitarea emisa de catre un server web unui browser (de exemplu: Chrome, Firefox, Safari, Edge) si este complet pasiv - nu contine programe software, virusi sau spyware si nu poate accesa informatiile de pe hard drive-ul utilizatorului.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Cookie-urile in sine nu solicita informatii cu caracter personal pentru a putea fi utilizate si, in cele mai multe cazuri, nu identifica personal utilizatorii de internet.
              </p>
            </section>

            {/* Tipuri de cookie-uri */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Tipuri de cookie-uri
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                <span className="font-medium">Cookie-uri de sesiune</span> - acestea sunt stocate temporar in browser-ul web si sunt sterse automat cand utilizatorul iese de pe website sau inchide fereastra browser-ului.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                <span className="font-medium">Cookie-uri persistente</span> - acestea sunt stocate pe dispozitivul utilizatorului pentru o perioada determinata si raman active pana la expirarea lor sau pana cand utilizatorul le sterge manual.
              </p>
            </section>

            {/* Cum foloseste picaps.ro cookie-urile */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Cum foloseste picaps.ro cookie-urile?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Website-ul picaps.ro foloseste cookie-uri pentru urmatoarele scopuri:
              </p>
              <ul className="text-sm md:text-base leading-relaxed text-foreground/80 list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Cookie-uri de performanta</span> - retin preferintele utilizatorului (cum ar fi limba de afisare), astfel incat acestea sa nu fie necesare la fiecare vizita.
                </li>
                <li>
                  <span className="font-medium">Cookie-uri pentru analiza vizitatorilor</span> - ne ajuta sa intelegem cum este utilizat website-ul nostru prin colectarea de informatii anonime despre numarul de vizitatori, paginile accesate si timpul petrecut pe site.
                </li>
                <li>
                  <span className="font-medium">Cookie-uri functionale</span> - permit functionarea corecta a formularelor de cerere oferta si asigura transmiterea securizata a datelor introduse.
                </li>
                <li>
                  <span className="font-medium">Cookie-uri de la terti</span> - pot fi plasate de servicii externe integrate pe website (de exemplu, Google Analytics pentru statistici de trafic).
                </li>
              </ul>
            </section>

            {/* Ce informatii sunt colectate */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Ce informatii sunt colectate?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Cookie-urile pastreaza informatii intr-un fisier text de mici dimensiuni care permit website-ului sa recunoasca un browser. Informatiile stocate pot include: setarile de limba, daca ati mai vizitat site-ul anterior si alte preferinte de navigare.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Cand completati un formular de cerere oferta pe website-ul nostru, datele introduse (nume, email, telefon, mesaj) sunt transmise direct catre adresa noastra de email si nu sunt stocate in baze de date pe server.
              </p>
            </section>

            {/* Securitate si confidentialitate */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Securitate si confidentialitate
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Cookie-urile NU sunt virusi! Ele folosesc formate tip text simplu, nu contin bucati de cod executabil si nu se pot auto-replica. In consecinta, nu pot fi considerate programe malitioase.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Cu toate acestea, va recomandam sa mentineti browser-ul actualizat si sa utilizati software antivirus pentru o protectie suplimentara.
              </p>
            </section>

            {/* Cum puteti controla sau dezactiva cookie-urile */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Cum puteti controla sau dezactiva cookie-urile?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Toate browser-ele moderne ofera posibilitatea de a schimba setarile cookie-urilor. Aceste setari se gasesc de regula in meniul Optiuni sau Setari al browser-ului dumneavoastra.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Dezactivarea cookie-urilor poate afecta functionarea corecta a anumitor elemente ale website-ului, inclusiv a formularelor de contact.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Pentru mai multe informatii despre gestionarea cookie-urilor in browser-ul dumneavoastra, consultati sectiunea de ajutor a browser-ului utilizat.
              </p>
            </section>

            {/* Drepturile dumneavoastra */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Drepturile dumneavoastra
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4">
                Conform GDPR, aveti dreptul de a: accesa datele personale pe care le detinem despre dumneavoastra, solicita rectificarea sau stergerea acestor date, va opune prelucrarii datelor in anumite circumstante si solicita portabilitatea datelor.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Pentru orice intrebari legate de politica noastra de cookie-uri sau de prelucrarea datelor personale, ne puteti contacta prin intermediul formularului de contact disponibil pe website.
              </p>
            </section>

            {/* Modificari ale politicii de cookies */}
            <section className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Modificari ale politicii de cookies
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                Ne rezervam dreptul de a actualiza aceasta politica de cookies pentru a reflecta modificari ale practicilor noastre sau din alte motive operationale, legale sau de reglementare. Va recomandam sa verificati periodic aceasta pagina pentru a fi la curent cu eventualele actualizari.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
