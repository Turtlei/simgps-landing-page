// MENU
// const toggle = 
// document.querySelector(".menu-toggle");
// const nav =
// document.querySelector(".nav");

// toggle.onclick = () => {
//     nav.classList.toggle("show")
// };

// document.querySelectorAll(".nav a").forEach(link => {
//     link.onclick = () => {
//         nav.classList.remove("show");
//     };
// });

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    toggle.classList.toggle("active");
});

document.querySelectorAll('.nav a').forEach(link=> {
    link.addEventListener('click', ()=>{
        nav.classList.remove('show');
        toggle.classList.remove('active');
    });
});

// CAROUSEL
const slides = 
document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}, 3000);

// FADE UP
document.addEventListener("DOMContentLoaded", function(){

const faders = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries, observer)=>{
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('show');
observer.unobserve(entry.target);
}
});
},{
threshold: 0.1,
rootMargin: "0px 0px -50px 0px"
});

faders.forEach(el => observer.observe(el));

});