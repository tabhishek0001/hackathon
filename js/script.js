const openSideBarBtn = document.getElementById('openSideBarBtn');
const closeSideBarBtn = document.getElementById('closeSideBarBtn');
const sideBarSec = document.getElementById('sideBarSec');
const extra = document.getElementById('extra');

openSideBarBtn.addEventListener("click", () => {
    sideBarSec.classList.toggle("sideBarVisible");
    extra.classList.toggle('sideBarOverlay');
});

closeSideBarBtn.addEventListener("click", () => {
    sideBarSec.classList.toggle("sideBarVisible");
    extra.classList.toggle("sideBarOverlay");
});

extra.addEventListener("click", () => {
    sideBarSec.classList.toggle("sideBarVisible");
    extra.classList.toggle("sideBarOverlay");
});


document.body.id='body';
var element = document.getElementById("header");



  window.addEventListener("scroll", function() {

    if (window.scrollY > 10) {
      element.classList.add("shadow-sm", "bg-white");
    } else {
      element.classList.remove("shadow-sm" , "bg-white");
    }
  });

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").classList.remove("invisible");
  } else {
    document.getElementById("header").classList.add("invisible");
  }

  prevScrollPos = currentScrollPos;
};


