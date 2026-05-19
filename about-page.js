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
