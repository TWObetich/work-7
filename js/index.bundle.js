!function(){window.onload=function(){document.addEventListener("click",(function(e){const t=e.target;window.innerWidth>0&&(t.classList.contains("country__arrow")&&t.closest(".country__list-location").classList.toggle("_hover"),!t.closest(".country__list-location")&&document.querySelectorAll(".country__list-location._hover").length>0&&document.querySelectorAll(".country__list-location._hover").forEach((e=>e.classList.remove("_hover"))),t.classList.contains("country__data")&&t.closest(".country__list-data").classList.toggle("_hover"),!t.closest(".country__list-data")&&document.querySelectorAll(".country__list-data._hover").length>0&&document.querySelectorAll(".country__list-data._hover").forEach((e=>e.classList.remove("_hover"))))}))},document.querySelectorAll('a[href*="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))}));const e=document.querySelector(".header__burger"),t=document.querySelector(".header__menu");e&&t&&(e.addEventListener("click",(function(o){document.body.classList.toggle("lock"),e.classList.toggle("activet"),t.classList.toggle("activet")})),t.addEventListener("click",(o=>{o.target.classList.contains("header__burger")&&(document.body.classList.remove("lock"),e.classList.remove("activet"),t.classList.remove("activet"))})),t.querySelectorAll(".header__link").forEach((o=>{o.addEventListener("click",(()=>{document.body.classList.remove("lock"),e.classList.remove("activet"),t.classList.remove("activet")}))}))),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),new Swiper(".populars-swiper",{loop:!1,speed:500,slidesPerView:1.92,spaceBetween:15,freeMode:!0,grabCursor:!0,breakpoints:{769:{slidesPerView:3},426:{slidesPerView:1.9},100:{slidesPerView:1}}})}();