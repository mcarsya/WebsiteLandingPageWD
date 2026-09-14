<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  window.scrollTo(0, 0);
  gsap.fromTo('.animate-fade-up', 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
  );
});

// Data state
const searchQuery = ref('');
const activeType = ref('Semua');
const activeYear = ref('Semua');

const types = ['Semua', 'Annual Report', 'Laporan Audit Nazhir Wakaf', 'Laporan Audit ZIS'];
const years = ['Semua', '2026', '2025', '2024'];

const reports = [
  {
    id: 1,
    title: 'Annual Report Worthydays 2024',
    type: 'Annual Report',
    year: '2024',
    desc: 'Laporan ini memuat rangkuman amanah, program, dan capaian kebaikan yang terwujud berkat dukungan para donatur dan mitra Worthydays sepanjang tahun 2024. Terima kasih atas kepercayaan Sahabat semua. Baca selengkapnya dan ikuti jejak kebaikan bersama Worthydays di website resmi kami.',
    period: '1 Januari 2024 - 31 Desember 2024',
  },
  {
    id: 2,
    title: 'Laporan Audit ZIS Worthydays 2025',
    type: 'Laporan Audit ZIS',
    year: '2025',
    desc: 'Laporan audit independen atas penerimaan dan penyaluran Zakat, Infaq, dan Sedekah (ZIS) tahun 2025 dengan opini Wajar Tanpa Pengecualian (WTP).',
    period: '1 Januari 2025 - 31 Desember 2025',
  },
  {
    id: 3,
    title: 'Laporan Audit Nazhir Wakaf 2026',
    type: 'Laporan Audit Nazhir Wakaf',
    year: '2026',
    desc: 'Laporan pengelolaan aset wakaf produktif dan penyaluran mauquf alaih untuk periode tahun 2026 yang telah diaudit.',
    period: '1 Januari 2026 - 31 Desember 2026',
  },
  {
    id: 4,
    title: 'Laporan Audit ZIS Worthydays 2024',
    type: 'Laporan Audit ZIS',
    year: '2024',
    desc: 'Laporan audit independen atas penerimaan dan penyaluran Zakat, Infaq, dan Sedekah (ZIS) tahun 2024 dengan opini Wajar Tanpa Pengecualian (WTP).',
    period: '1 Januari 2024 - 31 Desember 2024',
  },
];

// Computed filtering
const filteredReports = computed(() => {
  return reports.filter(report => {
    const matchSearch = report.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                        report.desc.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchType = activeType.value === 'Semua' || report.type === activeType.value;
    const matchYear = activeYear.value === 'Semua' || report.year === activeYear.value;
    
    return matchSearch && matchType && matchYear;
  });
});
</script>

<template>
  <div class="bg-[#FAFAFC] min-h-screen pb-24">
    <!-- Decorative Background -->
    <div class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#78CFA1]/10 to-transparent pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10 pt-32">
      <!-- Header Section -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Laporan Keuangan</h1>
        <p class="text-lg text-slate-600">Akses semua laporan keuangan Worthydays untuk transparansi dan akuntabilitas pengelolaan dana</p>
      </div>

      <!-- Filters Section -->
      <div class="max-w-4xl mx-auto mb-12">
        <!-- Search Bar -->
        <div class="flex gap-4 mb-8">
          <div class="relative flex-grow">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Cari laporan keuangan..." 
              class="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-6 pr-4 focus:outline-none focus:ring-2 focus:ring-[#78CFA1]/50 focus:border-[#78CFA1] transition-all"
            />
          </div>
          <button class="bg-[#78CFA1] hover:bg-[#63bc8c] text-white px-8 py-3.5 rounded-full font-bold shadow-md shadow-green-500/20 transition-all">
            Cari
          </button>
        </div>

        <!-- Filter Pills -->
        <div class="space-y-4">
          <!-- Filter Jenis -->
          <div class="flex items-center gap-4 flex-wrap">
            <span class="text-sm font-semibold text-slate-700 w-12">Jenis:</span>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="type in types" :key="type"
                @click="activeType = type"
                class="px-5 py-2 rounded-full text-sm font-medium border transition-all"
                :class="activeType === type ? 'bg-[#78CFA1] text-white border-[#78CFA1] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-[#78CFA1] hover:text-[#78CFA1]'"
              >
                {{ type }}
              </button>
            </div>
          </div>
          
          <!-- Filter Tahun -->
          <div class="flex items-center gap-4 flex-wrap">
            <span class="text-sm font-semibold text-slate-700 w-12">Tahun:</span>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="year in years" :key="year"
                @click="activeYear = year"
                class="px-5 py-2 rounded-full text-sm font-medium border transition-all"
                :class="activeYear === year ? 'bg-[#78CFA1] text-white border-[#78CFA1] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-[#78CFA1] hover:text-[#78CFA1]'"
              >
                {{ year }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Reports List -->
      <div class="max-w-4xl mx-auto">
        <TransitionGroup name="list" tag="div" class="space-y-6 relative">
          
          <div v-for="report in filteredReports" :key="report.id" class="animate-fade-up bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
            
            <div class="flex flex-col lg:flex-row gap-6">
              <!-- Content -->
              <div class="flex-grow">
                <!-- Badges -->
                <div class="flex items-center gap-3 mb-4">
                  <div class="text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                  </div>
                  <span class="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">{{ report.type }}</span>
                  <span class="text-slate-500 text-sm font-medium">{{ report.year }}</span>
                </div>
                
                <h2 class="text-2xl font-bold text-slate-900 mb-3">{{ report.title }}</h2>
                <p class="text-slate-600 text-sm leading-relaxed mb-6">{{ report.desc }}</p>
                
                <!-- Metadata -->
                <div class="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                  <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    Periode: {{ report.period }}
                  </div>
                  <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    PDF
                  </div>
                  <div class="flex items-center gap-1.5">
                    Diterbitkan: Tahun {{ report.year }}
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="shrink-0 flex items-end lg:items-center justify-start lg:justify-end gap-3 mt-4 lg:mt-0">
                <button class="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  Preview
                </button>
                <button class="px-5 py-2.5 rounded-xl bg-[#78CFA1] text-white font-bold text-sm hover:bg-[#63bc8c] shadow-md shadow-green-500/20 transition-all flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download
                </button>
              </div>
            </div>
            
          </div>
        </TransitionGroup>

        <!-- Empty State -->
        <div v-if="filteredReports.length === 0" class="text-center py-24">
          <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <h3 class="text-xl font-bold text-slate-700 mb-2">Laporan Tidak Ditemukan</h3>
          <p class="text-slate-500">Coba ubah kata kunci pencarian atau sesuaikan filter jenis/tahun.</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>
