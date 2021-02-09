import * as sapper from "@sapper/app";
import splitbee from "@splitbee/web";

splitbee.init({
  token: "6A49KS32G9TE",
  disableCookie: true,
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

sapper.start({
  target: document.querySelector("[data-root]"),
});
