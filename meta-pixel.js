(function (window, document) {
  if (window.FUNDAMENTO_META_PIXEL_EVENTS_INITIALIZED) return;
  window.FUNDAMENTO_META_PIXEL_EVENTS_INITIALIZED = true;

  document.documentElement.dataset.metaPixel = "1393426975724807";

  const trackContact = (contactMethod) => {
    if (typeof window.fbq !== "function") return;

    window.fbq("track", "Contact", {
      contact_method: contactMethod,
      content_name: contactMethod === "email" ? "Email click" : "Contact form",
    });
  };

  window.FundamentoMetaPixel = Object.freeze({ trackContact });

  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.toLowerCase().startsWith("mailto:")) {
        trackContact("email");
      }
    },
    true,
  );
})(window, document);
