// Menu Bar

const head = document.querySelector(".header");
const nav  = document.querySelector(".menu-bar");

nav.addEventListener("click",() =>{
    head.classList.toggle("active");
});



// portfolio section


// SCROLL TO TOP
const hero = document.querySelector(".section-hero");
const footerSec = document.querySelector(".footerData");

const topbtn = document.createElement("div");
topbtn.classList.add("topbutton");
topbtn.classList.add("topbuttonShow");

topbtn.innerHTML=`<ion-icon name="chevron-up-outline" class="scroll-top"></ion-icon>`;

footerSec.after(topbtn);

const scrollToTop = () =>{
    hero.scrollIntoView({behavior:"smooth"});
}

topbtn.addEventListener("click",scrollToTop);

