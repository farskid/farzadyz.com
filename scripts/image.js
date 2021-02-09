const { parseHTML } = require("linkedom");

/**
 * Adds loading=lazy to images
 */
module.exports = function lazyImage(html) {
  const { document } = parseHTML(html);
  const images = document.querySelectorAll("img");

  if (images.length) {
    for (let img of images) {
      img.setAttribute("loading", "lazy");
    }
  }

  return document.toString();
};
