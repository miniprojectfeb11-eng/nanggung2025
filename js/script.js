// ================= PASSWORD =================
function checkPassword() {
    const password = document.getElementById("password")?.value;
    const errorText = document.getElementById("error");

    const correctPassword = "nanggung091125";

    if (password === correctPassword) {
        window.location.href = "home.html";
    } else if (errorText) {
        errorText.innerText = "Password-nya salah 😝";
    }
}

// ================= LOVE ANIMATION =================
const heartsContainer = document.querySelector('.hearts');

if (heartsContainer) {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (4 + Math.random() * 4) + 's';

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 9000);
    }

    setInterval(createHeart, 20);
}

// ================= CLICK SLIDER =================
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

if (slides && images.length > 0) {

    // Buat dots
    images.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer?.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dots span');

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex]?.classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });
}

// ================= HOME MOMENTS =================
const moments = [
    {
        date: "10 Februari 2025",
        title: "Magang",
        image: "assets/OmAgungWFriends.jpeg",
        preview: "siapa sangka magang cinlok sama om om?",
        link: "moment/Magang.html"
    },
    {
        date: "4 Juni 2025",
        title: "Gantungan 3D Printer HILANG",
        image: "assets/Gantungan/selfie.jpeg ",
        preview: "Gantungan 3D printer yang hilang misterius",
        link: "moment/Gantungan.html"
    },
    {
        date: "12 Juni 2025",
        title: "Mr. DIY",
        image: "assets/MrDIY/cis.jpeg",
        preview: "Mau ketemu pake alasan beli kunciran di Mr. DIY",
        link: "moment/MrDIY.html"
    },
    {
        date: "15 Juni 2025",
        title: "Makan malam bareng pertama kali",
        image: "assets/seafoodProyek/iceBuah.jpeg",
        preview: "makan di seafood tempat biasa dia balik dari proyek",
        link: "moment/seafoodProyek.html"
    },
    {
        date: "15 Juli 2025",
        title: "Cari Hadiah di Lippo Mall Kramatjati",
        image: "assets/birthdayGiftLippo/hasil.jpeg",
        preview: "mencari hadiah dinda ulang tahun lalu photobox",
        link: "moment/birthdayGiftLippo.html"
    },
    {
        date: "9 Agustus 2025",
        title: "Samper agung lalu ke rumah nabilah",
        image: "assets/anterBerkas/12.jpeg",
        preview: "Agung anter berkas ke kampus dan aku susulin hehehe",
        link: "moment/berkas.html"
    },
    {
        date: "19 Agustus 2025",
        title: "Birthday gift from my boyfie",
        image: "assets/birthdayGiftDimsum/agung1.jpeg",
        preview: "Hadiah ulang tahun dari agung, Dimsum Mentai",
        link: "moment/birthdayGiftDimsum.html"
    },
    {
        date: "19 Agustus 2025",
        title: "Nanda ke Purwakarta",
        image: "assets/goesToPWK/2.jpeg",
        preview: "Hati nurani agung seluas samudra",
        link: "moment/goesToPWK.html"
    },
    {
        date: "4 September 2025",
        title: "Sudut Timur Condet + Cupang",
        image: "assets/STCupang/10.jpeg",
        preview: "ngobrol setelah lama ga ketemu di sudut timur lalu keliling condet cari ikan cupang",
        link: "moment/STCupang.html"
    },
    {
        date: "21 Agustus 2025",
        title: "Agung main bola di papa sexy",
        image: "assets/papaSexy/ramean.jpeg",
        preview: "surprise nontonin agung main bola",
        link: "moment/papaSexy.html"
    },
    {
        date: "13 September 2025",
        title: "Anter Nanda ke wisuda Ka Dipeng",
        image: "assets/anter/ui.jpeg",
        preview: "wisuda di UI dan kita berdua makan dulu",
        link: "moment/wisuda.html"
    },
    {
        date: "14 September 2025",
        title: "Volunteer socogiving di Jakarta Pusat",
        image: "assets/sehariVolunteer/mangan.jpeg",
        preview: "setelah volunteer seharian kita quality time makan bareng",
        link: "moment/sehariVolunteer.html"
    },
    {
        date: "5 Oktober 2025",
        title: "Berenang di Anugerah WaterPark Purwakarta",
        image: "assets/berenang/cis.jpeg",
        preview: "funfact agung sekarang udah bisa berenang lohh, bangga!",
        link: "moment/berenang.html"
    },
    {
        date: "11 Oktober 2025",
        title: "Main di bekasi",
        image: "assets/bekasi/waw.jpeg",
        preview: "Keliling bekasi main di hangoutPlace dan mall living world Bekasi",
        link: "moment/Bekasi.html"
    },
    {
        date: "17 Oktober 2025",
        title: "Study in Cafe",
        image: "assets/SIC/3.jpeg",
        preview: "belajar cafe beneran bisa?",
        link: "moment/SIC.html"
    },
    {
        date: "20 Oktober 2025",
        title: "Twinnie Gantungan",
        image: "assets/TGantungan/4.jpeg",
        preview: "Gantungan penyemangat kita berdua",
        link: "moment/TGantungan.html"
    },
    {
        date: "25 Oktober 2025",
        title: "Photobooth di aeon Tanjung Barat",
        image: "assets/PBaeon/5.jpeg",
        preview: "ingat gais kalo milih background cari yang silver kalo merah muka agung jadi kusem",
        link: "moment/PBaeon.html"
    },
    {
        date: "3 November 2025",
        title: "Parang Gombong Becek",
        image: "assets/PGBecek/11.jpeg",
        preview: "BM ke parang gombong yang katanya bagus tapi pas kesana malah becek, untung dapet sunset sedikit",
        link: "moment/PGBecek.html"
    },
    {
        date: "9 November 2025",
        title: "Taman Batu lalu makan sate kolong",
        image: "assets/tamanBatu/2.jpeg",
        preview: "ga nyangka agung makan nya banyak banget laper atau doyan pak?",
        link: "moment/tamanBatu.html"
    },
    {
        date: "5 Desember 2025",
        title: "Nongki di Kafe RS",
        image: "assets/nongkiKafeRS/makan.jpeg",
        preview: "Ga nyangka cafe di dalem RS tempatnya enak banget, lanjut pulang kerumah bareng shafa naik motor",
        link: "moment/nongkiKafeRS.html"
    },
    {
        date: "20 Desember 2025",
        title: "Amound dan jajanan pasar",
        image: "assets/amoundJajan/cis6.jpeg",
        preview: "seneng bm terpenuhi bareng my luv",
        link: "moment/amoundJajan.html"
    },
    {
        date: "TIAP HARI di 2025",
        title: "mam together after work",
        image: "assets/mamAfterWork/nasgor.jpeg",
        preview: "makan bareng tiap hari setelah kerja",
        link: "moment/mamAfterWork.html"
    },
    {
        date: "TIAP HARI di 2025",
        title: "kumpulan PAP absen setiap hari",
        image: "assets/PAPabsen/1.jpeg",
        preview: "Terlihat sepele tapi konsisten",
        link: "moment/PAPabsen.html"
    },
    {
        date: "TIAP HARI di 2025",
        title: "kumpulan mirrorselfie setiap hari",
        image: "assets/PAPmirrorselfie/1.jpeg",
        preview: "Terlihat sepele tapi konsisten",
        link: "moment/PAPmirrorselfie.html"
    },
    {
        date: "Agenda minimal seminggu sekali",
        title: "Cikampek - Bekasi",
        image: "assets/PPbekcik/6.jpeg",
        preview: "Effort yang gaperna ngeluh capek buat ketemu",
        link: "moment/PPbekcik.html"
    },
    {
        date: "Agenda malam minggu setelah jemput nanda",
        title: "Tongkrongan Malming di Condet",
        image: "assets/CondetPark/6.jpeg",
        preview: "Tongkrongan yang paling better di condet",
        link: "moment/CondetPark.html"
    },
    {
        date: "",
        title: "",
        image: "",
        preview: "",
        link: "moment/.html"
    },
];

const grid = document.getElementById("momentGrid");

if (grid) {
    grid.innerHTML = "";
    moments.forEach(m => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => location.href = m.link;

        card.innerHTML = `
            <img src="${m.image}">
            <div class="card-content">
                <p style="font-size: 11px; color: #606060; margin: 0; font-weight: 100; opacity: 0.8;">${m.date}</p>
                <h3>${m.title}</h3>
                <p>${m.preview}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ================= FOOTER =================
function createFooter() {
    if (document.querySelector('.footer-bottom')) return;

    const footer = document.createElement('footer');
    footer.className = 'footer-bottom';
    footer.innerHTML = `<p>© 2025 — Dibuat dengan 🤍 untuk Cipit</p>`;
    
    document.body.appendChild(footer);

    setTimeout(() => {
        footer.classList.add('visible');
    }, 300);
}

window.addEventListener('DOMContentLoaded', createFooter);