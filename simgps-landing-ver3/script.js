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

window.addEventListener("scroll", () => {
    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

// GALLERY POPUP
const popup =
document.getElementById("popup");
const popupImg =
document.getElementById("popup-img");

document.querySelectorAll(".gallery img").forEach(img=>{
    img.onclick = ()=>{
        popup.style.display="flex";
        popup.classList.add("show");
        popupImg.src = img.src;
    };
});

popup.onclick = ()=>
    popup.style.display="none";
    popup.classList.remove("show")

// BTT BUTTON
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () =>
    window.scrollTo({top:0,behavior:"smooth"});