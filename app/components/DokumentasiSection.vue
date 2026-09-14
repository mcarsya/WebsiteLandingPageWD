<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ASSETS } from '~/constants/assets';

const carouselRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
let autoScrollInterval: ReturnType<typeof setInterval>;

const documents = [
  {
    image: ASSETS.STORY_1,
    title: 'Laporan Penyaluran Qurban Pelosok 2025',
    date: 'Agustus 2025',
    views: 450
  },
  {
    image: ASSETS.STORY_2,
    title: 'Kisah Inspiratif: Beasiswa Mengubah Nasib',
    date: 'Juli 2025',
    views: 890
  },
  {
    image: ASSETS.STORY_3,
    title: 'Dokumentasi Bantuan Air Bersih Gunung Kidul',
    date: 'Juni 2025',
    views: 1200
  },
  {
    image: ASSETS.STORY_1,
    title: 'Majalah Donatur Edisi Khusus Ramadhan',
    date: 'April 2025',
    views: 3400
  },
  {
    image: ASSETS.STORY_2,
    title: 'Pemberdayaan UMKM Bapindo Batch 5',
    date: 'Maret 2025',
    views: 2100
  },
  {
    image: ASSETS.STORY_3,
    title: 'Penyaluran Zakat Fitrah Ramadhan 1446 H',
    date: 'Maret 2025',
    views: 5600
  }
];

const totalDots = Math.ceil(documents.length / 1); // 1 dot per card to make it smooth

// Mouse Drag Logic
let isDown = false;
let startX: number;
let scrollLeft: number;

const startDrag = (e: MouseEvent) => {
  isDown = true;
  if (!carouselRef.value) return;
  startX = e.pageX - carouselRef.value.offsetLeft;
  scrollLeft = carouselRef.value.scrollLeft;
  pauseAutoScroll();
};

const stopDrag = () => {
  isDown = false;
  resumeAutoScroll();
};

const doDrag = (e: MouseEvent) => {
  if (!isDown || !carouselRef.value) return;
  e.preventDefault();
  const x = e.pageX - carouselRef.value.offsetLeft;
  const walk = (x - startX) * 2; // Scroll-fast
  carouselRef.value.scrollLeft = scrollLeft - walk;
};

// Handle Scroll Event to update Active Dot
const handleScroll = () => {
  if (!carouselRef.value) return;
  const scrollPosition = carouselRef.value.scrollLeft;
  const itemWidth = carouselRef.value.scrollWidth / documents.length;
  activeIndex.value = Math.round(scrollPosition / itemWidth);
};

// Auto Scroll Logic
const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (!carouselRef.value) return;
    const maxScrollLeft = carouselRef.value.scrollWidth - carouselRef.value.clientWidth;
    
    // If reached the end, rewind to start
    if (carouselRef.value.scrollLeft >= maxScrollLeft - 10) {
      carouselRef.value.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Scroll by one item width
      const itemWidth = carouselRef.value.scrollWidth / documents.length;
      carouselRef.value.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  }, 3500); // Auto scroll every 3.5 seconds
};

const pauseAutoScroll = () => {
  clearInterval(autoScrollInterval);
};

const resumeAutoScroll = () => {
  pauseAutoScroll();
  startAutoScroll();
};

const goToDot = (index: number) => {
  if (!carouselRef.value) return;
  const itemWidth = carouselRef.value.scrollWidth / documents.length;
  carouselRef.value.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
  activeIndex.value = index;
  resumeAutoScroll(); // restart timer
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  pauseAutoScroll();
});

</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden group/section">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
      
      <!-- Header Area (Without Arrows) -->
      <div class="text-center mb-12">
        <span class="text-[#78CFA1] font-bold tracking-wider uppercase text-sm mb-2 block">Jejak Kebaikan</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Inspirasi & Dokumentasi</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Saksikan langsung bagaimana setiap donasi Anda membawa perubahan nyata dan mengukir senyum di wajah mereka.</p>
      </div>

      <!-- Carousel Container -->
      <div class="relative -mx-4 px-4 md:mx-0 md:px-0"
           @mouseenter="pauseAutoScroll"
           @mouseleave="resumeAutoScroll">
           
        <div ref="carouselRef" 
             @mousedown="startDrag"
             @mouseleave="stopDrag"
             @mouseup="stopDrag"
             @mousemove="doDrag"
             @scroll="handleScroll"
             class="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 cursor-grab active:cursor-grabbing select-none"
             style="scroll-behavior: smooth;">
             
          <div v-for="(doc, index) in documents" :key="index" 
               class="group snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pointer-events-none">
               
            <!-- Make inner content pointer-events-auto so buttons still work, 
                 but dragging on the card doesn't select text/images -->
            <div class="pointer-events-auto h-full flex flex-col">
              
              <!-- Image Card -->
              <div class="relative overflow-hidden rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-500 mb-4 aspect-[4/5] bg-gray-100 cursor-pointer">
                <img :src="doc.image" :alt="doc.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none" draggable="false" />
                
                <!-- Overlay & Button -->
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button class="bg-white text-gray-900 font-bold px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-pointer">
                    Baca Selengkapnya
                  </button>
                </div>
                
                <!-- Top badge (optional) -->
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1C92E2] shadow-sm select-none">
                  E-Magazine
                </div>
              </div>
              
              <!-- Text Content -->
              <div class="text-center px-2 cursor-default">
                <h3 class="font-bold text-gray-900 mb-2 group-hover:text-[#1C92E2] transition-colors line-clamp-2">{{ doc.title }}</h3>
                
                <div class="flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
                  <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    {{ doc.date }}
                  </span>
                  <span class="flex items-center gap-1 text-[#78CFA1]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    {{ doc.views }} Dibaca
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <!-- Pagination Dots -->
      <div class="flex justify-center items-center gap-2 mt-4">
        <button 
          v-for="(_, index) in Math.max(1, documents.length - 2)" :key="index"
          @click="goToDot(index)"
          class="rounded-full transition-all duration-300"
          :class="activeIndex === index ? 'w-8 h-2.5 bg-[#78CFA1]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
      
      <div class="text-center mt-12">
        <a href="#" class="inline-flex items-center gap-2 text-[#78CFA1] hover:text-[#5eb786] font-bold hover:gap-3 transition-all">
          Lihat Semua Dokumentasi
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* For better drag experience */
.snap-x {
  scroll-snap-type: x mandatory;
}
.active\:cursor-grabbing:active {
  cursor: grabbing;
}
</style>
