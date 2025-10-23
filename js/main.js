import Swiper from "swiper/bundle";
import "../../swiper/swiper-bundle.min.css";
import  "../font-awesome-4.7.0/css/font-awesome.min.css";
import  "../css/output.css"

import About from "./about-me/About-me";
import Footer from "./footer/footer";
import Form from "./form/form";
import headerDesktop from "./header/headerDesktop";
import headerMobile from "./header/headerMobile";
import Myskills from "./mySkills/Myskills";
import Part1 from "./part1Des-Mo/Part1";
import Part2 from "./part2/Part2";
import Part3 from "./part3/part3";
import PurpleCard from "./purple-card/Purple";
import Slider from "./slider/slider";
import Three from "./threeCard/three";


let darkMode=document.querySelector(".darkMode")
let html=document.querySelector("html")
let body=document.querySelector("body")
let headerMo=document.querySelector(".header-mo")
let backSky=document.querySelector(".back-sky")

darkMode.addEventListener("click",()=>{
  darkMode.firstElementChild.classList.toggle("hidden")
  darkMode.lastElementChild.classList.toggle("hidden")
  html.classList.toggle("dark")
  body.classList.toggle("dark")
  headerMo.classList.toggle("header-mode-mo")
  backSky.classList.toggle("dark")

})

let bottomToTop=document.querySelector("#bottomToTop")
let darkModetop=document.querySelector(".darkMode")
window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
bottomToTop.classList.add("opacity-100")
darkModetop.classList.add("opacity-100")
  }else{
    bottomToTop.classList.remove("opacity-100")
    darkModetop.classList.remove("opacity-100")
  }
})



    let slider=document.querySelector(".animation-slider")
window.addEventListener("scroll",()=>{
  if(window.scrollY>3550){
slider.classList.add("animation-slider-add")
  }else{
    slider.classList.remove("animation-slider-add")
  }
})
const All=async () => {
await headerDesktop()
await headerMobile()
await Part1()
await Part2()
await Part3()
await Myskills()
await About()
await PurpleCard()
await Three()
await Slider()
await Form()
await Footer()
SwiperCode()
}
let ham=document.querySelector(".hamburger")
let page=document.querySelector(".ham-page")
ham.addEventListener("click",()=>{
    page.classList.toggle("left-mo-page")
ham.firstElementChild.classList.toggle("zarbdar-tb")
let cen=document.querySelector(".ABL-LINE")
cen.classList.toggle("remove-1")
ham.lastElementChild.classList.toggle("zarbdar-bt")
})
    

function SwiperCode(){
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
         autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
      var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    });
}
All()
