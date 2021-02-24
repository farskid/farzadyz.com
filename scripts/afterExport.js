const fs = require("fs-extra");
const { afterExport: rssAfterExport } = require("./rss");

(async () => {
  console.log("Runnign after export scripts");
  await rssAfterExport();
  console.log("clearning scripts/.tmp");
  await fs.remove("scripts/.tmp");
})();
