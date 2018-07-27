function captureEvent(cb) {
  cb && cb();
  return false;
}
function anchorScroll() {
  var height = document.querySelector('header').offsetHeight;

  window.scrollTo(0, height, 500);
};
