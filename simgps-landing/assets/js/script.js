// MOBILE MENU

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {

if(navbar.style.display === "flex"){
navbar.style.display = "none";
}else{
navbar.style.display = "flex";
}

});


// HERO BANNER CAROUSEL

const slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(nextSlide,4000);


// FOOTER CAROUSEL

const track = document.getElementById("carousel-track");

let position = 0;

function slide(){

position -= 170;

if(Math.abs(position) >= track.scrollWidth - window.innerWidth){
position = 0;
}

track.style.transform = `translateX(${position}px)`;

}

setInterval(slide,2000);

const heroTrack = document.getElementById("hero-track");
let slideIndex = 0;

function autoSlideHero(){
  const slides = document.querySelectorAll(".slide");
  slideIndex++;
  if(slideIndex >= slides.length){
    slideIndex = 0;
  }
  heroTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
}
