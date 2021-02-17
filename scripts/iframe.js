const { parseHTML } = require("linkedom");

module.exports = function handler(html) {
  const { document } = parseHTML(html);
  const iframes = document.querySelectorAll("iframe");

  if (iframes.length) {
    for (let frame of iframes) {
      /**
       * Adds loading=lazy to iframe
       */
      frame.setAttribute("loading", "lazy");

      // Wrap in aspect ratio container
      const container = document.createElement("div");
      container.classList.add("iframe-container");
      frame.parentNode.insertBefore(container, frame);
      container.append(frame);
    }
  }

  return document.toString();
};
