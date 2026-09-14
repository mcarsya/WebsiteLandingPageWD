<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const sectionRef = ref(null);
const cardsRef = ref([]);
const activeTab = ref('personal');

const packages = {
  personal: [
    { name: 'Bronze', price: 'Rp 50.000', period: '/bulan', features: ['Laporan bulanan', 'Doa bersama', 'Majalah digital'], popular: false },
    { name: 'Silver', price: 'Rp 100.000', period: '/bulan', features: ['Laporan bulanan', 'Doa bersama', 'Majalah cetak', 'Merchandise eksklusif'], popular: true },
    { name: 'Gold', price: 'Rp 500.000', period: '/bulan', features: ['Laporan prioritas', 'Konsultasi ZIS khusus', 'Majalah cetak', 'Merchandise eksklusif', 'Undangan event VIP'], popular: false },
  ],
  corporate: [
    { name: 'SME Partner', price: 'Rp 1.000.000', period: '/bulan', features: ['Laporan CSR bulanan', 'Logo di website', 'Sertifikat donatur'], popular: false },
    { name: 'Enterprise', price: 'Custom', period: '', features: ['Program CSR khusus', 'Laporan dampak sosial', 'Press release bersama', 'Plakat penghargaan'], popular: true },
  ]
};

onMounted(() => {
  gsap.fromTo(cardsRef.value,
    { y: 50, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.value, start: 'top 70%' } }
  );
});
</script>

<template>
  <section id="membership" ref="sectionRef" class="py-24 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Paket Donasi Keanggotaan</h2>
        <p class="text-lg text-gray-600 mb-10">
          Bergabunglah menjadi donatur tetap dan nikmati berbagai manfaat eksklusif sambil memberikan dampak berkelanjutan.
        </p>
        
        <!-- Custom Tab Switcher -->
        <div class="inline-flex bg-gray-100 p-1.5 rounded-full relative">
          <div class="absolute inset-y-1.5 w-1/2 bg-white rounded-full shadow-sm transition-all duration-300 ease-out"
               :class="activeTab === 'personal' ? 'left-1.5' : 'left-[calc(50%-6px)]'"></div>
          <button @click="activeTab = 'personal'" 
                  class="relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-40"
                  :class="activeTab === 'personal' ? 'text-[#1C92E2]' : 'text-gray-500 hover:text-gray-900'">
            Personal
          </button>
          <button @click="activeTab = 'corporate'" 
                  class="relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-40"
                  :class="activeTab === 'corporate' ? 'text-[#1C92E2]' : 'text-gray-500 hover:text-gray-900'">
            Corporate
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-12">
        <div v-for="(pkg, index) in packages[activeTab]" :key="index" ref="cardsRef"
             class="group rounded-3xl p-8 border transition-all duration-500 relative flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-white"
             :class="pkg.popular ? 'border-[#1C92E2] shadow-xl shadow-blue-500/20 scale-105 z-10 hover:shadow-blue-500/40' : 'border-gray-200 hover:border-[#1C92E2]/50 hover:shadow-gray-200'">
          
          <!-- Shine Effect -->
          <div class="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>

          <div v-if="pkg.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1C92E2] to-[#78CFA1] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md z-20 group-hover:scale-110 transition-transform duration-300">
            Paling Diminati
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-2 relative z-20 group-hover:text-[#1C92E2] transition-colors duration-300">{{ pkg.name }}</h3>
          <div class="flex items-baseline gap-1 mb-8 relative z-20">
            <span class="text-4xl font-extrabold text-[#1C92E2] group-hover:scale-110 origin-left transition-transform duration-500">{{ pkg.price }}</span>
            <span class="text-gray-500 font-medium">{{ pkg.period }}</span>
          </div>
          
          <ul class="space-y-4 mb-10 flex-grow relative z-20">
            <li v-for="(feature, i) in pkg.features" :key="i" class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#78CFA1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 shrink-0 group-hover:scale-125 transition-transform duration-300"><polyline points="20 6 9 17 4 12"/></svg>
              <span class="text-gray-600 font-medium">{{ feature }}</span>
            </li>
          </ul>
          
          <button class="w-full py-4 rounded-xl font-bold transition-all relative z-20"
                  :class="pkg.popular ? 'bg-[#1C92E2] text-white hover:bg-[#1474b8] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 hover:-translate-y-0.5' : 'bg-gray-100 text-gray-900 group-hover:bg-[#1C92E2] group-hover:text-white'">
            Pilih Paket
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

