// detect operating system
// function getShortcutKey() {
//   const platform = navigator.platform.toLowerCase();

//   if (platform.includes("mac")) {
//     return "COMMAND Z";
//   } else {
//     return "CTRL Z";
//   }
// }

function getShortcutKey() {
  const ua = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod|mac/.test(ua)) {
    return "COMMAND Z";
  } else {
    return "CTRL Z";
  }
}

function isAppleDevice() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}

function updateHeroTitle(isApple) {

  if (!isApple) {
    // CTRRRLLL Z version
    const letters = [
      { class: "c", text: "C" },

      { class: "o", text: "T" },
      { class: "o1", text: "T" },
      { class: "o2", text: "T" },
      { class: "o3", text: "T" },
      { class: "o4", text: "T" },
      { class: "o5", text: "T" },
      { class: "o6", text: "R" },
      { class: "o7", text: "R" },

      { class: "m1", text: "R" },

      // clear the rest
      { class: "m2", text: "L" },
      { class: "m3", text: "L" },
      { class: "m4", text: "L" },
      { class: "m5", text: "" },
      { class: "m6", text: "" },

      { class: "a", text: "" },
      { class: "n", text: "" },
      { class: "d", text: "" },
      { class: "z", text: "Z" }
    ];

    letters.forEach(item => {
      const el = document.querySelector("." + item.class);
      if (el) el.textContent = item.text;
    });
  }
}


function replaceCommandZText(shortcut) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while (node = walker.nextNode()) {
    if (node.nodeValue.match(/Command Z/i)) {
      node.nodeValue = node.nodeValue.replace(/Command Z/gi, shortcut);
    }
  }
}



function updateShortcutText() {
  const isApple = isAppleDevice();
  const shortcut = isApple ? "Command Z" : "Ctrl Z";

  const commandText = document.querySelector(".command-text");
  if (commandText) {
    commandText.textContent = shortcut.toUpperCase();
  }

  document.title = shortcut.toUpperCase();

  replaceCommandZText(shortcut);

  updateHeroTitle(isApple);
}



//   // update sticky command bar
//   const commandText = document.querySelector(".command-text");
//   if (commandText) {
//     commandText.textContent = shortcut;
//   }

//   // update browser tab title
//   document.title = shortcut;

//   // replace all visible "Command Z" in page text
// //   document.body.innerHTML = document.body.innerHTML.replace(/Command Z/gi, shortcut);

//   // update vertical title
//   updateHeroTitle(shortcut);
// }

// prevent browser from restoring previous scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", function () {

  window.scrollTo(0, 0);

  // update text based on OS
  updateShortcutText();

  const commandText = document.querySelector(".command-text");

  if (!commandText) return;

  let lastScroll = 0;
  let shaking = false;

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    // block upward scrolling
    if (currentScroll < lastScroll) {
      window.scrollTo(0, lastScroll);

      if (!shaking) {
        shaking = true;
        commandText.classList.add("shake");

        setTimeout(() => {
          commandText.classList.remove("shake");
          shaking = false;
        }, 300);
      }
    }

    lastScroll = window.scrollY;

  });


    // =========================
// IMAGE OVERLAY GALLERY
// =========================

const images = [
  { src: "content/L-1.jpg", caption: "1. First exploration on laptop" },
  { src: "content/L-2.jpg", caption: "2. Second exploration on laptop" },
  { src: "content/L-3.jpg", caption: "3. Third exloration on laptop" },
  { src: "content/Lap-booklet1.jpg", caption: "4. Documented time during laptop exploration" },
  { src: "content/Lap-booklet2.jpg", caption: "4. Documented time during laptop exploration" },
  { src: "content/Lap-booklet3.jpg", caption: "4. Notes on number of mistakes and my attention during laptop exploration" },
  { src: "content/Lap-booklet4.jpg", caption: "4. Notes on mental state and decisions made during laptop exploration" },
  { src: "content/Lap-booklet5.jpg", caption: "4. Observations during laptop exploration" },
  { src: "content/Type-1.jpg", caption: "5. Scan of first exploration on typewriter" },
  { src: "content/Type-2.jpg", caption: "6. Scan of second exploration on typewriter" },
  { src: "content/Type-booklet1.jpg", caption: "7. Documented time during typewriter exploration" },
  { src: "content/Type-booklet2.jpg", caption: "7. Notes on number of mistakes and my attention during typewriter exploration" },
  { src: "content/Type-booklet3.jpg", caption: "7. Notes on mental state and decisions made during typewriter exploration" },
  { src: "content/Type-booklet4.jpg", caption: "7. Observations during laptop exploration" },
  { src: "content/Type-3.jpg", caption: "8. Scan of third exploration on typewriter" },
  { src: "content/Type-4.jpg", caption: "9. Scan of fourth exploration on typewriter" },
  { src: "content/Let-booklet1.jpg", caption: "10. Documented time during letterpress exploration" },
  { src: "content/Let-booklet2.jpg", caption: "10. Documented time during letterpress exploration" },
  { src: "content/Let-booklet3.jpg", caption: "10. Notes on number of mistakes and my attention during letterpress exploration" },
  { src: "content/Let-booklet4.jpg", caption: "10. Notes on mental state and decisions made during letterpress exploration" },
  { src: "content/Let-booklet5.jpg", caption: "10. Observations during letterpress exploration" },
  { src: "content/Let-1.jpg", caption: "10. Scan of misprint 1 on letterpress" },
  { src: "content/Let-2.jpg", caption: "10. Scan of misprint 4 on letterpress" },
  { src: "content/Let-3.jpg", caption: "10. Scan of misprint 5 on letterpress" },
  { src: "content/Let-4.jpg", caption: "10. Scan of final print on letterpress" },
  { src: "content/Let-5.jpg", caption: "10. Scan of misprint 1 on letterpress" },
  { src: "content/Let-6.jpg", caption: "10. Scan of misprint 3 on letterpress" },
  { src: "content/Let-7.jpg", caption: "10. Scan of final print on letterpress" },
  { src: "content/Let-8.jpg", caption: "10. Scan of misprint 1 on letterpress" },
  { src: "content/Let-10.jpg", caption: "10. Scan of misprint 3 on letterpress" },
  { src: "content/Let-9.jpg", caption: "10. Scan of misprint 4 on letterpress" },
  { src: "content/Let-11.jpg", caption: "10. Scan of final print on letterpress" },



];

let currentIndex = 0;
let overlayOpen = false;

const overlay = document.getElementById("imageOverlay");
const img = document.getElementById("imageDisplay");
const caption = document.getElementById("imageCaption");

const btn = document.getElementById("imageToggleBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
  const data = images[index];
  img.src = data.src;
  caption.textContent = data.caption;
}

function openOverlay() {
  overlay.classList.add("active");
  overlayOpen = true;
  btn.textContent = "TEXT";   // 👈 switch label
  showImage(currentIndex);
}

function closeOverlay() {
  overlay.classList.remove("active");
  overlayOpen = false;
  btn.textContent = "IMAGES"; // 👈 switch back
}

function toggleOverlay() {
  overlayOpen ? closeOverlay() : openOverlay();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// BUTTON TOGGLE
btn.addEventListener("click", toggleOverlay);

// NAV BUTTONS
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  nextImage();
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  prevImage();
});

// ESC closes
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});


  
});