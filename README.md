# 🌟 Worthydays - Modern Charity Landing Page

![Nuxt 3](https://img.shields.io/badge/Nuxt_3-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)

**Worthydays** adalah sebuah prototipe *landing page* dan portal filantropi modern yang dirancang untuk lembaga amal/NGO. Dibangun dengan fokus utama pada pengalaman pengguna (UX) yang sangat interaktif, transisi halaman yang mulus tanpa kedip, dan elemen visual 3D yang elegan.

---

## ✨ Fitur Utama

- 🎨 **Visual & Animasi Premium (GSAP)**: Dilengkapi dengan animasi *reveal* saat di-*scroll*, *hover effects* yang dinamis (efek *shine*, *lift*, dan *shadow* pada kartu), serta pergerakan elemen yang sangat halus.
- 🧊 **3D Interactive Hero (TresJS)**: Memanfaatkan rendering objek 3D (Icosahedron & Torus) di latar belakang *Hero Section* yang melayang dan berotasi secara interaktif menggunakan algoritma matematika trigonometri bawaan (*requestAnimationFrame*).
- 🚀 **Layar Pemuatan Khusus (Custom Loading Screen)**: Animasi layar awal (*splash screen*) berbasis GSAP dan CSS *spinners* yang menyingkir dengan mulus (tanpa menggunakan gambar/aset eksternal) untuk menyambut pengunjung.
- 📱 **Sistem Navigasi Persisten**: *Navbar* tidak memuat ulang (*flicker*) saat perpindahan halaman. Bentuknya akan berevolusi dari latar transparan menjadi kapsul melayang (Pill-shape) ketika pengguna melakukan *scroll*.
- 🖼️ **Korsel Dokumentasi Geser (Drag-to-Scroll Carousel)**: Korsel majalah/berita yang bisa digeser/ditarik (*drag*) menggunakan kursor mouse secara langsung, dilengkapi fitur pengulangan otomatis (*auto-looping*) dan indikator titik (*pagination dots*).
- 🔍 **Penyaringan & Pencarian Cerdas**: 
  - *Halaman Program*: Penyaringan program secara dinamis berdasarkan kategori dengan animasi Vue `<TransitionGroup>`.
  - *Halaman Laporan*: Fitur pencarian laporan keuangan *real-time* dengan filter berdasarkan "Tahun" dan "Jenis Laporan".
- 💬 **Formulir Donasi Cepat (WhatsApp Modal)**: Sistem *modal* global yang bisa memunculkan formulir donasi ringkas dari mana saja untuk langsung diteruskan ke WhatsApp dengan teks yang sudah di-*pre-fill*.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue.js) - Diatur menggunakan arsitektur folder Nuxt 4 minimal (sumber dalam folder `app/`).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS untuk responsivitas dan desain kustom.
- **Animasi 3D**: [@tresjs/core](https://tresjs.org/) & [Three.js](https://threejs.org/) - Integrasi kanvas 3D deklaratif di dalam ekosistem Vue.
- **Animasi DOM**: [GSAP (GreenSock)](https://gsap.com/) & ScrollTrigger - Untuk urutan animasi *timeline* dan kontrol saat elemen masuk ke dalam layar viewport.

---

## 📂 Struktur Proyek

Proyek ini menggunakan struktur direktori `app/` (standar Nuxt masa depan):

```text
Landing Page WD/
├── app/
│   ├── assets/           # File CSS global (main.css) dan transisi halaman
│   ├── components/       # Komponen modular (HeroSection, DokumentasiSection, dll)
│   ├── composables/      # Logika state global Vue (useDonationModal)
│   ├── constants/        # File konfigurasi konstan (assets.ts) penyimpan link gambar
│   ├── layouts/          # Pembungkus Layout utama (default.vue)
│   ├── pages/            # Halaman rute otomatis (index, program, donasi, laporan, dll)
│   └── app.vue           # Akar Vue (menyisipkan LoadingScreen & NuxtLayout)
├── nuxt.config.ts        # Konfigurasi modul (Tailwind, transisi halaman)
└── package.json          # Dependensi
```

---

## 🚀 Cara Menjalankan Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18+ direkomendasikan).

1. **Buka Terminal di dalam direktori proyek ini**
2. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```
3. **Jalankan *Development Server***:
   ```bash
   npm run dev
   ```
4. **Buka di Browser**:
   Kunjungi URL [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

*Dikembangkan dengan penuh dedikasi sebagai Portofolio Web Developer - Worthydays NGO.*
