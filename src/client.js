import * as sapper from "@sapper/app";
import splitbee from "@splitbee/web";

splitbee.init();

sapper.start({
  target: document.querySelector("[data-root]"),
});
