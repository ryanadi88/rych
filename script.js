const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.project-card');
hiddenElements.forEach((el) => observer.observe(el));

function copyEmail() {
    const email = "halo@emailanda.com";
    navigator.clipboard.writeText(email).then(() => {
        // Ambil elemen notifikasi
        const note = document.getElementById("copy-notification");
        
        // Tambahkan class 'show' agar muncul
        note.classList.add("show");
        
        // Hapus class 'show' setelah 3 detik
        setTimeout(() => { note.classList.remove("show"); }, 3000);
    });
}

function kirimWhatsApp() {
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    const nomorWhatsApp = "628994021222"; // Ganti dengan nomor Anda (tanpa + atau 0)

    if (nama === "" || pesan === "") {
        alert("Mohon isi nama dan pesan Anda!");
        return;
    }

    const url = `https://wa.me/${nomorWhatsApp}?text=Halo, saya ${nama}. ${pesan}`;
    window.open(url, '_blank');
}


const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Mengubah teks tombol berdasarkan tema
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Mode Terang';
    } else {
        themeToggle.textContent = '🌙 Mode Gelap';
    }
});

// Simpan pilihan tema di browser pengunjung
if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}

// Cek saat halaman dibuka
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}