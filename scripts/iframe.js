const { parseHTML } = require("linkedom");

/**
 * Adds loading=lazy to iframe
 */
module.exports = function lazyIframe(html) {
  const { document } = parseHTML(html);
  const iframes = document.querySelectorAll("iframe");

  if (iframes.length) {
    for (let frame of iframes) {
      frame.setAttribute("loading", "lazy");
    }
  }

  return document.toString();
};
