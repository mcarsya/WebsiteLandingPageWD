<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted } from 'vue';
import { ASSETS } from '~/constants/assets';
import { useDonationModal } from '~/composables/useDonationModal';
import gsap from 'gsap';

const { openDonationModal } = useDonationModal();

const mesh1 = shallowRef<any>(null);
const mesh2 = shallowRef<any>(null);

let animationFrameId: number;

const animate3D = () => {
  const elapsed = performance.now() / 1000;
  
  if (mesh1.value) {
    mesh1.value.rotation.y = elapsed * 0.4;
    mesh1.value.rotation.x = Math.sin(elapsed * 0.5) * 0.5;
    mesh1.value.position.y = Math.sin(elapsed) * 0.5 + 1.5;
  }
  
  if (mesh2.value) {
    mesh2.value.rotation.y = -elapsed * 0.3;
    mesh2.value.rotation.z = Math.cos(elapsed * 0.5) * 0.5;
    mesh2.value.position.y = Math.cos(elapsed * 1.2) * 0.5 - 1.5;
  }
  
  animationFrameId = requestAnimationFrame(animate3D);
};

const slides = [
  {
    image: ASSETS.HERO_SLIDE_1,
    title: 'Merajut Kepedulian, Membangun Peradaban',
    subtitle: 'Bersama Worthydays, wujudkan aksi nyata untuk umat sejak 2021.',
  },
  {
    image: ASSETS.HERO_SLIDE_2,
    title: 'Donasi Mudah, Kebaikan Melimpah',
    subtitle: 'Pilih program dan salurkan sedekah Anda dari mana saja.',
  }
];

const currentSlide = ref(0);
const textContainerRef = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
  animateText();
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  animateText();
};

const animateText = () => {
  if (textContainerRef.value) {
    gsap.fromTo(textContainerRef.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }
};

onMounted(() => {
  animateText();
  animate3D();
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<template>
  <section class="relative h-screen min-h-[600px] w-full overflow-hidden bg-gray-900 flex items-center">
    <!-- Slider Background -->
    <div class="absolute inset-0 transition-opacity duration-1000" v-for="(slide, index) in slides" :key="index" :class="currentSlide === index ? 'opacity-100' : 'opacity-0'">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <img :src="slide.image" :alt="slide.title" class="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-[10000ms] ease-out" :class="currentSlide === index ? 'scale-110' : ''" />
    </div>

    <!-- 3D Canvas layer -->
    <div class="absolute inset-0 z-20 pointer-events-none opacity-60 mix-blend-screen">
      <TresCanvas alpha window-size>
        <TresPerspectiveCamera :position="[0, 0, 7]" />
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight :position="[5, 5, 5]" :intensity="2" color="#1C92E2" />
        <TresDirectionalLight :position="[-5, -5, 5]" :intensity="1" color="#78CFA1" />
        
        <TresMesh ref="mesh1" :position="[2.5, 1.5, 0]">
          <TresIcosahedronGeometry :args="[1.2, 1]" />
          <TresMeshStandardMaterial color="#ffffff" :roughness="0.1" :metalness="0.8" wireframe />
        </TresMesh>
        
        <TresMesh ref="mesh2" :position="[-2.5, -1.5, 0]">
          <TresTorusGeometry :args="[0.8, 0.3, 16, 32]" />
          <TresMeshStandardMaterial color="#1C92E2" :roughness="0.2" :metalness="0.6" />
        </TresMesh>
      </TresCanvas>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 md:px-6 relative z-30 flex flex-col justify-center h-full pt-16">
      <div ref="textContainerRef" class="max-w-3xl">
        <span class="inline-block py-1 px-3 rounded-full bg-[#1C92E2]/20 text-[#1C92E2] font-semibold text-sm mb-6 backdrop-blur-sm border border-[#1C92E2]/30">Est. 2021</span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          {{ slides[currentSlide].title }}
        </h1>
        <p class="text-lg md:text-2xl text-gray-200 mb-10 drop-shadow-md font-light">
          {{ slides[currentSlide].subtitle }}
        </p>
        <div class="flex flex-wrap gap-4">
          <button @click="openDonationModal" class="px-8 py-4 rounded-full font-bold text-white bg-[#1C92E2] hover:bg-[#1474b8] transition-colors shadow-lg shadow-blue-500/50">
            Mulai Donasi
          </button>
          <NuxtLink to="/program" class="px-8 py-4 rounded-full font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20 text-center flex items-center justify-center">
            Jelajahi Program
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="absolute bottom-10 left-0 right-0 z-30">
      <div class="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div class="flex gap-2">
          <button @click="currentSlide = index" v-for="(slide, index) in slides" :key="'dot'+index" class="w-3 h-3 rounded-full transition-all" :class="currentSlide === index ? 'bg-[#1C92E2] w-8' : 'bg-white/50 hover:bg-white'"></button>
        </div>
        <div class="flex gap-4">
          <button @click="prevSlide" class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button @click="nextSlide" class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

