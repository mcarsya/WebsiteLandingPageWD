<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const sectionRef = ref(null);
const titleRef = ref(null);
const statsRef = ref([]);

onMounted(() => {
  gsap.fromTo(titleRef.value, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' } }
  );
  
  gsap.fromTo(statsRef.value,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.value, start: 'top 60%' } }
  );
});
</script>

<template>
  <section id="about" ref="sectionRef" class="py-24 bg-white relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
          
          <div ref="titleRef" class="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 z-10">
            <div class="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#1C92E2] to-[#78CFA1] rounded-2xl mb-8 shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Menebar Kebaikan Sejak <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1C92E2] to-[#78CFA1]">2021</span>
            </h2>
            
            <p class="text-gray-600 leading-relaxed mb-6 text-lg">
              Worthydays adalah lembaga filantropi Islam modern yang dipercaya oleh ribuan donatur untuk mengelola dan menyalurkan Zakat, Infaq, Sedekah, dan Wakaf (ZISWAF).
            </p>
            <p class="text-gray-600 leading-relaxed text-lg">
              Kami hadir sebagai jembatan kebaikan, menyatukan niat suci Anda dengan mereka yang paling membutuhkan melalui program-program inovatif dan transparan.
            </p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div ref="statsRef" class="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-[#1C92E2]/30 transition-all duration-500 overflow-hidden cursor-pointer">
            <div class="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
            <h3 class="text-5xl font-extrabold text-[#1C92E2] mb-2 group-hover:scale-110 origin-left transition-transform duration-500">5K+</h3>
            <p class="font-semibold text-gray-900 mb-2">Donatur Aktif</p>
            <p class="text-gray-500 text-sm">Bergabung dalam misi kebaikan setiap bulan.</p>
          </div>
          
          <div ref="statsRef" class="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-[#78CFA1]/30 transition-all duration-500 overflow-hidden cursor-pointer sm:mt-12">
            <div class="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
            <h3 class="text-5xl font-extrabold text-[#78CFA1] mb-2 group-hover:scale-110 origin-left transition-transform duration-500">10K+</h3>
            <p class="font-semibold text-gray-900 mb-2">Penerima Manfaat</p>
            <p class="text-gray-500 text-sm">Tersebar di berbagai pelosok nusantara.</p>
          </div>
          
          <div ref="statsRef" class="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-[#FFDB08]/40 transition-all duration-500 overflow-hidden cursor-pointer">
            <div class="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
            <h3 class="text-5xl font-extrabold text-[#FFDB08] mb-2 group-hover:scale-110 origin-left transition-transform duration-500">24</h3>
            <p class="font-semibold text-gray-900 mb-2">Program Aktif</p>
            <p class="text-gray-500 text-sm">Fokus pada pendidikan, ekonomi & sosial.</p>
          </div>
          
          <div ref="statsRef" class="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-500 overflow-hidden cursor-pointer sm:mt-12">
            <div class="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
            <h3 class="text-5xl font-extrabold text-purple-500 mb-2 group-hover:scale-110 origin-left transition-transform duration-500">100%</h3>
            <p class="font-semibold text-gray-900 mb-2">Transparan</p>
            <p class="text-gray-500 text-sm">Laporan rutin terpublikasi untuk publik.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

