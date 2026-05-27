import { mkdir, writeFile } from "node:fs/promises";
import { caseStudies, locationLinks, pages, serviceLinks, site } from "../seo-page-data.mjs";

const root = new URL("../", import.meta.url);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absolute(path) {
  return new URL(path, site.baseUrl).href;
}

function jsonLd(data) {
  return JSON.stringify(data, null, 2).replaceAll("</script", "<\\/script");
}

function nav(currentSlug) {
  const serviceItems = serviceLinks
    .map((link) => `<a href="${link.href}"${link.href.includes(currentSlug) ? ' aria-current="page"' : ""}>${escapeHtml(link.label)}</a>`)
    .join("");

  return `
    <header class="site-nav project-page-nav" aria-label="Glavna navigacija">
      <a class="brand-mark" href="/#home" aria-label="fundamento početna">
        <img class="brand-logo brand-logo-light" src="/assets/brand/fundamento-logo-light.png" alt="" aria-hidden="true" width="172" height="35" />
        <img class="brand-logo brand-logo-dark" src="/assets/brand/fundamento-logo-dark.png" alt="" aria-hidden="true" width="172" height="35" />
      </a>
      <nav class="nav-tabs" aria-label="Stranice">
        <a href="/projects.html">Radovi</a>
        <a href="/partners.html">Partnerski brendovi</a>
        <a href="/about.html">O nama</a>
      </nav>
      <a class="nav-cta ink-button" href="/#contact" data-analytics-event="cta_click" data-analytics-label="nav">
        <span>Pošaljite brief</span>
        <i class="ink-field" aria-hidden="true"></i>
      </a>
      <button class="nav-menu" type="button" aria-label="Otvori navigaciju" aria-expanded="false">
        <span></span>
        <span></span>
      </button>
    </header>
    <nav class="seo-service-strip" aria-label="Usluge">${serviceItems}</nav>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-shell">
        <div class="footer-grid">
          <a class="footer-logo" href="/#home" aria-label="fundamento početna">
            <img class="brand-logo brand-logo-light" src="/assets/brand/fundamento-logo-light.png" alt="" aria-hidden="true" width="196" height="40" />
          </a>
          <div class="footer-company">
            <h3>Informacije o firmi</h3>
            <p>Fundamento Creative Studios j.d.o.o.<br />55598169702<br />Druškovec Humski 1<br />Hum na Sutli</p>
          </div>
          <div class="footer-contact">
            <h3>Kontakt</h3>
            <address>
              <a href="mailto:${site.email}">${site.email}</a><br />
              <a href="tel:${site.phone}">+385 92 188 6554</a>
            </address>
          </div>
          <nav class="footer-nav" aria-label="Footer navigacija">
            <a href="/#contact">Kontakt</a>
            <a href="/projects.html">Radovi</a>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Fundamento Creative Studios j.d.o.o. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderPage(page) {
  const canonical = `${site.baseUrl}/${page.slug}/`;
  const relatedLinks = page.links
    .map((href) => serviceLinks.find((link) => link.href === href) || locationLinks.find((link) => link.href === href))
    .filter(Boolean);
  const cases = page.cases.map((key) => caseStudies[key]).filter(Boolean);
  const sections = page.sections
    .map((section) => {
      const content = section.items
        ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : `<p>${escapeHtml(section.body)}</p>`;
      return `<article class="seo-section-block"><h2>${escapeHtml(section.title)}</h2>${content}</article>`;
    })
    .join("");
  const related = relatedLinks
    .map((link) => `<a href="${link.href}">${escapeHtml(link.label)}<span>Relevantna povezana usluga</span></a>`)
    .join("");
  const caseCards = cases
    .map((item) => `<a class="seo-case-card" href="${item.href}" data-analytics-event="case_study_click" data-analytics-label="${escapeHtml(item.label)}"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.note)}</span></a>`)
    .join("");
  const faq = page.faq
    .map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`)
    .join("");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.baseUrl,
      logo: absolute(site.logo),
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Druškovec Humski 1",
        addressLocality: "Hum na Sutli",
        addressCountry: "HR",
      },
      sameAs: ["https://www.instagram.com/fundamen.to/", "https://www.linkedin.com/company/fundamento-video-production/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      provider: { "@type": "Organization", name: site.name, url: site.baseUrl },
      areaServed: ["Hrvatska", "Slovenija"],
      serviceType: page.eyebrow,
      description: page.description,
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fundamento", item: site.baseUrl },
        { "@type": "ListItem", position: 2, name: page.h1, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return `<!doctype html>
<html lang="hr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:site_name" content="Fundamento" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="hr_HR" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${absolute(page.ogImage || site.ogImage)}" />
    <meta property="og:image:alt" content="${escapeHtml(page.h1)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${absolute(page.ogImage || site.ogImage)}" />
    <link rel="icon" type="image/png" href="/assets/brand/fundamento-logo-stacked-light.png" />
    <link rel="stylesheet" href="/styles.css?v=seo-cluster-20260522" />
    <script type="application/ld+json">${jsonLd(schema)}</script>
  </head>
  <body class="seo-page-body" data-nav-scrolled="true">
    ${nav(page.slug)}
    <main class="seo-page">
      <section class="seo-hero" aria-labelledby="seoTitle">
        <p class="kicker">${escapeHtml(page.eyebrow)}</p>
        <h1 id="seoTitle">${escapeHtml(page.h1)}</h1>
        <p>${escapeHtml(page.intro)}</p>
        <div class="seo-hero-actions">
          <a class="primary-button" href="/#contact" data-analytics-event="cta_click" data-analytics-label="${page.slug}-hero">Pošaljite brief</a>
          <a class="seo-text-link" href="/projects.html">Pogledajte radove</a>
        </div>
      </section>
      <section class="seo-content-grid" aria-label="Detalji usluge">
        ${sections}
      </section>
      <section class="seo-proof-section" aria-labelledby="proofTitle">
        <div>
          <p class="kicker">Relevantni radovi</p>
          <h2 id="proofTitle">Proof points, ne prazne tvrdnje</h2>
        </div>
        <div class="seo-case-grid">${caseCards}</div>
      </section>
      <section class="seo-link-section" aria-labelledby="linksTitle">
        <div>
          <p class="kicker">Povezane usluge</p>
          <h2 id="linksTitle">Sljedeći logičan korak</h2>
        </div>
        <div class="seo-related-links">${related}</div>
      </section>
      <section class="seo-faq-section" aria-labelledby="faqTitle">
        <p class="kicker">FAQ</p>
        <h2 id="faqTitle">Pitanja prije produkcije</h2>
        <div class="seo-faq-list">${faq}</div>
      </section>
      <section class="seo-cta-section" aria-labelledby="ctaTitle">
        <p class="kicker">Brief</p>
        <h2 id="ctaTitle">Pošaljite nam projekt koji želite snimiti</h2>
        <p>Ne treba savršen brief. Dovoljno je napisati što želite postići, gdje će se sadržaj koristiti i kada vam treba okvirna isporuka.</p>
        <a class="primary-button" href="/#contact" data-analytics-event="cta_click" data-analytics-label="${page.slug}-bottom">Zatražite okvirnu ponudu</a>
      </section>
    </main>
    ${footer()}
    <script src="/cookie-consent.js?v=cookie-consent-20260527"></script>
    <script src="/analytics-config.js"></script>
    <script src="/analytics.js"></script>
    <script src="/seo-tracking.js"></script>
  </body>
</html>
`;
}

async function run() {
  for (const page of pages) {
    const dir = new URL(`${page.slug}/`, root);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL("index.html", dir), renderPage(page));
  }
}

run();
