const API_URL = "https://cutt.ly/api/api.php";
const fetch = require("node-fetch");
const linkedom = require("linkedom");

const API_KEY = process.env.SHORT_URL_API_KEY;

async function shortenUrl(url) {
  // TODO: change to userDomain=1 when branded domain is verified
  let short = await fetch(
    `${API_URL}/?key=${API_KEY}&short=${url}&userDomain=0`
  );
  short = await short.json();
  return short.url.shortLink;
}

module.exports = async function (html) {
  const { document } = linkedom.parseHTML(html);
  const links = Array.from(document.querySelectorAll('a[target="_blank"]'));

  for (let link of links) {
    try {
      link.setAttribute("data-external", "true");
      const href = link.getAttribute("href");
      console.log(`shortening found link: ${href}`);
      const shortUrl = await shortenUrl(href);
      console.log(`shortened url to ${shortUrl}`);
      link.setAttribute("href", shortUrl);
      // Replace link text only if the text is same as href
      if (link.textContent === href) {
        link.textContent = shortUrl;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return document.toString();
};
