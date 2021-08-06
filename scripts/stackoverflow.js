const linkedom = require("linkedom");
const fetch = require("node-fetch");
const fs = require("fs");
const metadata = require("../content/data/metadata.json");

async function getStackoverflowReputation() {
  try {
    let html = await fetch(
      "https://stackoverflow.com/users/2784512/farzad-yousefzadeh?tab=profile"
    );
    html = await html.text();

    const { document } = linkedom.parseHTML(html);

    const reputationElement = document.querySelector(".profile-avatar")
      .children[1].children[0].children[0].textContent;

    return reputationElement.innerText;
  } catch (err) {
    console.error("Error in stackoverflow script", err);
  }
}

module.exports = async function t() {
  metadata.stackoverflowReputation = await getStackoverflowReputation();
  await fs.promises.writeFile(
    "content/data/metadata.json",
    JSON.stringify(metadata)
  );
};
