import * as sapper from "@sapper/app";
import splitbee from "@splitbee/web";

splitbee.init({
  disableCookie: true,
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

sapper.start({
  target: document.querySelector("[data-root]"),
});
