<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ASSETS } from '~/constants/assets';
import { useDonationModal } from '~/composables/useDonationModal';

const { openDonationModal } = useDonationModal();

onMounted(() => {
  window.scrollTo(0, 0);
});

const filters = [
  { id: 'semua', label: 'Semua Program', count: 15 },
  { id: 'ekonomi', label: 'Ekonomi', count: 4 },
  { id: 'pendidikan', label: 'Pendidikan', count: 2 },
  { id: 'kemanusiaan', label: 'Kemanusiaan', count: 5 },
  { id: 'dakwah', label: 'Dakwah', count: 1 },
];

const activeFilter = ref('semua');

const programs = [
  {
    id: 1,
    category: 'Ekonomi',
    title: 'Pemberdayaan UMKM (Bapindo)',
    image: ASSETS.PROGRAM_BAPINDO,
    desc: 'Penguatan ekonomi untuk usaha skala kecil dan menengah agar dapat mandiri dan berkembang.',
    collected: 15250000,
    target: 100000000,
  },
  {
    id: 2,
    category: 'Kemanusiaan',
    title: 'Solidaritas Palestina',
    image: ASSETS.PROGRAM_BANASBOX,
    desc: 'Bantuan darurat berupa pangan, obat-obatan, dan kebutuhan musim dingin untuk saudara di Palestina.',
    collected: 450000000,
    target: 1000000000,
  },
  {
    id: 3,
    category: 'Pendidikan',
    title: 'Beasiswa Anak Berprestasi (Bambako)',
    image: ASSETS.PROGRAM_BAMBAKO,
    desc: 'Beasiswa pendidikan untuk generasi muda berprestasi namun kurang mampu hingga jenjang perguruan tinggi.',
    collected: 35000000,
    target: 250000000,
  },
  {
    id: 4,
    category: 'Kemanusiaan',
    title: 'Banasbox: Bantuan Pangan Pelosok',
    image: ASSETS.PROGRAM_BANASBOX,
    desc: 'Distribusi paket sembako bergizi untuk keluarga prasejahtera di daerah terpencil dan pedalaman.',
    collected: 8500000,
    target: 50000000,
  },
  {
    id: 5,
    category: 'Pendidikan',
    title: 'Bantuan Guru Honorer Pelosok',
    image: ASSETS.PROGRAM_BAMBAKO,
    desc: 'Program dukungan biaya hidup dan perlengkapan mengajar untuk guru honorer di daerah 3T.',
    collected: 12000000,
    target: 50000000,
  }
];

const filteredPrograms = computed(() => {
  if (activeFilter.value === 'semua') {
    return programs;
  }
  return programs.filter(p => p.category.toLowerCase() === activeFilter.value.toLowerCase());
});

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
};

const getPercentage = (collected: number, target: number) => {
  return Math.min(100, Math.round((collected / target) * 100));
};
</script>

<template>
  <div class="bg-white pb-24">
    <!-- SECTION 1: Header & Filters -->
    <section class="pt-28 pb-12 bg-gray-50 border-b border-gray-100">
      <div class="container mx-auto px-4 md:px-6 text-center max-w-5xl">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Program Unggulan <span class="text-[#78CFA1]">Worthydays</span>
        </h1>
        
        <div class="rounded-3xl overflow-hidden shadow-sm mb-10 w-full max-w-4xl mx-auto aspect-[21/9]">
          <img :src="ASSETS.HERO_SLIDE_1" alt="Banner Program" class="w-full h-full object-cover" />
        </div>
        
        <p class="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Mari bersama menebar manfaat dan kebaikan melalui berbagai program donasi Worthydays. Setiap kontribusi Anda menjadi harapan baru bagi yang membutuhkan, serta langkah nyata untuk membangun masa depan yang lebih sejahtera dan penuh keberkahan.
        </p>

        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-3">
          <button v-for="filter in filters" :key="filter.id" 
                  @click="activeFilter = filter.id"
                  class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all border"
                  :class="activeFilter === filter.id 
                    ? 'bg-[#78CFA1] text-white border-[#78CFA1] shadow-md' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#78CFA1] hover:text-[#78CFA1]'">
            {{ filter.label }} <span class="text-xs opacity-70 ml-1">({{ filter.count }})</span>
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Program Grid -->
    <section class="py-16 min-h-[500px]">
      <div class="container mx-auto px-4 md:px-6 max-w-6xl">
        <TransitionGroup name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          <!-- Card Item -->
          <div v-for="prog in filteredPrograms" :key="prog.id" class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
            
            <!-- Image Header -->
            <div class="relative h-56 overflow-hidden">
              <img :src="prog.image" :alt="prog.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <!-- Badge Category -->
              <span class="absolute top-4 left-4 bg-[#78CFA1] text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                {{ prog.category }}
              </span>
              
              <!-- Title in Image -->
              <h3 class="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white leading-tight">
                {{ prog.title }}
              </h3>
            </div>
            
            <!-- Content -->
            <div class="p-6 flex flex-col flex-grow">
              <p class="text-gray-600 text-sm mb-8 line-clamp-2">
                {{ prog.desc }}
              </p>
              
              <!-- Progress Bar -->
              <div class="mt-auto">
                <div class="flex justify-between items-end mb-2">
                  <div>
                    <span class="text-[#78CFA1] font-bold">{{ formatCurrency(prog.collected) }}</span>
                    <span class="text-gray-400 text-xs ml-1">({{ getPercentage(prog.collected, prog.target) }}%)</span>
                  </div>
                  <span class="text-gray-500 text-xs font-medium">{{ formatCurrency(prog.target) }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2 mb-6 overflow-hidden">
                  <div class="bg-[#78CFA1] h-2 rounded-full transition-all duration-1000" :style="`width: ${getPercentage(prog.collected, prog.target)}%`"></div>
                </div>
                
                <!-- Footer Card -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="flex items-center gap-2">
                    <span class="text-xs text-gray-400 mr-1">Bagikan</span>
                    <!-- Social Icons (Dummy) -->
                    <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1C92E2] hover:border-[#1C92E2] transition-colors">f</button>
                    <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500 transition-colors">w</button>
                  </div>
                  
                  <button @click="openDonationModal" class="bg-[#78CFA1] hover:bg-[#68be91] text-white font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    Donasi
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          
        </TransitionGroup>
        
        <!-- Empty State -->
        <div v-if="filteredPrograms.length === 0" class="text-center py-20 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4 opacity-50"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
          <p class="text-lg font-medium">Belum ada program untuk kategori ini.</p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Pilihan Biaya / Paket Membership -->
    <MembershipSection />
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.list-leave-active {
  position: absolute;
}
</style>
