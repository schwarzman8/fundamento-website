const highlightProjects = [
  {
    title: "Travel Croatia",
    type: "Destination video",
    industry: "Tourism",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/TravelCroatia_FamAftermovie_UHD_16x9_web.mp4",
    summary: "Destinacijski hero video s vertikalnim cutdownima, fotografijama atmosfere i BTS materijalima.",
    slug: "travel-croatia",
  },
  {
    title: "SplxAI",
    type: "Pitch video",
    industry: "AI / Technology",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/SPLXAI_PitchVideo_25fps_9x16_UHD_TL5_web.mp4",
    summary: "Hero video i BTS materijali za tehnološki brand s preciznim, jasnim vizualnim tonom.",
    slug: "splxai",
  },
  {
    title: "Tomić Winery",
    type: "Brand film",
    industry: "Wine / Hospitality",
    year: "2023",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/TomicVinery_Promo_30Y_16x9_30fps_FHD_TL1_web.mp4",
    summary: "16:9 hero film s kratkim opisom suradnje i fokusom na atmosferu proizvoda.",
    slug: "tomicwinary",
  },
  {
    title: "Forte Solar TV reklama",
    type: "TV reklama",
    industry: "Renewable Energy",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/FORTESOLAR_TVC1_16x9_UHD_30fps_TL1_web.mp4",
    summary: "Prvi TVC format za Forte Solar, objedinjen unutar glavne Forte Solar projekt stranice.",
    slug: "forte-solar-tvc-1",
  },
  {
    title: "Trogir Diving Center",
    type: "Documentary video",
    industry: "Tourism / Diving",
    year: "2024",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/TDC_Documentary_25fps_16x9_UHD_TL5_ENG_1_web.mp4",
    summary: "16:9 hero video, horizontalni formati i BTS materijali za diving iskustvo.",
    slug: "trogir-diving-center",
  },
  {
    title: "Forte Solar TV reklama",
    type: "TV reklama",
    industry: "Renewable Energy",
    year: "2025",
    video: "https://raw.githubusercontent.com/schwarzman8/fundamentoweb/038b1e1cf0f36154f797efd00b86abed74b8d8e0/ForteSolar_TVC_01_UHD_16x9_30fps_TL1_web.mp4",
    summary: "Drugi TVC format za Forte Solar, objedinjen unutar glavne Forte Solar projekt stranice.",
    slug: "forte-solar-tvc-2",
  },
];

const partnerProjects = [
  {
    title: "FORTE SOLAR",
    type: "Renewable Energy",
    year: "2025",
    video: "assets/videos/FORTESOLAR_TVC1_16x9_UHD_30fps_TL1_web.mp4",
    image: "https://picsum.photos/seed/forte-solar-brand/1200/900",
    summary: "Vodeći graditelj solarnih elektrana.",
  },
  {
    title: "REVITA CLINIC",
    type: "Medical Wellness / Hospitality",
    year: "2025",
    video: "assets/videos/project-02.mp4",
    image: "assets/partners/Revita%20Clinic/optimized/photos/revita-photo-17.jpg",
    summary: "Medicinski wellness centar smješten u boutique hotelu s pet zvjezdica, specijaliziran za biološku dugovječnost.",
  },
  {
    title: "CENTRAL CAFE",
    type: "Hospitality",
    year: "2025",
    video: "assets/videos/project-03.mp4",
    image: "assets/partners/Central%20Cafe/optimized/photos/central-photo-08.jpg",
    preferImage: true,
    summary: "Kavana i slastičarnica s više od 20 godina iskustva.",
  },
  {
    title: "VOLKSWAGEN BOSNIĆ",
    type: "Automotive",
    year: "2024",
    video: "assets/videos/project-04.mp4",
    image: "https://picsum.photos/seed/vw-bosnic-production/1200/900",
    summary: "Ovlašteni Volkswagen i Škoda servis s više od tri desetljeća iskustva.",
  },
  {
    title: "HOTEL AMBASADOR",
    type: "Hospitality",
    year: "2026",
    video: "assets/videos/project-02.mp4",
    image: "https://picsum.photos/seed/hotel-ambasador-visuals/1200/900",
    summary: "Hotel s 5 zvjezdica s pogledom na Jadran, mediteranskim restoranom i spa centrom.",
  },
  {
    title: "Rezervirano",
    type: "Dolazi uskoro",
    year: "2025",
    video: "assets/videos/project-03.mp4",
    image: "https://picsum.photos/seed/fundamento-placeholder-project/1200/900",
    summary: "Rezervirano mjesto za sljedeću partnersku suradnju.",
    reserved: true,
  },
];

const clientLogos = [
  { name: "Agencija 404", src: "assets/clients/Agencija404.svg", visualScale: 1.22, heightBleed: "10px" },
  { name: "Europska komisija", src: "assets/clients/EK_HRV.png", visualScale: 1.04 },
  { name: "Central Cafe", src: "assets/clients/CentralCafe.png", visualScale: 0.92 },
  { name: "Fox Fishing", src: "assets/clients/FoxFishing.png", visualScale: 0.7 },
  { name: "Hotel Aleksander", src: "assets/clients/hotel-aleksander.png", visualScale: 1.58, heightBleed: "18px" },
  { name: "Maslina Resort", src: "assets/clients/maslina-resort.png", visualScale: 1.1, heightBleed: "6px" },
  { name: "Infobip Shift", src: "assets/clients/infopib shift.png", visualScale: 1.1, heightBleed: "6px" },
  { name: "Mood Media", src: "assets/clients/moodmedia.png", visualScale: 1.02 },
  { name: "Rosetta Stone", src: "assets/clients/rosetta-stone-logo.png", visualScale: 1.18, heightBleed: "8px" },
  { name: "Vrh komunikacije", src: "assets/clients/vrh-komunikacije.png", visualScale: 1.12 },
  { name: "Krannich", src: "assets/clients/krannich.svg", visualScale: 1.05 },
  { name: "SPLX AI", src: "assets/clients/splixai.svg", visualScale: 1.06 },
  { name: "Entrio", src: "assets/clients/entrio.svg", visualScale: 1.55, heightBleed: "10px", upscale: 1.45 },
  { name: "Forte Solar", src: "assets/clients/forte-solar-logo.svg", visualScale: 1.36, heightBleed: "14px" },
  { name: "Revita Clinic", src: "assets/clients/revita.svg", visualScale: 1.16, heightBleed: "8px" },
  { name: "Volkswagen Bosnić", src: "assets/clients/bosnic-logo-2025-xl.png", visualScale: 1.5, heightBleed: "28px" },
  { name: "Hotel Ambasador", src: "assets/clients/ambasadorsplit.png", visualScale: 1.02, heightBleed: "6px" },
  { name: "Travel Croatia", src: "assets/clients/travelCro.png", visualScale: 0.94 },
  { name: "Trogir Diving Center", src: "assets/clients/TDC.png", visualScale: 1.52, heightBleed: "30px" },
  { name: "FESB", src: "assets/clients/fesb.png", visualScale: 0.96 },
  { name: "UHY", src: "assets/clients/uhy.svg", visualScale: 1.06 },
  { name: "YPO", src: "assets/clients/Clients_og/YPO_logo-white.png", visualScale: 1.08, heightBleed: "6px" },
  { name: "STC", src: "assets/clients/Clients_og/stc-white.png", visualScale: 1.16, heightBleed: "10px" },
];

const HIGHLIGHT_QUEUE_KEY = "fundamento.highlightQueue";
const LAST_HIGHLIGHT_KEY = "fundamento.lastHighlight";

function shuffleProjectIndices(previousIndex = null) {
  const indices = highlightProjects.map((_, index) => index);

  for (let i = indices.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[swapIndex]] = [indices[swapIndex], indices[i]];
  }

  if (indices.length > 1 && indices[0] === previousIndex) {
    const swapIndex = 1 + Math.floor(Math.random() * (indices.length - 1));
    [indices[0], indices[swapIndex]] = [indices[swapIndex], indices[0]];
  }

  return indices;
}

function getInitialProjectIndex() {
  try {
    const previousIndex = Number(localStorage.getItem(LAST_HIGHLIGHT_KEY));
    const parsedQueue = JSON.parse(localStorage.getItem(HIGHLIGHT_QUEUE_KEY) || "[]");
    const isValidQueue =
      Array.isArray(parsedQueue) &&
      parsedQueue.every((index) => Number.isInteger(index) && index >= 0 && index < highlightProjects.length);
    const queue = isValidQueue && parsedQueue.length ? parsedQueue : shuffleProjectIndices(previousIndex);
    const nextIndex = queue.shift();

    localStorage.setItem(HIGHLIGHT_QUEUE_KEY, JSON.stringify(queue));
    localStorage.setItem(LAST_HIGHLIGHT_KEY, String(nextIndex));

    return nextIndex;
  } catch {
    return Math.floor(Math.random() * highlightProjects.length);
  }
}

let activeProject = getInitialProjectIndex();

const projectWheel = document.querySelector("#projectWheel");
const projectBento = document.querySelector("#projectBento");
const heroMedia = document.querySelector(".hero-media-wrap");
const heroVideo = document.querySelector(".hero-video");
const PROJECT_RETURN_PENDING_KEY = "fundamento.projectReturnPending";
const PROJECT_RETURN_SCROLL_KEY = "fundamento.projectReturnScroll";
const PROJECT_RETURN_URL_KEY = "fundamento.projectReturnUrl";

const miniGalleries = [
  [
    { type: "image", src: "https://picsum.photos/seed/monochrome-web-system/1200/900", alt: "Monochrome web detail" },
    { type: "image", src: "https://picsum.photos/seed/brand-photo-atmosphere/1200/900", alt: "Brand atmosphere detail" },
    { type: "image", src: "https://picsum.photos/seed/digital-interface-night/1200/900", alt: "Digital interface detail" },
  ],
  [
    { type: "video", src: "assets/videos/project-02.mp4", alt: "" },
    { type: "image", src: "https://picsum.photos/seed/motion-board-frames/1200/900", alt: "Motion board frames" },
    { type: "video", src: "assets/videos/project-04.mp4", alt: "" },
  ],
  [
    { type: "image", src: "https://picsum.photos/seed/editorial-brand-grid/1200/900", alt: "Editorial brand grid" },
    { type: "image", src: "https://picsum.photos/seed/campaign-layout-system/1200/900", alt: "Campaign layout system" },
    { type: "image", src: "https://picsum.photos/seed/print-digital-rhythm/1200/900", alt: "Print and digital rhythm" },
  ],
  [
    { type: "video", src: "assets/videos/project-03.mp4", alt: "" },
    { type: "image", src: "https://picsum.photos/seed/launch-assets-studio/1200/900", alt: "Launch assets studio" },
    { type: "video", src: "assets/videos/FORTESOLAR_TVC1_16x9_UHD_30fps_TL1_web.mp4", alt: "" },
  ],
];

function isTouchLayout() {
  return window.matchMedia("(hover: none), (pointer: coarse), (max-width: 820px)").matches;
}

function wrapIndex(index, length = highlightProjects.length) {
  return (index + length) % length;
}

function projectSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function projectUrl(project) {
  return `project.html?project=${project.slug || projectSlug(project.title)}`;
}

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
  window.dispatchEvent(new Event("scroll"));
  window.setTimeout(() => window.dispatchEvent(new Event("scroll")), 120);
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

function setupInitialHeroPosition() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const getNavigationType = () => performance.getEntriesByType("navigation")[0]?.type || "navigate";
  const shouldResetToHero = () =>
    getNavigationType() === "reload" || !window.location.hash || window.location.hash === "#home";

  const resetToHero = () => {
    if (window.location.hash !== "#home") {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.body.dataset.navScrolled = "false";
    document.body.dataset.socialHidden = "false";
    window.dispatchEvent(new Event("scroll"));
  };

  const syncRestoredScroll = () => {
    requestAnimationFrame(() => window.dispatchEvent(new Event("scroll")));
  };

  if (restoreProjectReturnScroll()) {
    requestAnimationFrame(restoreProjectReturnScroll);
  } else if (getNavigationType() === "back_forward") {
    syncRestoredScroll();
  } else if (shouldResetToHero()) {
    resetToHero();
  }

  window.addEventListener("pageshow", (event) => {
    if (restoreProjectReturnScroll()) return;
    if (event.persisted || getNavigationType() === "back_forward") {
      syncRestoredScroll();
      return;
    }
    if (shouldResetToHero()) resetToHero();
  });

  window.addEventListener("load", () => {
    if (restoreProjectReturnScroll()) {
      requestAnimationFrame(restoreProjectReturnScroll);
      window.setTimeout(restoreProjectReturnScroll, 140);
      return;
    }

    if (!shouldResetToHero()) return;
    resetToHero();
    requestAnimationFrame(resetToHero);
    window.setTimeout(resetToHero, 140);
  });
}

function renderWheel() {
  projectWheel.innerHTML = highlightProjects
    .map(
      (project, index) => `
        <article class="wheel-project is-hidden" data-index="${index}" aria-label="${project.title}, ${project.type}">
          <video src="${project.video}" playsinline preload="metadata"></video>
          <button class="wheel-play-button" type="button" aria-label="Pokreni video ${project.title}">
            <span aria-hidden="true"></span>
          </button>
          <div class="wheel-project-info">
            <strong>${project.title}</strong>
            <a class="wheel-project-link" href="${projectUrl(project)}" aria-label="Saznaj više o projektu ${project.title}">Saznaj više</a>
          </div>
        </article>
      `,
    )
    .join("");

  projectWheel.querySelectorAll(".wheel-project").forEach((card) => {
    const index = Number(card.dataset.index);
    const video = card.querySelector("video");
    const link = card.querySelector(".wheel-project-link");
    const playButton = card.querySelector(".wheel-play-button");
    const syncPlayState = () => {
      card.classList.toggle("is-playing", !video.paused && !video.ended);
      playButton.setAttribute("aria-label", video.paused ? `Pokreni video ${highlightProjects[index].title}` : `Pauziraj video ${highlightProjects[index].title}`);
    };

    card.addEventListener("click", () => {
      activeProject = index;
      updateWheel();
    });
    ["click", "pointerdown"].forEach((eventName) => {
      video.addEventListener(eventName, (event) => {
        event.stopPropagation();
      });
    });
    playButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!card.classList.contains("center")) {
        activeProject = index;
        updateWheel();
        return;
      }

      if (video.paused || video.ended) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    video.addEventListener("play", syncPlayState);
    video.addEventListener("pause", syncPlayState);
    video.addEventListener("ended", syncPlayState);
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  updateWheel();
}

function updateWheel() {
  projectWheel.querySelectorAll(".wheel-project").forEach((card) => {
    const index = Number(card.dataset.index);
    const video = card.querySelector("video");
    const diff = wrapIndex(index - activeProject, highlightProjects.length);

    card.classList.remove("center", "side-left", "side-right", "far-left", "far-right", "is-hidden");

    if (index === activeProject) {
      card.classList.add("center");
      video.controls = true;
      return;
    }

    video.controls = false;
    video.pause();
    video.currentTime = 0;
    card.classList.remove("is-playing");

    if (diff === 1) {
      card.classList.add("side-right");
    } else if (diff === 2) {
      card.classList.add("far-right");
    } else if (diff === highlightProjects.length - 1) {
      card.classList.add("side-left");
    } else if (diff === highlightProjects.length - 2) {
      card.classList.add("far-left");
    } else {
      card.classList.add("is-hidden");
    }
  });
}

function renderBento() {
  const cards = partnerProjects.map((project, index) => {
    const useVideo = index % 2 === 0 && !project.preferImage;
    const media =
      useVideo
        ? `<video src="${project.video}" muted loop playsinline preload="metadata"></video>`
        : `<img src="${project.image}" alt="${project.title}" />`;

    const expandControl = project.reserved
      ? ""
      : `
        <a class="bento-expand-link" href="${projectUrl(project)}" aria-label="Otvori projekt ${project.title}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 6h10v10" />
            <path d="M18 6 6 18" />
          </svg>
        </a>
      `;

    return `
      <article class="bento-card${project.reserved ? " is-reserved" : ""}" data-project-card data-index="${index}" tabindex="0">
        <button class="bento-close" type="button" aria-label="Smanji projekt">
          <span aria-hidden="true">&uarr;</span>
        </button>
        ${expandControl}
        ${media}
        <div class="bento-content">
          <p class="kicker">${project.type}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
      </article>
    `;
  });

  projectBento.innerHTML = cards
    .reduce((rows, card, index) => {
      if (index % 2 === 0) rows.push([]);
      rows[rows.length - 1].push(card);
      return rows;
    }, [])
    .map((row, index) => `<div class="bento-row bento-row-${index + 1}">${row.join("")}</div>`)
    .join("");

  let bentoScrollTimer = null;

  function centerExpandedCard(card) {
    if (!isTouchLayout()) return;
    window.clearTimeout(bentoScrollTimer);

    const scrollToCard = () => {
      if (!card.classList.contains("is-expanded")) return;

      const nav = document.querySelector(".site-nav");
      const navHeight = nav?.getBoundingClientRect().height || 0;
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const rect = card.getBoundingClientRect();
      const visibleHeight = Math.max(300, viewportHeight - navHeight - 28);
      const centerOffset = rect.height < visibleHeight ? (visibleHeight - rect.height) / 2 : 12;
      const targetTop = window.scrollY + rect.top - navHeight - centerOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    };

    window.setTimeout(scrollToCard, 80);
    bentoScrollTimer = window.setTimeout(scrollToCard, 760);
  }

  function animateProjectLayout(action) {
    if (isTouchLayout()) {
      action();
      return;
    }

    const cards = [...projectBento.querySelectorAll(".bento-card")];
    const first = new Map(cards.map((item) => [item, item.getBoundingClientRect()]));

    projectBento.classList.add("is-animating");
    action();

    const last = new Map(cards.map((item) => [item, item.getBoundingClientRect()]));
    const animations = cards.map((item) => {
      const start = first.get(item);
      const end = last.get(item);
      if (!start || !end) return null;

      const deltaX = start.left - end.left;
      const deltaY = start.top - end.top;
      const scaleX = start.width / Math.max(end.width, 1);
      const scaleY = start.height / Math.max(end.height, 1);

      return item.animate(
        [
          {
            transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
            opacity: 0.98,
          },
          { transform: "translate(0, 0) scale(1, 1)" },
        ],
        {
          duration: 760,
          easing: "cubic-bezier(0.19, 1, 0.22, 1)",
        },
      );
    });

    Promise.allSettled(animations.filter(Boolean).map((animation) => animation.finished)).then(() => {
      projectBento.classList.remove("is-animating");
    });
  }

  function closeExpanded() {
    animateProjectLayout(() => {
      projectBento.classList.remove("has-expanded");
      document.body.dataset.projectExpanded = "false";
      projectBento.querySelectorAll(".bento-card").forEach((item) => {
        item.classList.remove("is-expanded", "is-minimized");
        const itemVideo = item.querySelector("video");
        if (itemVideo) {
          itemVideo.pause();
          itemVideo.currentTime = 0;
        }
      });
    });
  }

  projectBento.querySelectorAll(".bento-card").forEach((card) => {
    const video = card.querySelector("video");
    const closeButton = card.querySelector(".bento-close");
    const expandLink = card.querySelector(".bento-expand-link");
    const toggleCard = () => {
      if (card.classList.contains("is-reserved")) return;

      const isOpen = card.classList.contains("is-expanded");

      if (isOpen) {
        closeExpanded();
        return;
      }

      animateProjectLayout(() => {
        projectBento.classList.add("has-expanded");
        document.body.dataset.projectExpanded = "true";
        projectBento.querySelectorAll(".bento-card").forEach((item) => {
          item.classList.remove("is-expanded", "is-minimized");
          const itemVideo = item.querySelector("video");
          if (itemVideo) {
            itemVideo.pause();
            itemVideo.currentTime = 0;
          }
        });
        card.classList.add("is-expanded");
        projectBento.querySelectorAll(".bento-card:not(.is-expanded)").forEach((item) => {
          item.classList.add("is-minimized");
        });
        video?.play();
      });
      centerExpandedCard(card);
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest(".bento-close, .bento-expand-link")) return;
      if (card.classList.contains("is-reserved")) return;
      if (!isTouchLayout()) return;
      toggleCard();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        if (!isTouchLayout()) return;
        if (card.classList.contains("is-reserved")) return;
        event.preventDefault();
        toggleCard();
      }
    });
    closeButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      closeExpanded();
    });
    expandLink?.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    if (video) {
      card.addEventListener("mouseenter", () => {
        video.play();
      });
      card.addEventListener("mouseleave", () => {
        if (!card.classList.contains("is-expanded")) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeExpanded();
  });
}

function moveWheel(direction) {
  activeProject = wrapIndex(activeProject + direction);
  updateWheel();
}

function setupSwipeNavigation(target, { onSwipeLeft, onSwipeRight, threshold = 44 }) {
  if (!target) return;

  let startX = 0;
  let startY = 0;
  let startTime = 0;

  target.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) return;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      startTime = Date.now();
    },
    { passive: true },
  );

  target.addEventListener(
    "touchend",
    (event) => {
      if (!startTime || event.changedTouches.length !== 1) return;

      const deltaX = event.changedTouches[0].clientX - startX;
      const deltaY = event.changedTouches[0].clientY - startY;
      const elapsed = Date.now() - startTime;
      startTime = 0;

      if (elapsed > 720) return;
      if (Math.abs(deltaX) < threshold) return;
      if (Math.abs(deltaX) < Math.abs(deltaY) * 1.18) return;

      if (deltaX < 0) {
        onSwipeLeft?.();
      } else {
        onSwipeRight?.();
      }
    },
    { passive: true },
  );
}

function setupWheelGestures() {
  const wheelSurface = document.querySelector(".hero-wheel");
  setupSwipeNavigation(wheelSurface, {
    onSwipeLeft: () => moveWheel(1),
    onSwipeRight: () => moveWheel(-1),
    threshold: 38,
  });
}

function setupHeroVideo() {
  if (!heroMedia || !heroVideo) return;

  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;
  heroVideo.autoplay = true;
  heroVideo.preload = "auto";
  heroVideo.play().catch(() => {});
}

function setupHeroHoverReadiness() {
  if (!document.querySelector(".hero-section")) return;
  document.body.dataset.heroReady = "true";
}

function setupClientLogoMarquee() {
  const marquee = document.querySelector("[data-logo-marquee]");
  const track = marquee?.querySelector("[data-logo-track]");
  if (!marquee || !track || !clientLogos.length) return;

  const createSequence = () => {
    const sequence = document.createElement("div");
    sequence.className = "client-logo-sequence";
    sequence.setAttribute("aria-hidden", "true");

    clientLogos.forEach((logo) => {
      const slot = document.createElement("span");
      slot.className = "client-logo";
      if (logo.preserveColor) slot.dataset.logoColor = "preserve";
      if (logo.visualScale) slot.style.setProperty("--logo-scale", logo.visualScale);
      if (logo.heightBleed) slot.style.setProperty("--logo-height-bleed", logo.heightBleed);
      if (logo.upscale) slot.style.setProperty("--logo-upscale", logo.upscale);

      const image = document.createElement("img");
      image.src = logo.src;
      image.alt = "";
      image.decoding = "async";
      image.loading = "eager";
      image.draggable = false;
      image.addEventListener("load", measure, { once: true });

      slot.append(image);
      sequence.append(slot);
    });

    return sequence;
  };

  let offset = 0;
  let loopWidth = 0;
  let lastTime = performance.now();
  let pointerId = null;
  let dragX = 0;
  const speed = 0.036;

  const normalizeOffset = () => {
    if (!loopWidth) return;
    offset = ((offset % loopWidth) + loopWidth) % loopWidth;
  };

  const measure = () => {
    const firstSequence = track.querySelector(".client-logo-sequence");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    loopWidth = firstSequence ? firstSequence.getBoundingClientRect().width + gap : 0;
    normalizeOffset();
  };

  const render = () => {
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
  };

  const tick = (time) => {
    const delta = Math.min(48, time - lastTime);
    lastTime = time;

    if (pointerId === null && !marquee.matches(":hover")) {
      offset += delta * speed;
      normalizeOffset();
      render();
    }

    requestAnimationFrame(tick);
  };

  marquee.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    pointerId = event.pointerId;
    dragX = event.clientX;
    marquee.classList.add("is-dragging");
    marquee.setPointerCapture?.(event.pointerId);
  });

  const drag = (event) => {
    if (pointerId !== event.pointerId) return;
    event.preventDefault();
    const deltaX = event.clientX - dragX;
    dragX = event.clientX;
    offset -= deltaX;
    normalizeOffset();
    render();
  };

  window.addEventListener("pointermove", drag);

  const releaseDrag = (event) => {
    if (pointerId !== event.pointerId) return;
    pointerId = null;
    marquee.classList.remove("is-dragging");
    marquee.releasePointerCapture?.(event.pointerId);
  };

  marquee.addEventListener("pointerup", releaseDrag);
  marquee.addEventListener("pointercancel", releaseDrag);
  marquee.addEventListener("lostpointercapture", releaseDrag);
  window.addEventListener("pointerup", releaseDrag);
  window.addEventListener("pointercancel", releaseDrag);
  window.addEventListener("resize", measure);

  track.replaceChildren(createSequence(), createSequence());

  requestAnimationFrame(() => {
    measure();
    render();
    requestAnimationFrame(tick);
  });
}

function setupInkButtons() {
  document.querySelectorAll(".ink-button").forEach((button) => {
    let trailX = 0;
    let trailY = 0;
    let rafId = null;
    let lastDropAt = 0;

    const setInkPosition = (x, y) => {
      button.style.setProperty("--ink-x", `${x}px`);
      button.style.setProperty("--ink-y", `${y}px`);

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        trailX += (x - trailX) * 0.32;
        trailY += (y - trailY) * 0.32;
        button.style.setProperty("--ink-trail-x", `${trailX}px`);
        button.style.setProperty("--ink-trail-y", `${trailY}px`);
      });
    };

    const addInkDrop = (x, y) => {
      const now = performance.now();
      if (now - lastDropAt < 34) return;
      lastDropAt = now;

      const drop = document.createElement("b");
      drop.className = "ink-drop";
      drop.style.left = `${x}px`;
      drop.style.top = `${y}px`;
      drop.style.setProperty("--drop-size", `${2 + Math.random() * 3.5}px`);
      drop.style.setProperty("--drop-x", `${(Math.random() - 0.5) * 10}px`);
      drop.style.setProperty("--drop-y", `${(Math.random() - 0.5) * 8}px`);
      button.append(drop);

      window.setTimeout(() => drop.remove(), 700);
    };

    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setInkPosition(x, y);
      addInkDrop(x, y);
    });

    button.addEventListener("mouseenter", (event) => {
      const rect = button.getBoundingClientRect();
      trailX = event.clientX - rect.left;
      trailY = event.clientY - rect.top;
      setInkPosition(trailX, trailY);
      addInkDrop(trailX, trailY);
    });
  });
}

function setupSmoothAnchors() {
  const getScrollTarget = (target) => {
    if (target.id === "home") return 0;
    return Math.max(0, window.scrollY + target.getBoundingClientRect().top);
  };

  const getTargetSection = (target) =>
    target.matches("[data-nav-tone]")
      ? target
      : target.querySelector("[data-nav-tone]") || target.closest("[data-nav-tone]");

  const syncAnchorChrome = (target, top) => {
    window.dispatchEvent(
      new CustomEvent("fundamento:anchor-target", {
        detail: {
          section: getTargetSection(target),
          top,
        },
      }),
    );
  };

  const scrollToHashTarget = (target, behavior = "smooth") => {
    window.ScrollTrigger?.refresh?.();
    const top = getScrollTarget(target);
    syncAnchorChrome(target, top);
    window.scrollTo({ top, behavior });
    window.setTimeout(() => syncAnchorChrome(target, top), behavior === "smooth" ? 280 : 0);
    window.setTimeout(() => window.dispatchEvent(new Event("scroll")), behavior === "smooth" ? 760 : 0);
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.matches("[data-privacy-open]")) return;

      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      history.replaceState(null, "", id);
      scrollToHashTarget(target);
    });
  });

  window.addEventListener("load", () => {
    if (hasProjectReturnScroll()) return;
    if (!window.location.hash) return;
    if (window.location.hash === "#privacy") return;

    const target = document.querySelector(window.location.hash);
    if (!target) return;

    window.setTimeout(() => scrollToHashTarget(target, "auto"), 60);
  });
}

function setupPrivacyOverlay() {
  const overlay = document.querySelector("#privacy");
  if (!overlay) return;

  const openButtons = document.querySelectorAll("[data-privacy-open]");
  const closeButtons = overlay.querySelectorAll("[data-privacy-close]");
  const closeOverlay = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.dataset.privacyOpen = "false";
    if (window.location.hash === "#privacy") {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  const openOverlay = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.dataset.privacyOpen = "true";
    history.replaceState(null, "", "#privacy");
    overlay.querySelector(".privacy-document")?.scrollTo({ top: 0, behavior: "auto" });
    overlay.querySelector("[data-privacy-close]")?.focus({ preventScroll: true });
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openOverlay();
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeOverlay);
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) closeOverlay();
  });

  if (window.location.hash === "#privacy") {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
  }
}

function setupMobileNav() {
  const nav = document.querySelector(".site-nav");
  const menuButton = document.querySelector(".nav-menu");
  if (!nav || !menuButton) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    document.body.dataset.mobileNavOpen = "false";
    document.documentElement.dataset.mobileNavOpen = "false";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Otvori navigaciju");
  };

  menuButton.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    document.body.dataset.mobileNavOpen = String(willOpen);
    document.documentElement.dataset.mobileNavOpen = String(willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "Zatvori navigaciju" : "Otvori navigaciju");
  });

  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (!isTouchLayout()) closeMenu();
  });
}

function setupWheelControls() {
  document.querySelectorAll("[data-wheel]").forEach((button) => {
    button.addEventListener("click", () => {
      moveWheel(button.dataset.wheel === "next" ? 1 : -1);
    });
  });
}

function setupTiltCards() {
  document.querySelectorAll("[data-tilt-card]").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function setupAccordion() {
  const panels = [...document.querySelectorAll(".accordion-panel")];
  if (!panels.length) return;
  let scrollTimer = null;

  const centerOpenPanel = (panel) => {
    if (!isTouchLayout()) return;
    window.clearTimeout(scrollTimer);

    const scrollToPanel = () => {
      if (!panel.classList.contains("is-open")) return;

      const nav = document.querySelector(".site-nav");
      const navHeight = nav?.getBoundingClientRect().height || 0;
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const rect = panel.getBoundingClientRect();
      const visibleHeight = Math.max(280, viewportHeight - navHeight - 28);
      const centerOffset = rect.height < visibleHeight ? (visibleHeight - rect.height) / 2 : 12;
      const targetTop = window.scrollY + rect.top - navHeight - centerOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    };

    requestAnimationFrame(scrollToPanel);
    scrollTimer = window.setTimeout(scrollToPanel, 540);
  };

  const closePanels = () => {
    panels.forEach((item) => item.classList.remove("is-open"));
  };

  const openPanel = (panel) => {
    closePanels();
    panel.classList.add("is-open");
  };

  const syncInitialState = () => {
    if (isTouchLayout()) {
      closePanels();
      return;
    }

    if (!panels.some((panel) => panel.classList.contains("is-open"))) {
      openPanel(panels[0]);
    }
  };

  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      if (!isTouchLayout()) openPanel(panel);
    });
    panel.addEventListener("click", () => {
      if (isTouchLayout()) {
        if (panel.classList.contains("is-open")) {
          closePanels();
        } else {
          openPanel(panel);
          centerOpenPanel(panel);
        }
        return;
      }

      openPanel(panel);
    });
    panel.addEventListener("focusin", () => {
      if (!isTouchLayout()) openPanel(panel);
    });
  });

  let wasTouchLayout = isTouchLayout();
  syncInitialState();

  window.addEventListener("resize", () => {
    const nextTouchLayout = isTouchLayout();
    if (nextTouchLayout === wasTouchLayout) return;
    wasTouchLayout = nextTouchLayout;
    syncInitialState();
  });
}

function setupMediaCards() {
  const useViewportPlayback = isTouchLayout();
  const observer = useViewportPlayback
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.35 },
      )
    : null;

  document.querySelectorAll(".media-card").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;

    video.pause();
    if (observer) {
      observer.observe(video);
      return;
    }

    card.addEventListener("mouseenter", () => video.play());
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

function setupMiniGalleries() {
  document.querySelectorAll("[data-mini-gallery]").forEach((card) => {
    let activeIndex = 0;
    const gallery = miniGalleries[Number(card.dataset.miniGallery)] || [];
    if (!gallery.length) return;

    const renderMedia = () => {
      const current = gallery[activeIndex];
      const oldMedia = card.querySelector(":scope > img, :scope > video");
      if (!oldMedia) return;

      const media =
        current.type === "video"
          ? document.createElement("video")
          : document.createElement("img");

      media.src = current.src;
      if (current.type === "video") {
        media.muted = true;
        media.loop = true;
        media.playsInline = true;
        media.preload = "metadata";
        if (isTouchLayout() || card.matches(":hover")) {
          media.play().catch(() => {});
        }
      } else {
        media.alt = current.alt;
      }

      oldMedia.replaceWith(media);
    };

    card.querySelectorAll("[data-gallery-step]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const step = Number(button.dataset.galleryStep);
        activeIndex = wrapIndex(activeIndex + step, gallery.length);
        renderMedia();
      });
    });

    setupSwipeNavigation(card, {
      onSwipeLeft: () => {
        activeIndex = wrapIndex(activeIndex + 1, gallery.length);
        renderMedia();
      },
      onSwipeRight: () => {
        activeIndex = wrapIndex(activeIndex - 1, gallery.length);
        renderMedia();
      },
      threshold: 34,
    });

    card.addEventListener("mouseenter", () => card.querySelector(":scope > video")?.play().catch(() => {}));
    card.addEventListener("mouseleave", () => {
      const video = card.querySelector(":scope > video");
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
  });
}

function setupChromeState() {
  const toneSections = [...document.querySelectorAll("[data-nav-tone]")];
  const heroSection = document.querySelector(".hero-section");
  const siteNav = document.querySelector(".site-nav");

  const navColorsBySection = {
    home: { bg: "#030303", fg: "#f3efe7" },
    projects: { bg: "#030303", fg: "#f3efe7" },
    gallery: { bg: "#030303", fg: "#f3efe7" },
    about: { bg: "#030303", fg: "#f3efe7" },
    contact: { bg: "#ffffff", fg: "#030303" },
  };

  const getFallbackTone = (element) =>
    element?.closest?.("[data-nav-tone]")?.dataset.navTone || null;

  const getLuminanceTone = (element) => {
    const stack = [];
    for (let node = element; node instanceof Element; node = node.parentElement) {
      if (node === document.body || node === document.documentElement) break;
      stack.push(node);
    }

    for (const node of stack) {
      const background = getComputedStyle(node).backgroundColor;
      const match = background.match(/rgba?\(([^)]+)\)/);
      if (!match) continue;

      const [r, g, b, a = "1"] = match[1].split(",").map((value) => Number.parseFloat(value));
      if (!Number.isFinite(r) || Number.isNaN(a) || a < 0.25) continue;

      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return luminance > 0.56 ? "dark" : "light";
    }

    return null;
  };

  const getToneAtPoint = (x, y) => {
    const elements = document.elementsFromPoint(x, y);
    const target = elements.find(
      (element) =>
        !element.closest(".site-nav") &&
        !element.closest(".social-rail") &&
        element !== document.body &&
        element !== document.documentElement,
    );

    return getLuminanceTone(target) || getFallbackTone(target);
  };

  const getSectionAtPoint = (x, y) =>
    document
      .elementsFromPoint(x, y)
      .find((element) => !element.closest(".site-nav") && element.closest?.("[data-nav-tone]"))
      ?.closest("[data-nav-tone]");

  const getActiveSection = (sampleXs, sampleY) => {
    const sections = sampleXs
      .map((x) => getSectionAtPoint(Math.min(Math.max(x, 1), window.innerWidth - 1), sampleY))
      .filter(Boolean);

    return (
      sections[1] ||
      sections[0] ||
      toneSections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom >= sampleY;
      }) ||
      toneSections[0]
    );
  };

  const setNavColors = (section, tone) => {
    const key = section?.id || (section?.classList.contains("hero-section") ? "home" : "");
    const colors =
      navColorsBySection[key] ||
      (tone === "dark"
        ? { bg: "#fbfaf6", fg: "#030303" }
        : { bg: "#030303", fg: "#f3efe7" });

    document.documentElement.style.setProperty("--nav-bg-current", colors.bg);
    document.documentElement.style.setProperty("--nav-fg-current", colors.fg);
    document.body.dataset.navContrast = colors.fg === "#030303" ? "dark" : "light";
  };

  function updateChrome() {
    const navRect = siteNav?.getBoundingClientRect();
    const sampleY = Math.min(
      Math.max(navRect ? navRect.top + navRect.height * 0.5 : 42, 1),
      window.innerHeight - 1,
    );
    const sampleXs = navRect
      ? [navRect.left + 22, navRect.left + navRect.width * 0.5, navRect.right - 22]
      : [32, window.innerWidth * 0.5, window.innerWidth - 32];
    const activeSectionAtNav = getActiveSection(sampleXs, sampleY);
    const tones = sampleXs
      .map((x) => getToneAtPoint(Math.min(Math.max(x, 1), window.innerWidth - 1), sampleY))
      .filter(Boolean);
    const lightVotes = tones.filter((tone) => tone === "light").length;
    const darkVotes = tones.filter((tone) => tone === "dark").length;

    if (lightVotes || darkVotes) {
      document.body.dataset.navTone = lightVotes >= darkVotes ? "light" : "dark";
    } else {
      const activeSection =
        toneSections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= sampleY && rect.bottom >= sampleY;
        }) || toneSections[0];
      document.body.dataset.navTone = activeSection?.dataset.navTone || "light";
    }
    setNavColors(activeSectionAtNav, document.body.dataset.navTone);

    if (heroSection) {
      document.body.dataset.socialHidden = window.scrollY > 2 ? "true" : "false";
    }

    document.body.dataset.navScrolled = window.scrollY > 8 ? "true" : "false";
  }

  window.addEventListener("fundamento:anchor-target", (event) => {
    const section = event.detail?.section;
    if (!section) return;

    document.body.dataset.navTone = section.dataset.navTone || "light";
    document.body.dataset.navScrolled = event.detail?.top > 8 ? "true" : "false";
    document.body.dataset.socialHidden = event.detail?.top > 2 ? "true" : "false";
    setNavColors(section, document.body.dataset.navTone);
  });

  updateChrome();
  window.addEventListener("scroll", updateChrome, { passive: true });
  window.addEventListener("resize", updateChrome);
}

function setupForms() {
  const buildContactBody = (values) =>
    [
      `Ime: ${values.name}`,
      `Email: ${values.email}`,
      `Opis projekta: ${values.project}`,
      `Rok završetka projekta: ${values.deadline || "Nije naveden"}`,
      `Termin sastanka: ${values.meeting}`,
      `Newsletter: ${values.newsletter}`,
      `Stranica: ${window.location.href}`,
    ].join("\n");

  const contactSuccessMessage = "Hvala na javljanju. Upit je poslan na info@fundamen.to i javit ćemo se uskoro.";
  const contactErrorMessage =
    "Slanje nije potvrđeno. Otvorili smo email s istim podacima kako biste ga mogli poslati direktno na info@fundamen.to.";

  const resetDatePlaceholders = (form) => {
    form.querySelectorAll('input[type="date"][data-placeholder]').forEach((input) => {
      input.classList.toggle("has-value", Boolean(input.value));
    });
  };

  const setContactSubmitted = (form, isSubmitted) => {
    const thanks = form.querySelector("[data-form-thanks]");
    const progress = form.querySelector(".form-progress");
    const steps = form.querySelector(".form-steps");
    const actions = form.querySelector(".form-actions");

    form.dataset.formSubmitted = isSubmitted ? "true" : "false";

    if (thanks) {
      thanks.hidden = !isSubmitted;
      if (isSubmitted) {
        window.setTimeout(() => thanks.focus({ preventScroll: true }), 0);
      }
    }

    if (progress) progress.hidden = isSubmitted;
    if (steps) steps.hidden = isSubmitted;
    if (actions) actions.hidden = isSubmitted;

    form
      .querySelectorAll("input, textarea, select, button:not([data-form-again])")
      .forEach((field) => {
        field.disabled = isSubmitted;
      });
  };

  const setupContactStepper = (form) => {
    const steps = Array.from(form.querySelectorAll("[data-form-step]"));
    if (!steps.length) return;

    const progressLabel = form.querySelector("[data-form-progress]");
    const dots = Array.from(form.querySelectorAll("[data-form-dot]"));
    const previousButton = form.querySelector("[data-form-prev]");
    const nextButton = form.querySelector("[data-form-next]");
    const submitButton = form.querySelector("[data-form-submit]");
    const status = form.querySelector("[data-form-status]");
    const againButton = form.querySelector("[data-form-again]");
    let currentStep = 0;

    const setStatus = (message = "", type = "neutral") => {
      if (!status) return;
      status.textContent = message;
      status.classList.toggle("is-error", type === "error");
      status.classList.toggle("is-success", type === "success");
    };

    const showStep = (index) => {
      currentStep = Math.max(0, Math.min(index, steps.length - 1));
      form.dataset.formStepCurrent = String(currentStep);
      form.style.setProperty("--form-progress-ratio", String((currentStep + 1) / steps.length));

      steps.forEach((step, stepIndex) => {
        const isActive = stepIndex === currentStep;
        step.hidden = !isActive;
        step.classList.toggle("is-active", isActive);
        step.setAttribute("aria-hidden", String(!isActive));
      });

      if (progressLabel) {
        progressLabel.textContent = `Korak ${currentStep + 1} od ${steps.length}`;
      }

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === currentStep);
        dot.classList.toggle("is-complete", dotIndex < currentStep);
      });

      if (previousButton) previousButton.hidden = currentStep === 0;
      if (nextButton) nextButton.hidden = currentStep === steps.length - 1;
      if (submitButton) submitButton.hidden = currentStep !== steps.length - 1;
      setStatus();
    };

    const activeFields = () =>
      Array.from(steps[currentStep].querySelectorAll("input, textarea, select")).filter(
        (field) => !field.disabled && field.type !== "hidden",
      );

    const validateCurrentStep = () => {
      const invalidField = activeFields().find((field) => !field.checkValidity());
      if (!invalidField) return true;

      setStatus("Popuni obavezna polja prije nastavka.", "error");
      invalidField.reportValidity();
      return false;
    };

    nextButton?.addEventListener("click", () => {
      if (!validateCurrentStep()) return;
      showStep(currentStep + 1);
    });

    previousButton?.addEventListener("click", () => {
      showStep(currentStep - 1);
    });

    form.querySelectorAll("[data-form-skip]").forEach((button) => {
      button.addEventListener("click", () => showStep(currentStep + 1));
    });

    againButton?.addEventListener("click", () => {
      setContactSubmitted(form, false);
      form.reset();
      resetDatePlaceholders(form);
      showStep(0);
    });

    form.addEventListener("reset", () => {
      window.setTimeout(() => {
        setContactSubmitted(form, false);
        showStep(0);
      }, 0);
    });

    form.showContactStep = showStep;
    form.findContactStepForField = (field) => steps.findIndex((step) => step.contains(field));
    showStep(0);
  };

  document.querySelectorAll("[data-contact-form]").forEach(setupContactStepper);

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.matches("[data-contact-form]")) {
        form.reset();
        resetDatePlaceholders(form);
        return;
      }

      const status = form.querySelector("[data-form-status]");
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton?.textContent || "";
      const honey = form.elements._honey?.value?.trim();

      const setStatus = (message, type = "neutral") => {
        if (!status) return;
        status.textContent = message;
        status.classList.toggle("is-error", type === "error");
        status.classList.toggle("is-success", type === "success");
      };

      if (!form.checkValidity()) {
        setStatus("Unesite ime, email i opis projekta pa pošaljite upit.", "error");
        const invalidField = Array.from(form.elements).find((field) => field.willValidate && !field.checkValidity());
        const invalidStep = form.findContactStepForField?.(invalidField);
        if (typeof invalidStep === "number" && invalidStep >= 0) {
          form.showContactStep?.(invalidStep);
        }
        form.reportValidity();
        return;
      }

      if (honey) {
        setStatus(contactSuccessMessage, "success");
        setContactSubmitted(form, true);
        return;
      }

      const meetingDate = form.elements.meeting_date?.value || "";
      const meetingTime = form.elements.meeting_time?.value || "";
      const values = {
        name: form.elements.name?.value.trim() || "",
        email: form.elements.email?.value.trim() || "",
        project: form.elements.project?.value.trim() || "",
        deadline: form.elements.deadline?.value || "",
        meeting: meetingDate ? `${meetingDate}${meetingTime ? ` u ${meetingTime}` : ""}` : "Nije odabran",
        newsletter: form.elements.newsletter?.checked ? "Da" : "Ne",
      };

      const payload = new FormData();
      payload.append("Ime", values.name);
      payload.append("Email", values.email);
      payload.append("Opis projekta", values.project);
      payload.append("Rok završetka projekta", values.deadline || "Nije naveden");
      payload.append("Termin sastanka", values.meeting);
      payload.append("Newsletter", values.newsletter);
      payload.append("Stranica", window.location.href);
      payload.append("_replyto", values.email);
      payload.append("_subject", "Novi upit preko Fundamento stranice");
      payload.append("_template", "table");
      payload.append("_captcha", "false");
      payload.append("_honey", "");

      const actionUrl = form.getAttribute("action") || "https://formsubmit.co/info@fundamen.to";
      const ajaxUrl = actionUrl.replace("https://formsubmit.co/", "https://formsubmit.co/ajax/");

      const sendForm = async () => {
        let didSubmit = false;
        setStatus("Šaljemo upit...", "neutral");
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Šaljem...";
        }

        try {
          const response = await fetch(ajaxUrl, {
            method: "POST",
            body: payload,
            headers: { Accept: "application/json" },
          });

          if (!response.ok) {
            throw new Error(`Form submit failed with status ${response.status}`);
          }

          didSubmit = true;
          setStatus(contactSuccessMessage, "success");
          setContactSubmitted(form, true);
        } catch {
          const subject = "Novi upit preko Fundamento stranice";
          const body = buildContactBody(values);
          window.location.href = `mailto:info@fundamen.to?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            body,
          )}`;
          setStatus(contactErrorMessage, "error");
        } finally {
          if (submitButton && !didSubmit) {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
          }
        }
      };

      sendForm();
    });
  });
}

function setupMeetingCalendar() {
  const meetingField = document.querySelector("#meetingCalendar");
  if (!meetingField) return;

  const dateInput = meetingField.querySelector("[data-meeting-date]");
  const timeSelect = meetingField.querySelector("[data-meeting-time]");
  if (!dateInput || !timeSelect) return;

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const minMeetingDate = new Date(todayStart);
  minMeetingDate.setDate(minMeetingDate.getDate() + 1);

  const addMonthsClamped = (date, monthCount) => {
    const targetMonth = new Date(date.getFullYear(), date.getMonth() + monthCount, 1);
    const daysInTargetMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 0).getDate();
    return new Date(
      targetMonth.getFullYear(),
      targetMonth.getMonth(),
      Math.min(date.getDate(), daysInTargetMonth),
    );
  };

  const maxMeetingDate = addMonthsClamped(todayStart, 1);

  const toIsoDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const renderTimeOptions = () => {
    timeSelect.querySelectorAll("option:not(:first-child)").forEach((option) => option.remove());

    for (let hour = 9; hour <= 17; hour += 1) {
      ["00", "30"].forEach((minutes) => {
        if (hour === 17 && minutes === "30") return;
        const value = `${String(hour).padStart(2, "0")}:${minutes}`;
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        timeSelect.append(option);
      });
    }
  };

  dateInput.min = toIsoDate(minMeetingDate);
  dateInput.max = toIsoDate(maxMeetingDate);

  dateInput.addEventListener("change", () => {
    if (!dateInput.value) return;
    if (dateInput.value < dateInput.min || dateInput.value > dateInput.max) {
      dateInput.value = "";
    }
  });

  meetingField.closest("form")?.addEventListener("reset", () => {
    window.setTimeout(() => {
      dateInput.min = toIsoDate(minMeetingDate);
      dateInput.max = toIsoDate(maxMeetingDate);
    }, 0);
  });

  renderTimeOptions();
}

function setupDatePickers() {
  document.querySelectorAll('input[type="date"][data-date-picker]').forEach((input) => {
    const syncPlaceholder = () => {
      input.classList.toggle("has-value", Boolean(input.value));
    };

    const openPicker = () => {
      input.focus({ preventScroll: true });
      if (typeof input.showPicker !== "function") return;

      try {
        input.showPicker();
      } catch {
        // Browser did not allow showPicker outside a trusted interaction.
      }
    };

    syncPlaceholder();

    input.addEventListener("pointerdown", (event) => {
      if (event.button && event.button !== 0) return;
      openPicker();
    });
    input.addEventListener("change", syncPlaceholder);
    input.addEventListener("input", syncPlaceholder);
    input.form?.addEventListener("reset", () => window.setTimeout(syncPlaceholder, 0));
  });
}

function splitScrubText() {
  const scrubCopy = document.querySelector("#scrubCopy");
  if (!scrubCopy) return [];

  const words = scrubCopy.textContent.trim().split(/\s+/);
  scrubCopy.innerHTML = words.map((word) => `<span class="scrub-word">${word}</span>`).join(" ");
  return [...scrubCopy.querySelectorAll(".scrub-word")];
}

function setupGsap() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: "power3.out",
    overwrite: "auto",
  });
  ScrollTrigger.config({ ignoreMobileResize: true });

  gsap.set(".hero-actions", {
    clearProps: "opacity,transform,translate,rotate,scale",
  });

  gsap.from(".hero-copy > :not(.hero-actions)", {
    y: 34,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
  });

  gsap.from(".hero-media-wrap", {
    y: 70,
    scale: 0.9,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    onComplete: () => {
      gsap.set(".hero-media-wrap", { clearProps: "transform,opacity" });
    },
  });

  gsap.utils.toArray(".bento-card").forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, clipPath: "inset(14% round 26px)" },
      {
        opacity: 1,
        clipPath: "inset(0% round 26px)",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 86%",
        },
      },
    );
  });

  const scrubWords = splitScrubText();
  if (scrubWords.length) {
    gsap.to(scrubWords, {
      opacity: 1,
      stagger: 0.08,
      ease: "none",
      scrollTrigger: {
        trigger: "#scrubCopy",
        start: "top 78%",
        end: "bottom 38%",
        scrub: 0.75,
      },
    });
  }

  ScrollTrigger.matchMedia({
    "(min-width: 821px)": function () {
      gsap.utils.toArray(".media-card img, .media-card video").forEach((media) => {
        gsap.fromTo(
          media,
          { scale: 0.9, opacity: 0.62 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.65,
            },
          },
        );
      });
    },
  });

  ScrollTrigger.matchMedia({
    "(max-width: 820px)": function () {
      gsap.set(".media-card img, .media-card video", {
        clearProps: "transform,opacity",
      });

      ScrollTrigger.refresh();
    },
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());
  window.setTimeout(() => ScrollTrigger.refresh(), 450);
}

setupInitialHeroPosition();
setupProjectReturnMemory();
renderWheel();
renderBento();
setupHeroVideo();
setupHeroHoverReadiness();
setupClientLogoMarquee();
setupInkButtons();
setupPrivacyOverlay();
setupMobileNav();
setupSmoothAnchors();
setupWheelControls();
setupWheelGestures();
setupTiltCards();
setupAccordion();
setupMediaCards();
setupMiniGalleries();
setupChromeState();
setupMeetingCalendar();
setupDatePickers();
setupForms();
setupGsap();
