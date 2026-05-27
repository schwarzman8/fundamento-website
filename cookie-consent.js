(function () {
  const CONSENT_KEY = "fundamento.cookieConsent.v1";
  const CONSENT_COOKIE = "fundamento_cookie_consent";
  const CONSENT_VERSION = 1;
  const ANALYTICS_SCRIPTS = ["analytics-config.js", "analytics.js", "seo-tracking.js"];

  const text = {
    title: "Postavke kolačića",
    intro:
      "Koristimo nužne kolačiće za rad stranice. Analitičke kolačiće koristimo samo ako nam to dopustite, kako bismo razumjeli posjećenost i poboljšali sadržaj.",
    necessaryTitle: "Nužni kolačići",
    necessaryText: "Uvijek aktivni. Potrebni su za osnovni rad stranice i spremanje vašeg izbora.",
    analyticsTitle: "Analitički kolačići",
    analyticsText:
      "Google Analytics koristimo za anonimnu statistiku posjeta. Analitika se ne učitava prije vaše privole.",
  };

  function readCookie(name) {
    return document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${name}=`))
      ?.slice(name.length + 1);
  }

  function writeCookie(name, value) {
    const maxAge = 60 * 60 * 24 * 180;
    document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; path=/; SameSite=Lax`;
  }

  function readConsent() {
    try {
      const stored =
        typeof window.localStorage !== "undefined" ? window.localStorage.getItem(CONSENT_KEY) : readCookie(CONSENT_COOKIE);
      const parsed = JSON.parse(stored ? decodeURIComponent(stored) : "null");
      if (!parsed || parsed.version !== CONSENT_VERSION || typeof parsed.analytics !== "boolean") return null;
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function writeConsent(consent) {
    const saved = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: Boolean(consent.analytics),
      updatedAt: new Date().toISOString(),
    };

    try {
      const serialized = JSON.stringify(saved);
      if (typeof window.localStorage !== "undefined") {
        window.localStorage.setItem(CONSENT_KEY, serialized);
      }
      writeCookie(CONSENT_COOKIE, serialized);
    } catch (_) {
      writeCookie(CONSENT_COOKIE, JSON.stringify(saved));
      return saved;
    }

    window.dispatchEvent(new CustomEvent("fundamento:consentchange", { detail: saved }));
    return saved;
  }

  function clearAnalyticsCookies() {
    const hostParts = window.location.hostname.split(".");
    const domains = ["", window.location.hostname];
    if (hostParts.length > 1) domains.push(`.${hostParts.slice(-2).join(".")}`);

    document.cookie
      .split(";")
      .map((cookie) => cookie.split("=")[0].trim())
      .filter((name) => /^_ga(_|$)|^_gid$|^_gat/.test(name))
      .forEach((name) => {
        domains.forEach((domain) => {
          const domainPart = domain ? `; domain=${domain}` : "";
          document.cookie = `${name}=; Max-Age=0; path=/${domainPart}; SameSite=Lax`;
        });
      });
  }

  function setAnalyticsDisabled(disabled) {
    const measurementId = window.FUNDAMENTO_GA_ID;
    if (/^G-[A-Z0-9]+$/i.test(measurementId || "")) {
      window[`ga-disable-${measurementId}`] = Boolean(disabled);
    }
  }

  function hasAnalyticsConsent() {
    return readConsent()?.analytics === true;
  }

  function scriptRoot() {
    const currentScript = document.currentScript;
    if (!currentScript?.src) return `${window.location.origin}/`;
    return new URL(".", currentScript.src).href;
  }

  function loadScript(src, id) {
    return new Promise((resolve, reject) => {
      const existing = id ? document.getElementById(id) : null;
      if (existing) {
        resolve(existing);
        return;
      }

      const script = document.createElement("script");
      if (id) script.id = id;
      script.async = false;
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function enableAnalytics() {
    if (!hasAnalyticsConsent()) return;
    if (window.FUNDAMENTO_ANALYTICS_BOOTSTRAP_STARTED) return;
    window.FUNDAMENTO_ANALYTICS_BOOTSTRAP_STARTED = true;
    setAnalyticsDisabled(false);

    const root = scriptRoot();
    for (const file of ANALYTICS_SCRIPTS) {
      await loadScript(new URL(file, root).href, `fundamento-${file.replace(/[^a-z0-9]/gi, "-")}`);
    }
  }

  function closePanel() {
    document.querySelector("[data-cookie-consent]")?.remove();
    document.body.dataset.cookieConsentOpen = "false";
    renderSettingsButton();
  }

  function saveAndClose(analytics) {
    writeConsent({ analytics });
    if (!analytics) {
      setAnalyticsDisabled(true);
      clearAnalyticsCookies();
    }
    closePanel();
    enableAnalytics().catch(() => {});
  }

  function renderPanel({ settingsOpen = false } = {}) {
    if (document.querySelector("[data-cookie-consent]")) return;

    const consent = readConsent();
    const analyticsChecked = consent?.analytics === true;
    const panel = document.createElement("section");
    panel.className = "cookie-consent";
    panel.dataset.cookieConsent = "true";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "cookieConsentTitle");
    panel.innerHTML = `
      <div class="cookie-consent__panel">
        <div class="cookie-consent__copy">
          <p class="cookie-consent__eyebrow">Privatnost</p>
          <h2 id="cookieConsentTitle">${text.title}</h2>
          <p>${text.intro} <a href="/#privacy">Politika privatnosti i kolačića</a>.</p>
        </div>

        <div class="cookie-consent__settings" ${settingsOpen ? "" : "hidden"}>
          <label class="cookie-consent__option is-disabled">
            <span>
              <strong>${text.necessaryTitle}</strong>
              <small>${text.necessaryText}</small>
            </span>
            <input type="checkbox" checked disabled />
          </label>

          <label class="cookie-consent__option">
            <span>
              <strong>${text.analyticsTitle}</strong>
              <small>${text.analyticsText}</small>
            </span>
            <input type="checkbox" data-cookie-analytics ${analyticsChecked ? "checked" : ""} />
          </label>
        </div>

        <div class="cookie-consent__actions">
          <button class="cookie-consent__button is-secondary" type="button" data-cookie-reject>Odbij sve</button>
          <button class="cookie-consent__button is-secondary" type="button" data-cookie-settings>
            ${settingsOpen ? "Sakrij postavke" : "Postavke"}
          </button>
          <button class="cookie-consent__button is-primary" type="button" data-cookie-accept>Prihvati sve</button>
          <button class="cookie-consent__button is-primary" type="button" data-cookie-save ${settingsOpen ? "" : "hidden"}>
            Spremi odabir
          </button>
        </div>
      </div>
    `;

    document.body.append(panel);
    document.body.dataset.cookieConsentOpen = "true";

    const settings = panel.querySelector(".cookie-consent__settings");
    const settingsButton = panel.querySelector("[data-cookie-settings]");
    const saveButton = panel.querySelector("[data-cookie-save]");

    settingsButton.addEventListener("click", () => {
      const isHidden = settings.hidden;
      settings.hidden = !isHidden;
      saveButton.hidden = !isHidden;
      settingsButton.textContent = isHidden ? "Sakrij postavke" : "Postavke";
    });

    panel.querySelector("[data-cookie-reject]").addEventListener("click", () => saveAndClose(false));
    panel.querySelector("[data-cookie-accept]").addEventListener("click", () => saveAndClose(true));
    saveButton.addEventListener("click", () => {
      saveAndClose(Boolean(panel.querySelector("[data-cookie-analytics]")?.checked));
    });

    panel.querySelector("[data-cookie-reject]")?.focus({ preventScroll: true });
  }

  function renderSettingsButton() {
    if (!readConsent()) return;
    if (document.querySelector("[data-cookie-settings-open]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cookie-settings-button";
    button.dataset.cookieSettingsOpen = "true";
    button.textContent = "Kolačići";
    button.addEventListener("click", () => {
      document.querySelector("[data-cookie-consent]")?.remove();
      renderPanel({ settingsOpen: true });
    });
    document.body.append(button);
  }

  window.FundamentoConsent = {
    key: CONSENT_KEY,
    get: readConsent,
    hasAnalyticsConsent,
    open: () => renderPanel({ settingsOpen: true }),
    acceptAll: () => saveAndClose(true),
    rejectAll: () => saveAndClose(false),
    enableAnalytics,
  };

  function init() {
    if (readConsent()) {
      if (!hasAnalyticsConsent()) {
        setAnalyticsDisabled(true);
        clearAnalyticsCookies();
      }
      renderSettingsButton();
      enableAnalytics().catch(() => {});
      return;
    }

    renderPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
