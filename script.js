
//barra de navegación que se oculta, cortesía del siguiente tutorial:
// https://webdesign.tutsplus.com/how-to-hidereveal-a-sticky-bottom-nav-bar-on-scroll-with-javascript--cms-107947t 
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollUp)) {
    // down 
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollUp)
  ) {
    // up
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  }
  lastScroll = currentScroll;
});


function noAd(bool){
    var ad = document.getElementById("ad");
    if (bool){
        ad.style.display = "none";
    }
    else {
        ad.style.display = "block";
    }
}