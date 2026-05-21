function protectMediaElement(media) {
  if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement)) return;

  media.draggable = false;
  media.setAttribute("draggable", "false");
  media.setAttribute("oncontextmenu", "return false");

  if (media instanceof HTMLVideoElement) {
    media.controlsList?.add?.("nodownload", "noplaybackrate", "noremoteplayback");
    media.disablePictureInPicture = true;
    media.setAttribute("controlslist", "nodownload noplaybackrate noremoteplayback");
    media.setAttribute("disablepictureinpicture", "");
  }
}

function protectMediaTree(root = document) {
  root.querySelectorAll?.("img, video").forEach(protectMediaElement);
}

document.addEventListener(
  "contextmenu",
  (event) => {
    if (event.target?.closest?.("img, video, picture, .media-shell, .media-expand, .media-fullscreen")) {
      event.preventDefault();
    }
  },
  { capture: true },
);

document.addEventListener(
  "dragstart",
  (event) => {
    if (event.target?.closest?.("img, video")) {
      event.preventDefault();
    }
  },
  { capture: true },
);

protectMediaTree();

new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      protectMediaElement(node);
      protectMediaTree(node);
    });
  });
}).observe(document.documentElement, { childList: true, subtree: true });
