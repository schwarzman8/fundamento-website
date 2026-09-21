(function (window, document) {
  const pixelId = "1393426975724807";

  if (window.FUNDAMENTO_META_PIXEL_INITIALIZED) return;
  window.FUNDAMENTO_META_PIXEL_INITIALIZED = true;

  if (!window.fbq) {
    const fbq = function () {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, arguments);
      } else {
        fbq.queue.push(arguments);
      }
    };

    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    const firstScript = document.getElementsByTagName("script")[0];
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
  document.documentElement.dataset.metaPixel = pixelId;
})(window, document);
