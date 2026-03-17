// menu mobile

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.onclick = () => {
    menu.classList.toggle("show");
};

// carousel

const slides = document.querySelectorAll(".slide");

let index = 0;

function slideShow() {
    slides[index].classList.remove("active");
    
    index++;

    if(index >= slides.length) {
        index = 0;
    }
    slides[index].classList.add("active");
}

setInterval(slideShow, 4000);