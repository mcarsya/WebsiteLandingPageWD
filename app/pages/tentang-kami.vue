<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// =========================================================================
// [IMAGE PLACEHOLDERS - TENTANG KAMI]
// Ganti link placeholder di bawah dengan path folder lokal atau URL online
// =========================================================================
const ABOUT_GALLERY = {
  IMG_1: 'https://placehold.co/600x400/1C92E2/ffffff?text=Dokumentasi+Aksi+1',
  IMG_2: 'https://placehold.co/600x400/78CFA1/ffffff?text=Dokumentasi+Aksi+2',
  IMG_3: 'https://placehold.co/600x400/FFDB08/333333?text=Dokumentasi+Aksi+3',
  IMG_4: 'https://placehold.co/600x400/111827/ffffff?text=Dokumentasi+Aksi+4',
};

let ctx: gsap.Context;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  window.scrollTo(0, 0);

  ctx = gsap.context(() => {
    // Reveal animations for elements with .reveal-up class
    gsap.utils.toArray('.reveal-up').forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    gsap.utils.toArray('.stagger-up').forEach((container: any) => {
      const items = container.querySelectorAll('.stagger-item');
      gsap.from(items, {
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    });
  });
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
  }
});
</script>

<template>
  <div class="bg-[#FAFAFC] pb-24">
    <!-- Main Container -->
    <section class="bg-[#FAFAFC] pt-32 pb-12">
      <div class="container mx-auto px-4 md:px-6">
        
        <!-- Section 1: Overview & 2x2 Photo Grid -->
        <div class="bg-white border border-slate-100 shadow-sm rounded-[2rem] p-8 md:p-14 mb-24 reveal-up">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Column -->
            <div>
              <span class="inline-block bg-[#78CFA1]/15 text-[#1b7e4d] font-bold text-sm px-4 py-2 rounded-full mb-6 border border-[#78CFA1]/20">
                <span class="mr-2">📖</span> Tentang Worthydays
              </span>
              <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Gerakan Kebaikan dan Solidaritas yang Terus Bertumbuh
              </h2>
              <div class="w-16 h-1.5 bg-[#78CFA1] rounded-full mb-6"></div>
              <p class="text-lg text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Berawal dari inisiatif kerelawanan anak muda pada tahun 2021, komunitas ini hadir sebagai jembatan kebaikan untuk menyalurkan kepedulian secara nyata, transparan, dan berdampak bagi sesama.
              </p>
            </div>
            
            <!-- Right Column (2x2 Grid) -->
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] relative group">
                <img :src="ABOUT_GALLERY.IMG_1" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" alt="Dokumentasi 1">
              </div>
              <div class="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] relative group mt-8">
                <img :src="ABOUT_GALLERY.IMG_2" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" alt="Dokumentasi 2">
              </div>
              <div class="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] relative group -mt-8">
                <img :src="ABOUT_GALLERY.IMG_3" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" alt="Dokumentasi 3">
              </div>
              <div class="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] relative group">
                <img :src="ABOUT_GALLERY.IMG_4" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" alt="Dokumentasi 4">
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Informasi & Capaian Komunitas -->
        <div class="mb-24">
          <div class="mb-10 reveal-up">
            <span class="text-[#78CFA1] font-bold tracking-wider uppercase text-sm mb-2 block">— TENTANG KAMI</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Informasi & Rekam Jejak Komunitas</h2>
            <p class="text-slate-600 text-lg max-w-2xl">Mengenal perjalanan, semangat kerelawanan, dan langkah kecil yang kami hadirkan untuk lingkungan sekitar.</p>
          </div>

          <!-- Top Row (3 Metric Stat Cards) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 stagger-up">
            <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-4xl font-extrabold text-[#0e4835] mb-2">2021</h3>
              <p class="text-slate-500 font-medium">Tahun Berdiri</p>
            </div>
            <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-4xl font-extrabold text-[#0e4835] mb-2">1.500+</h3>
              <p class="text-slate-500 font-medium">Paket & Manfaat Tersalurkan</p>
            </div>
            <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-4xl font-extrabold text-[#0e4835] mb-2">100%</h3>
              <p class="text-slate-500 font-medium">Penyaluran Terbuka & Transparan</p>
            </div>
          </div>

          <!-- Bottom Row (2 Quote / Value Cards) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-up">
            <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div class="w-10 h-10 rounded-full border border-green-100 bg-green-50 flex items-center justify-center text-[#78CFA1] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <p class="text-slate-700 text-lg leading-relaxed font-medium">"Sekecil apa pun langkah kepedulian yang kita bagikan, akan selalu bermakna besar bagi mereka yang sedang berjuang."</p>
            </div>
            <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div class="w-10 h-10 rounded-full border border-green-100 bg-green-50 flex items-center justify-center text-[#78CFA1] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <p class="text-slate-700 text-lg leading-relaxed font-medium">"Ruang bertumbuh bagi siapa saja yang ingin menyisihkan waktu, tenaga, dan rezeki untuk menciptakan dampak baik."</p>
            </div>
          </div>
        </div>

        <!-- Section 3: Arah Organisasi — Visi & Misi -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal-up">
          <!-- Left Card: VISI -->
          <div class="lg:col-span-5 bg-[#78CFA1]/10 border border-[#78CFA1]/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <!-- Decorative circle -->
            <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-[#78CFA1]/20 rounded-full blur-3xl"></div>
            
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-[#78CFA1] mb-8 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-[#1b7e4d] font-bold tracking-widest text-sm mb-4 uppercase">Visi</h3>
              <p class="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                Menjadi komunitas kerelawanan anak muda yang amanah, inklusif, dan konsisten dalam merawat kepedulian sosial bagi masyarakat.
              </p>
            </div>
          </div>
          
          <!-- Right Column: MISI -->
          <div class="lg:col-span-7 lg:pl-4 py-4 md:py-8">
            <span class="text-[#78CFA1] font-bold tracking-wider uppercase text-sm mb-2 block">— ARAH ORGANISASI</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Misi Kami</h2>
            
            <div class="flex flex-col gap-4 stagger-up">
              <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-5 hover:border-[#78CFA1]/30 transition-colors">
                <div class="bg-[#78CFA1] text-white rounded-full w-10 h-10 shrink-0 flex items-center justify-center font-bold text-lg shadow-md shadow-[#78CFA1]/30">1</div>
                <p class="text-slate-700 font-medium leading-relaxed">Menyediakan wadah donasi dan keanggotaan yang mudah diakses dan transparan.</p>
              </div>
              <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-5 hover:border-[#78CFA1]/30 transition-colors">
                <div class="bg-[#78CFA1] text-white rounded-full w-10 h-10 shrink-0 flex items-center justify-center font-bold text-lg shadow-md shadow-[#78CFA1]/30">2</div>
                <p class="text-slate-700 font-medium leading-relaxed">Menyalurkan bantuan pangan, perlengkapan belajar, dan sembako tepat sasaran langsung ke penerima manfaat.</p>
              </div>
              <div class="stagger-item bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-5 hover:border-[#78CFA1]/30 transition-colors">
                <div class="bg-[#78CFA1] text-white rounded-full w-10 h-10 shrink-0 flex items-center justify-center font-bold text-lg shadow-md shadow-[#78CFA1]/30">3</div>
                <p class="text-slate-700 font-medium leading-relaxed">Membangun kesadaran generasi muda untuk aktif terlibat dalam kegiatan sosial kemanusiaan.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>
