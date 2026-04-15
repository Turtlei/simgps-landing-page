// const toggle = document.getElementById("menu-toggle");
// const nav = document.querySelector(".nav");

// toggle.addEventListener("click", () => {
//     nav.classList.toggle("show");
//     toggle.classList.toggle("active");
// });

// document.querySelectorAll('.nav a').forEach(link=> {
//     link.addEventListener('click', ()=>{
//         nav.classList.remove('show');
//         toggle.classList.remove('active');
//     });
// });

// // CAROUSEL
// const slides = 
// document.querySelectorAll(".slide");
// let i = 0;

// setInterval(() => {
//     slides[i].classList.remove("active");
//     i = (i + 1) % slides.length;
//     slides[i].classList.add("active");
// }, 3000);

// // FADE UP
// document.addEventListener("DOMContentLoaded", function(){

// const faders = document.querySelectorAll('.fade-up');

// const observer = new IntersectionObserver((entries, observer)=>{
// entries.forEach(entry => {
// if(entry.isIntersecting){
// entry.target.classList.add('show');
// observer.unobserve(entry.target);
// }
// });
// },{
// threshold: 0.1,
// rootMargin: "0px 0px -50px 0px"
// });

// faders.forEach(el => observer.observe(el));

// });

// window.addEventListener("scroll", () => {
//     const navbar =
//     document.querySelector(".navbar");

//     if(window.scrollY > 50){
//         navbar.classList.add("scrolled");
//     }else{
//         navbar.classList.remove("scrolled");
//     }
// });

// // GALLERY POPUP
// const popup =
// document.getElementById("popup");
// const popupImg =
// document.getElementById("popup-img");

// document.querySelectorAll(".gallery img").forEach(img=>{
//     img.onclick = ()=>{
//         popup.style.display="flex";
//         popup.classList.add("show");
//         popupImg.src = img.src;
//     };
// });

// popup.onclick = ()=> {
//     popup.style.display="none";
//     popup.classList.remove("show")
// };

// // BTT BUTTON
// const topBtn =
// document.getElementById("topBtn");

// window.addEventListener("scroll", ()=>{
//     if(window.scrollY > 200){
//         topBtn.style.display = "block";
//     }else{
//         topBtn.style.display = "none";
//     }
// });

// topBtn.onclick = () =>
//     window.scrollTo({top:0,behavior:"smooth"});

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    const topBtn = document.getElementById("topBtn");
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.classList.toggle("active");
});

// HERO SLIDER
const slides = document.querySelectorAll(".slide");
const heroDots = document.querySelectorAll("#heroDots .dot");
let heroIndex = 0;
let heroTimer;

function goToHeroSlide(n) {
    slides[heroIndex].classList.remove("active");
    heroDots[heroIndex].classList.remove("active");
    heroIndex = (n + slides.length) % slides.length;
    slides[heroIndex].classList.add("active");
    heroDots[heroIndex].classList.add("active");
}

function startHeroAuto() {
    heroTimer = setInterval(() => goToHeroSlide(heroIndex + 1), 4000);
}

document.getElementById("heroNext").addEventListener("click", () => {
    clearInterval(heroTimer);
    goToHeroSlide(heroIndex + 1);
    startHeroAuto();
});

document.getElementById("heroPrev").addEventListener("click", () => {
    clearInterval(heroTimer);
    goToHeroSlide(heroIndex - 1);
    startHeroAuto();
});

heroDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        clearInterval(heroTimer);
        goToHeroSlide(i);
        startHeroAuto();
    });
});

startHeroAuto();

// INSTANSI TOGGLE
function toggleInstansi() {
    const tipe = document.getElementById("tipeSelect").value;
    const instansiSelect = document.getElementById("instansiSelect");
    instansiSelect.style.display = tipe =="instansi" ? "block" : "none";
}

// TESTIMONI SLIDER - slide animation
const testiWrapper = document.getElementById("testiWrapper");
const testiDotsContainer = document.getElementById("testiDots");
const testiItems = Array.from(testiWrapper.querySelectorAll(".testi"));
let testiIndex = 0;
let testiTimer;
const totalDots = 2; // 2 dots: slide 1 = 4 testi, slide 2 = 2 testi

// set wrapper width based on number of slides
testiWrapper.style.width = `${totalDots * 100}%`;
testiItems.forEach(t => {
    t.style.minWidth = `${100 / (totalDots * testiItems.length / totalDots)}%`;
});

// group testi: slide 1 = index 0-3, slide 2 = index 4-5
// each "page" takes 50% of wrapper
function goToTesti(n) {
    testiIndex = (n + totalDots) % totalDots;
    const offset = testiIndex === 0 ? 0 : 50; // 50% per slide group
    testiWrapper.style.transform = `translateX(-${offset}%)`;

    testiDotsContainer.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === testiIndex);
    });
}

// generate dots
for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        clearInterval(testiTimer);
        goToTesti(i);
        startTestiAuto();
    });
    testiDotsContainer.appendChild(dot);
}

function startTestiAuto() {
    testiTimer = setInterval(() => goToTesti(testiIndex + 1), 4000);
}

goToTesti(0);
startTestiAuto();

document.getElementById("testiNext").addEventListener("click", () => {
    clearInterval(testiTimer);
    goToTesti(testiIndex + 1);
    startTestiAuto();
});

document.getElementById("testiPrev").addEventListener("click", () => {
    clearInterval(testiTimer);
    goToTesti(testiIndex - 1);
    startTestiAuto();
});

// FORM VALIDATION
function toggleInstansi() {
    const tipe = document.getElementById("tipeSelect").value;
    const instansiSelect = document.getElementById("instansiSelect");
    instansiSelect.style.display = tipe === "instansi" ? "block" : "none";
}

function submitForm() {
    let valid = true;

    const nama = document.getElementById("inputNama");
    const email = document.getElementById("inputEmail");
    const phone = document.getElementById("inputPhone");
    const subjek = document.getElementById("inputSubjek");
    const tipe = document.getElementById("tipeSelect");
    const instansi = document.getElementById("instansiSelect");
    const pesan = document.getElementById("inputPesan");

    // reset errors
    document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");

    // nama
    if (nama.value.trim() === "") {
        document.getElementById("errNama").textContent = "Nama tidak boleh kosong.";
        valid = false;
    }

    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById("errEmail").textContent = "Format email tidak valid.";
        valid = false;
    }

    // phone
    const phoneRegex = /^[0-9]{9,13}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("errPhone").textContent = "Nomor telepon tidak valid (9-13 digit angka).";
        valid = false;
    }

    // subjek
    if (subjek.value === "" || subjek.value === null) {
        document.getElementById("errSubjek").textContent = "Pilih subjek terlebih dahulu.";
        valid = false;
    }

    // tipe
    if (tipe.value === "" || tipe.value === null) {
        document.getElementById("errTipe").textContent = "Pilih instansi atau perorangan.";
        valid = false;
    }

    // instansi (only if tipe = instansi)
    if (tipe.value === "instansi" && instansi.value === "") {
        document.getElementById("errInstansi").textContent = "Pilih instansi Anda.";
        valid = false;
    }

    // pesan
    if (pesan.value.trim() === "") {
        document.getElementById("errPesan").textContent = "Pesan tidak boleh kosong.";
        valid = false;
    }

    if (valid) {
        alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
        // reset form
        document.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form select").forEach(el => el.value = "");
        document.getElementById("instansiSelect").style.display = "none";
    }
}

// FADE UP
const fadeEls = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// GALLERY POPUP
const galleryImgs = document.querySelectorAll(".gallery-grid img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popup.classList.add("show");
    });
});

popup.addEventListener("click", () => popup.classList.remove("show"));

// BACK TO TOP
document.getElementById("topBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});