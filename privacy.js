const privacyMarkup = `
  <aside class="privacy-overlay" id="privacy" aria-hidden="true" aria-labelledby="privacyTitle">
    <button class="privacy-close" type="button" data-privacy-close aria-label="Zatvori politiku privatnosti">
      <span aria-hidden="true">x</span>
    </button>

    <article class="privacy-document" role="dialog" aria-modal="true">
      <p class="kicker">Privatnost</p>
      <h2 id="privacyTitle">Politika privatnosti i kolačića</h2>

      <p>
        Fundamento Creative Studios j.d.o.o. pridaje veliku važnost zaštiti vaših osobnih podataka. Ova
        Politika privatnosti objašnjava kako prikupljamo, obrađujemo i štitimo vaše podatke putem web
        stranice www.fundamen.to.
      </p>

      <h3>1. Opće informacije o voditelju obrade</h3>
      <p>Voditelj obrade vaših osobnih podataka je:</p>
      <p>
        Naziv: Fundamento Creative Studios j.d.o.o.<br />
        Adresa: Druškovec Humski 1, Hum na Sutli, Hrvatska<br />
        55598169702<br />
        E-mail za kontakt: info@fundamen.to
      </p>

      <h3>2. Koje podatke prikupljamo i u koju svrhu?</h3>
      <h4>A) Newsletter</h4>
      <p>Ako se prijavite na naš newsletter, prikupljamo isključivo vašu e-mail adresu.</p>
      <p>
        Svrha: Slanje obavijesti o našim projektima, novostima i promotivnih informacija.<br />
        Pravna osnova: Privola. U svakom trenutku se možete odjaviti klikom na poveznicu "Odjava" u dnu svakog e-maila.
      </p>

      <h4>B) Google Analytics (Kolačići)</h4>
      <p>Koristimo Google Analytics za analizu posjećenosti naše stranice.</p>
      <p>
        Svrha: Razumijevanje načina na koji posjetitelji koriste stranicu kako bismo poboljšali njezinu
        funkcionalnost i sadržaj.<br />
        Podaci: Anonimizirana IP adresa, tip preglednika, vrijeme provedeno na stranici i sl.<br />
        Pravna osnova: Legitimni interes za poboljšanje poslovanja uz vašu privolu putem kolačića.
      </p>

      <h3>3. Dijeljenje podataka s trećim stranama</h3>
      <p>
        Fundamento Creative Studios j.d.o.o. ne prodaje, ne iznajmljuje niti dijeli vaše osobne podatke s
        trećim stranama u njihove marketinške svrhe. Vaši podaci se koriste isključivo za gore navedene svrhe.
        Iznimno, podaci se mogu dostaviti nadležnim javnim tijelima ako je to naša zakonska obveza.
      </p>

      <h3>4. Kolačići (Cookies)</h3>
      <p>Web stranica koristi kolačiće kako bi osigurala najbolje korisničko iskustvo.</p>
      <p>
        Nužni kolačići: Neophodni za rad stranice i ne mogu se isključiti.<br />
        Analitički kolačići (Google Analytics): Pomažu nam pratiti statistiku posjeta.
      </p>
      <p>
        Postavke kolačića možete kontrolirati i konfigurirati u vašem web pregledniku. Isključivanje kolačića
        može ograničiti određene funkcionalnosti stranice.
      </p>

      <h3>5. Razdoblje pohrane</h3>
      <p>
        Vašu e-mail adresu za newsletter čuvamo sve dok ne povučete privolu. Podaci prikupljeni putem Google
        Analyticsa čuvaju se u skladu s pravilima tog servisa, obično 14 do 26 mjeseci.
      </p>

      <h3>6. Vaša prava prema GDPR-u</h3>
      <p>U skladu s Općom uredbom o zaštiti podataka, imate sljedeća prava:</p>
      <p>
        Pravo na pristup: Pravo dobiti potvrdu obrađuju li se vaši podaci.<br />
        Pravo na ispravak: Pravo na dopunu ili izmjenu netočnih podataka.<br />
        Pravo na brisanje: Pravo na brisanje podataka ako više nisu nužni.<br />
        Pravo na prigovor: Pravo na prigovor protiv obrade podataka.<br />
        Pravo na prenosivost: Pravo na prijenos podataka drugom voditelju obrade.
      </p>
      <p>Za ostvarivanje bilo kojeg od ovih prava, javite nam se na info@fundamen.to.</p>

      <h3>7. Pravo na pritužbu nadležnom tijelu</h3>
      <p>
        Ako smatrate da je obrada vaših podataka protivna GDPR-u, imate pravo podnijeti pritužbu nadzornom tijelu:
      </p>
      <p>
        Agencija za zaštitu osobnih podataka (AZOP)<br />
        Selska cesta 136, 10000 Zagreb<br />
        Web: www.azop.hr
      </p>
    </article>
  </aside>
`;

function setupPrivacyOverlay() {
  if (!document.querySelector("#privacy")) {
    document.body.insertAdjacentHTML("beforeend", privacyMarkup);
  }

  const overlay = document.querySelector("#privacy");
  if (!overlay) return;

  const openPrivacy = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.dataset.privacyOpen = "true";
    if (window.location.hash !== "#privacy") history.replaceState(null, "", "#privacy");
    overlay.querySelector(".privacy-document")?.scrollTo({ top: 0, behavior: "auto" });
    overlay.querySelector("[data-privacy-close]")?.focus({ preventScroll: true });
  };

  const closePrivacy = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.dataset.privacyOpen = "false";
    if (window.location.hash === "#privacy") {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  document.querySelectorAll("[data-privacy-open]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openPrivacy();
    });
  });

  overlay.querySelectorAll("[data-privacy-close]").forEach((button) => {
    button.addEventListener("click", closePrivacy);
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closePrivacy();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) closePrivacy();
  });

  if (window.location.hash === "#privacy") openPrivacy();
}

setupPrivacyOverlay();
