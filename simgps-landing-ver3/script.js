// NAVBAR SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    const topBtn = document.getElementById("topBtn");
    if (topBtn) topBtn.style.display = window.scrollY > 300 ? "block" : "none";
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
    heroTimer = setInterval(() => goToHeroSlide(heroIndex + 1), 3500); // sedikit lebih cepat
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

// =============================================
// [REVISI 1] CLIENT CAROUSEL — Mobile only
// =============================================
const clientWrapper = document.getElementById("clientCarouselWrapper");
const clientDotsContainer = document.getElementById("clientDots");

if (clientWrapper && clientDotsContainer) {
    const clientImgs = Array.from(clientWrapper.querySelectorAll("img"));
    const totalClients = clientImgs.length;
    let clientIndex = 0;
    let clientTimer;

    // Build dots
    for (let i = 0; i < totalClients; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            clearInterval(clientTimer);
            goToClient(i);
            startClientAuto();
        });
        clientDotsContainer.appendChild(dot);
    }

    function goToClient(n) {
        clientIndex = (n + totalClients) % totalClients;
        clientWrapper.style.transform = `translateX(-${clientIndex * 100}%)`;
        clientDotsContainer.querySelectorAll(".dot").forEach((d, i) => {
            d.classList.toggle("active", i === clientIndex);
        });
    }

    function startClientAuto() {
        clientTimer = setInterval(() => goToClient(clientIndex + 1), 2000); // cepat
    }

    document.getElementById("clientNext").addEventListener("click", () => {
        clearInterval(clientTimer);
        goToClient(clientIndex + 1);
        startClientAuto();
    });

    document.getElementById("clientPrev").addEventListener("click", () => {
        clearInterval(clientTimer);
        goToClient(clientIndex - 1);
        startClientAuto();
    });

    goToClient(0);
    startClientAuto();
}

// =============================================
// [REVISI 2] TESTIMONI SLIDER + MODAL
// =============================================

// Data testimoni untuk modal
const testiData = [
    {
        logo: "assets/logo-siloam.png",
        name: "RS Siloam",
        text: "Pelayanan sangat profesional dan cepat. Tim SIMGPS selalu siap membantu kapan pun kami membutuhkan dukungan teknis. Kami sangat terkesan dengan kecepatan respons dan kualitas solusi yang diberikan. SIMGPS benar-benar menjadi mitra terpercaya kami dalam pengelolaan perangkat medis."
    },
    {
        logo: "assets/logo-medistra.png",
        name: "Medistra Hospital",
        text: "Sistem sangat membantu operasional kami. Semua data alat medis kini tersentralisasi dan mudah diakses oleh seluruh tim. Proses yang sebelumnya memakan waktu berjam-jam kini bisa diselesaikan dalam hitungan menit. Kami sangat merekomendasikan SIMGPS untuk fasilitas kesehatan lainnya."
    },
    {
        logo: "assets/logo-hermina.jpeg",
        name: "RS Hermina",
        text: "Sistem SIMGPS sangat membantu dalam memonitoring alat medis secara real-time. Kami dapat mendeteksi anomali lebih cepat dan mengambil tindakan sebelum alat rusak. Fitur notifikasi otomatis sangat berguna bagi tim teknisi kami. Secara keseluruhan, SIMGPS meningkatkan efisiensi pemeliharaan kami secara signifikan."
    },
    {
        logo: "assets/logo-rs-pelni.png",
        name: "RS Pelni",
        text: "Tim support sangat responsif dan profesional dalam menangani kebutuhan kami. Setiap keluhan ditindaklanjuti dengan cepat dan solusi yang tepat sasaran. Kami juga mengapresiasi kemudahan penggunaan platform SIMGPS yang intuitif, sehingga staf kami tidak memerlukan pelatihan panjang untuk menggunakannya."
    },
    {
        logo: "assets/logo-carolus.jpeg",
        name: "RS Carolus",
        text: "Integrasi sistem berjalan lancar dan meningkatkan efisiensi operasional. Proses kalibrasi dan IPM kini terjadwal otomatis sehingga tidak ada alat yang terlewat. Laporan yang dihasilkan sangat komprehensif dan mempermudah proses akreditasi rumah sakit kami. Investasi terbaik untuk pengelolaan aset medis."
    },
    {
        logo: "assets/logo-rsud-tamansari.jpg",
        name: "RSUD Tamansari",
        text: "Pelayanan kalibrasi dan maintenance sangat memuaskan dan tepat waktu. Laporan hasil kalibrasi langsung tersimpan di sistem dan bisa diakses kapan saja. Kami sangat terbantu dalam persiapan akreditasi karena semua dokumen sudah tersimpan rapi di SIMGPS. Terima kasih atas pelayanan yang luar biasa."
    }
];

function openTestiModal(index) {
    const data = testiData[index];
    document.getElementById("testiModalLogo").src = data.logo;
    document.getElementById("testiModalName").textContent = "— " + data.name;
    document.getElementById("testiModalText").textContent = data.text;
    const modal = document.getElementById("testiModal");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeTestiModal() {
    document.getElementById("testiModal").classList.remove("show");
    document.body.style.overflow = "";
}

// Testimoni slider
const testiWrapper = document.getElementById("testiWrapper");
const testiDotsContainer = document.getElementById("testiDots");

if (testiWrapper && testiDotsContainer) {
    const testiItems = Array.from(testiWrapper.querySelectorAll(".testi"));
    let testiIndex = 0;
    let testiTimer;
    const totalDots = 2; // 2 slides (3 per slide)

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
        testiTimer = setInterval(() => goToTesti(testiIndex + 1), 3500);
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
}

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

if (popup) {
    galleryImgs.forEach(img => {
        img.addEventListener("click", () => {
            popupImg.src = img.src;
            popup.classList.add("show");
        });
    });
    popup.addEventListener("click", () => popup.classList.remove("show"));
}

// BACK TO TOP
const topBtn = document.getElementById("topBtn");
if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

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
        closeTestiModal();
    }
});

// =============================================
// FAQ PAGE — Accordion logic (faq.html)
// =============================================
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const isOpen = answer.classList.contains("open");

        // Close all
        document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
        document.querySelectorAll(".faq-question").forEach(b => b.classList.remove("active"));

        // Open clicked if it was closed
        if (!isOpen) {
            answer.classList.add("open");
            btn.classList.add("active");
        }
    });
});