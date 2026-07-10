// FAQ

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{

item.querySelector(".faq-question").addEventListener("click",()=>{

item.classList.toggle("active");

});

});

// Mobile Menu

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});