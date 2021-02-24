const fs = require("fs-extra");

(async function moveRedirectsToDir() {
  console.log("Copying _redirects to the publish directory");
  await fs.copyFile("_redirects", "__sapper__/export/_redirects");
})();
