const highlightProjects = [
  {
    slug: "travel-croatia",
    title: "Travel Croatia",
    client: "Travel Croatia",
    collaboration: "Projektna",
    industry: "Tourism",
    format: "Destination video",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/TravelCroatia_FamAftermovie_UHD_16x9_web.mp4",
    image: "https://picsum.photos/seed/travel-croatia-project/1200/900",
    summary: "Destinacijski video sustav s 16:9 filmom, vertikalnim formatima i BTS sadržajem.",
  },
  {
    slug: "splxai",
    title: "SplxAI",
    client: "SplxAI",
    collaboration: "Projektna",
    industry: "AI / Technology",
    format: "Pitch video",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/SPLXAI_PitchVideo_25fps_9x16_UHD_TL5_web.mp4",
    image: "https://picsum.photos/seed/splxai-project/1200/900",
    summary: "Tehnološki hero video s preciznim tonom i produkcijskim materijalima za brand kontekst.",
  },
  {
    slug: "tomicwinary",
    title: "Tomić Winery",
    client: "Tomić Winery",
    collaboration: "Projektna",
    industry: "Wine / Hospitality",
    format: "Brand film",
    year: "2023",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/TomicVinery_Promo_30Y_16x9_30fps_FHD_TL1_web.mp4",
    poster: "assets/partners/tomic%20winery/optimized/tomic-winery-poster.jpg",
    image: "https://picsum.photos/seed/tomicwinary-project/1200/900",
    summary: "16:9 hero video koji gradi dojam prostora, proizvoda i ritma brenda.",
  },
  {
    slug: "forte-solar-tvc-1",
    title: "Forte Solar TV reklama",
    client: "Forte Solar",
    collaboration: "Projektna",
    industry: "Renewable Energy",
    format: "TV reklama",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/FORTESOLAR_TVC1_16x9_UHD_30fps_TL1_web.mp4",
    image: "https://picsum.photos/seed/forte-solar-tvc-1-project/1200/900",
    summary: "TVC izvedba za solarni brand s naglaskom na povjerenje, jasnoću i premium produkciju.",
  },
  {
    slug: "trogir-diving-center",
    title: "Trogir Diving Center",
    client: "Trogir Diving Center",
    collaboration: "Projektna",
    industry: "Tourism / Diving",
    format: "Documentary video",
    year: "2024",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/TDC_Documentary_25fps_16x9_UHD_TL5_ENG_1_web.mp4",
    image: "https://picsum.photos/seed/trogir-diving-center-project/1200/900",
    summary: "Video materijali za diving iskustvo, lokaciju i produkcijski BTS kontekst.",
  },
  {
    slug: "forte-solar-tvc-2",
    title: "Forte Solar TV reklama",
    client: "Forte Solar",
    collaboration: "Projektna",
    industry: "Renewable Energy",
    format: "TV reklama",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/ForteSolar_TVC_01_UHD_16x9_30fps_TL1_web.mp4",
    image: "https://picsum.photos/seed/forte-solar-tvc-2-project/1200/900",
    summary: "Druga TVC izvedba u istom brand sustavu, ali kao zaseban produkcijski projekt.",
  },
];

const partnerProjects = [
  {
    slug: "forte-solar",
    title: "FORTE SOLAR",
    client: "FORTE SOLAR",
    startYear: "2025",
    services: ["Video produkcija", "Foto sadržaj", "Social cutdowni", "BTS"],
    industry: "Renewable Energy",
    format: "Partnerska suradnja",
    video: "assets/videos/FORTESOLAR_TVC1_16x9_UHD_30fps_TL1_web.mp4",
    image: "https://picsum.photos/seed/forte-solar-brand/1200/900",
    summary: "Vodeći graditelj solarnih elektrana.",
  },
  {
    slug: "revita-clinic",
    title: "REVITA CLINIC",
    client: "REVITA CLINIC",
    startYear: "2025",
    services: ["Video produkcija", "Foto sadržaj", "Digitalni vizuali"],
    industry: "Medical Wellness / Hospitality",
    format: "Partnerska suradnja",
    video: "assets/videos/project-02.mp4",
    image: "assets/partners/Revita%20Clinic/optimized/photos/revita-photo-17.jpg",
    summary: "Medicinski wellness centar smješten u boutique hotelu s pet zvjezdica, specijaliziran za biološku dugovječnost.",
  },
  {
    slug: "central-cafe",
    title: "CENTRAL CAFE",
    client: "CENTRAL CAFE",
    startYear: "2025",
    services: ["Foto sadržaj", "Video produkcija", "Social media materijali"],
    industry: "Hospitality",
    format: "Partnerska suradnja",
    video: "assets/videos/project-03.mp4",
    image: "assets/partners/Central%20Cafe/optimized/photos/central-photo-08.jpg",
    preferImage: true,
    summary: "Kavana i slastičarnica s više od 20 godina iskustva.",
  },
  {
    slug: "vw-bosnic",
    title: "VOLKSWAGEN BOSNIĆ",
    client: "VOLKSWAGEN BOSNIĆ",
    startYear: "2024",
    services: ["Produkcija", "Postprodukcija", "Kampanjski vizuali"],
    industry: "Automotive",
    format: "Partnerska suradnja",
    video: "assets/videos/project-04.mp4",
    image: "https://picsum.photos/seed/vw-bosnic-production/1200/900",
    summary: "Ovlašteni Volkswagen i Škoda servis s više od tri desetljeća iskustva.",
  },
  {
    slug: "hotel-ambasador",
    title: "HOTEL AMBASADOR",
    client: "HOTEL AMBASADOR",
    startYear: "2026",
    services: ["Hospitality vizuali", "Foto sadržaj", "Video produkcija"],
    industry: "Hospitality",
    format: "Partnerska suradnja",
    video: "assets/videos/project-02.mp4",
    image: "https://picsum.photos/seed/hotel-ambasador-visuals/1200/900",
    summary: "Hotel s 5 zvjezdica s pogledom na Jadran, mediteranskim restoranom i spa centrom.",
  },
];

const PROJECT_RETURN_PENDING_KEY = "fundamento.projectReturnPending";
const PROJECT_RETURN_SCROLL_KEY = "fundamento.projectReturnScroll";
const PROJECT_RETURN_URL_KEY = "fundamento.projectReturnUrl";

function hasProjectReturnScroll() {
  return (
    localStorage.getItem(PROJECT_RETURN_PENDING_KEY) === "true" &&
    Number.isFinite(Number(localStorage.getItem(PROJECT_RETURN_SCROLL_KEY)))
  );
}

function restoreProjectReturnScroll() {
  if (!hasProjectReturnScroll()) return false;

  const top = Math.max(0, Number(localStorage.getItem(PROJECT_RETURN_SCROLL_KEY)));
  window.scrollTo({ top, left: 0, behavior: "auto" });
  window.setTimeout(() => localStorage.removeItem(PROJECT_RETURN_PENDING_KEY), 900);
  return true;
}

function setupProjectReturnMemory() {
  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest('a[href^="project.html"]');
      if (!link) return;

      localStorage.setItem(PROJECT_RETURN_PENDING_KEY, "true");
      localStorage.setItem(PROJECT_RETURN_SCROLL_KEY, String(window.scrollY));
      localStorage.setItem(
        PROJECT_RETURN_URL_KEY,
        `${window.location.pathname}${window.location.search}${window.location.hash}`,
      );
    },
    true,
  );
}

function projectUrl(project) {
  return `project.html?project=${project.slug}`;
}

function playMutedVideo(video) {
  if (!video) return Promise.resolve();
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.setAttribute("muted", "");
  return video.play();
}

function setupMobileNav() {
  const nav = document.querySelector(".site-nav");
  const button = document.querySelector(".nav-menu");
  if (!nav || !button) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    document.body.dataset.mobileNavOpen = "false";
    document.documentElement.dataset.mobileNavOpen = "false";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Otvori navigaciju");
  };

  button.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    document.body.dataset.mobileNavOpen = String(willOpen);
    document.documentElement.dataset.mobileNavOpen = String(willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
    button.setAttribute("aria-label", willOpen ? "Zatvori navigaciju" : "Otvori navigaciju");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function rowMeta(project, kind) {
  if (kind === "partner") {
    return [
      ["Klijent", project.client],
      ["Industrija", project.industry],
      ["Tip", project.format],
      ["Početak suradnje", project.startYear],
    ];
  }

  return [
    ["Klijent", project.client],
    ["Industrija", project.industry],
    ["Tip", project.format],
    ["Godina", project.year],
  ];
}

function sortProjectsByProductionYear(projects) {
  return projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => {
      const yearA = Number(a.project.year || a.project.startYear || 0);
      const yearB = Number(b.project.year || b.project.startYear || 0);
      return yearB - yearA || a.index - b.index;
    })
    .map(({ project }) => project);
}

function renderProjectRow(project, index, kind) {
  const url = projectUrl(project);
  const side = index % 2 === 0 ? "left" : "right";
  const hasVideo = (index % 2 === 0 || kind === "highlight") && !project.preferImage;
  const poster = project.poster ? ` poster="${project.poster}"` : "";
  const media =
    hasVideo
      ? `<video src="${project.video}"${poster} muted loop playsinline preload="metadata"></video>`
      : `<img src="${project.image}" alt="${project.title}" />`;
  const meta = rowMeta(project, kind)
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `,
    )
    .join("");
  const cardContent = `
    ${media}
    ${
      project.reserved
        ? ""
        : `
          <span class="project-index-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M7 17 17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </span>
        `
    }
    <span class="project-index-card-copy">
      <small>${kind === "partner" ? project.industry : project.format}</small>
      <strong>${project.title}</strong>
    </span>
  `;
  const card = project.reserved
    ? `<div class="project-index-card${hasVideo ? " has-video" : ""} is-reserved" aria-label="${project.title}">${cardContent}</div>`
    : `<a class="project-index-card${hasVideo ? " has-video" : ""}" href="${url}" aria-label="Saznaj više o projektu ${project.title}">${cardContent}</a>`;
  const metaLink = project.reserved ? "" : `<a href="${url}">Saznaj više</a>`;

  return `
    <article class="project-index-row is-${side}${project.reserved ? " is-reserved" : ""}" data-project-row>
      ${card}

      <div class="project-index-meta">
        <dl>${meta}</dl>
        <p>${project.summary}</p>
        ${metaLink}
      </div>
    </article>
  `;
}

function renderProjectGroup({ kicker, title, projects, kind }) {
  return `
    <section class="project-index-group is-${kind}" aria-label="${title}">
      <div class="project-index-heading">
        <p>${kicker}</p>
        <h2>${title}</h2>
      </div>
      <div class="project-index-list">
        ${projects.map((project, index) => renderProjectRow(project, index, kind)).join("")}
      </div>
    </section>
  `;
}

function renderProjectRows() {
  const list = document.querySelector("#projectIndexList");
  if (!list) return;
  const mode = document.body.dataset.projectFilter || list.dataset.projectFilter || "all";

  if (mode === "partner") {
    list.innerHTML = renderProjectGroup({
      kicker: "Partnerski brendovi",
      title: "Partnerski brendovi",
      projects: partnerProjects,
      kind: "partner",
    });
    return;
  }

  list.innerHTML = renderProjectGroup({
    kicker: "Selekcija",
    title: "Odabrani radovi",
    projects: sortProjectsByProductionYear(highlightProjects),
    kind: "highlight",
  });
}

function setupProjectRowMotion() {
  const rows = [...document.querySelectorAll("[data-project-row]")];
  if (!rows.length) return;

  if (!("IntersectionObserver" in window)) {
    rows.forEach((row) => row.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  rows.forEach((row) => observer.observe(row));
}

function setupProjectVideos() {
  document.querySelectorAll(".project-index-card").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;

    card.addEventListener("mouseenter", () => playMutedVideo(video).catch(() => {}));
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.setAttribute("muted", "");
    });
  });
}

window.addEventListener("pageshow", restoreProjectReturnScroll);
window.addEventListener("load", () => {
  if (restoreProjectReturnScroll()) {
    requestAnimationFrame(restoreProjectReturnScroll);
    window.setTimeout(restoreProjectReturnScroll, 140);
  }
});

setupProjectReturnMemory();
setupMobileNav();
renderProjectRows();
setupProjectRowMotion();
setupProjectVideos();
restoreProjectReturnScroll();
