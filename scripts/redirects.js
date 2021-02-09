const fs = require("fs-extra");

(async function moveRedirectsToDir() {
  try {
    console.log("Copying _redirects to the publish directory");
    await fs.copyFile("_redirects", "__sapper__/export/_redirects");
  } catch (err) {
    console.error(err);
  }
})();
