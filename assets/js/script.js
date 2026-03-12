// Your javascript goes here

// prevent browser from restoring previous scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// always start at top
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

let lastScroll = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  // block upward scrolling
  if (currentScroll < lastScroll) {
    window.scrollTo(0, lastScroll);
  }

  lastScroll = window.scrollY;
});