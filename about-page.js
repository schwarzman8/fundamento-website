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

setupMobileNav();

function setupAboutIndex() {
  const links = Array.from(document.querySelectorAll("[data-about-index-link]"));
  const sections = Array.from(document.querySelectorAll("[data-about-section]"));
  if (!links.length || !sections.length) return;

  const setActiveSection = (sectionId) => {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("href")?.slice(1);
      if (sectionId) setActiveSection(sectionId);
    });
  });

  let scrollFrame = 0;
  const updateActiveSection = () => {
    scrollFrame = 0;
    const marker = Math.min(window.innerHeight * 0.34, 300);
    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) activeSection = section;
    });

    const pageBottom = window.scrollY + window.innerHeight;
    const documentBottom = document.documentElement.scrollHeight - 2;
    if (pageBottom >= documentBottom) activeSection = sections.at(-1);
    setActiveSection(activeSection.id);
  };

  const requestIndexUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateActiveSection);
  };

  window.addEventListener("scroll", requestIndexUpdate, { passive: true });
  window.addEventListener("resize", requestIndexUpdate);
  updateActiveSection();
}

setupAboutIndex();
