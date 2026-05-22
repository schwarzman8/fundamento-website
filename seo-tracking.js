(function () {
  function sendEvent(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, params);
  }

  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const label = link.dataset.analyticsLabel || link.textContent.trim() || href;

      if (link.dataset.analyticsEvent) {
        sendEvent(link.dataset.analyticsEvent, {
          event_category: "engagement",
          event_label: label,
          link_url: link.href,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        sendEvent("email_click", {
          event_category: "lead",
          event_label: label,
          link_url: href,
        });
      } else if (href.startsWith("tel:")) {
        sendEvent("phone_click", {
          event_category: "lead",
          event_label: label,
          link_url: href,
        });
      } else if (/project\.html\?project=/.test(href)) {
        sendEvent("case_study_click", {
          event_category: "portfolio",
          event_label: label,
          link_url: link.href,
        });
      } else if (link.hostname && link.hostname !== window.location.hostname) {
        sendEvent("outbound_click", {
          event_category: "outbound",
          event_label: label,
          link_url: link.href,
        });
      }
    },
    true,
  );

  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      sendEvent("form_submit", {
        event_category: "lead",
        event_label: form.getAttribute("aria-label") || "contact_form",
        page_location: window.location.href,
      });
    },
    true,
  );
})();
