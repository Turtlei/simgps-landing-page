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

// AUTO CLOSE NAV saat klik link (mobile burger)
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        menuToggle.classList.remove("active");
    });
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
    instansiSelect.style.display = tipe === "instansi" ? "block" : "none";
}

// TESTIMONI SLIDER
const testiWrapper = document.getElementById("testiWrapper");
const testiDotsContainer = document.getElementById("testiDots");
const testiItems = Array.from(testiWrapper.querySelectorAll(".testi"));
let testiIndex = 0;
let testiTimer;
const totalDots = 2;

testiWrapper.style.width = `${totalDots * 100}%`;
testiItems.forEach(t => {
    t.style.minWidth = `${100 / (totalDots * testiItems.length / totalDots)}%`;
});

function goToTesti(n) {
    testiIndex = (n + totalDots) % totalDots;
    const offset = testiIndex === 0 ? 0 : 50;
    testiWrapper.style.transform = `translateX(-${offset}%)`;
    testiDotsContainer.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === testiIndex);
    });
}

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
function submitForm() {
    let valid = true;

    const nama    = document.getElementById("inputNama");
    const email   = document.getElementById("inputEmail");
    const phone   = document.getElementById("inputPhone");
    const subjek  = document.getElementById("inputSubjek");
    const tipe    = document.getElementById("tipeSelect");
    const instansi= document.getElementById("instansiSelect");
    const pesan   = document.getElementById("inputPesan");

    document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");

    if (nama.value.trim() === "") {
        document.getElementById("errNama").textContent = "Nama tidak boleh kosong.";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById("errEmail").textContent = "Format email tidak valid.";
        valid = false;
    }

    const phoneRegex = /^[0-9]{9,13}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("errPhone").textContent = "Nomor telepon tidak valid (9-13 digit angka).";
        valid = false;
    }

    if (!subjek.value) {
        document.getElementById("errSubjek").textContent = "Pilih subjek terlebih dahulu.";
        valid = false;
    }

    if (!tipe.value) {
        document.getElementById("errTipe").textContent = "Pilih instansi atau perorangan.";
        valid = false;
    }

    if (tipe.value === "instansi" && !instansi.value) {
        document.getElementById("errInstansi").textContent = "Pilih instansi Anda.";
        valid = false;
    }

    if (pesan.value.trim() === "") {
        document.getElementById("errPesan").textContent = "Pesan tidak boleh kosong.";
        valid = false;
    }

    if (valid) {
        alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
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
const popup       = document.getElementById("popup");
const popupImg    = document.getElementById("popup-img");

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

// SERVICE MODAL
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal.show").forEach(m => closeModal(m));
    }
});