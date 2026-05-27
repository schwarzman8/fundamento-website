(function () {
  function hasAnalyticsConsent() {
    if (window.FundamentoConsent?.hasAnalyticsConsent) {
      return window.FundamentoConsent.hasAnalyticsConsent();
    }

    try {
      const cookieConsent = document.cookie
        .split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith("fundamento_cookie_consent="))
        ?.slice("fundamento_cookie_consent=".length);
      const stored =
        typeof window.localStorage !== "undefined"
          ? window.localStorage.getItem("fundamento.cookieConsent.v1")
          : cookieConsent;
      const consent = JSON.parse(stored ? decodeURIComponent(stored) : "null");
      return consent?.version === 1 && consent.analytics === true;
    } catch (_) {
      return false;
    }
  }

  if (!hasAnalyticsConsent()) return;
  if (window.FUNDAMENTO_ANALYTICS_LOADED) return;
  window.FUNDAMENTO_ANALYTICS_LOADED = true;

  const measurementId = window.FUNDAMENTO_GA_ID;

  if (!/^G-[A-Z0-9]+$/i.test(measurementId || "")) return;
  window[`ga-disable-${measurementId}`] = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
})();
