<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const isLoading = ref(true);
const containerRef = ref(null);
const logoRef = ref(null);
const textRef = ref(null);

onMounted(() => {
  // Prevent scrolling while loading
  document.body.style.overflow = 'hidden';

  const tl = gsap.timeline();

  // Initial pop in for logo
  tl.fromTo(logoRef.value, 
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }
  )
  // Text fade in
  .fromTo(textRef.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.4'
  )
  // Hold for a moment to let user read
  .to({}, { duration: 1 })
  // Zoom in & Fade out the entire screen
  .to(containerRef.value, {
    opacity: 0,
    y: '-100%',
    duration: 0.8,
    ease: 'power3.inOut',
    onComplete: () => {
      isLoading.value = false;
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });
});
</script>

<template>
  <div v-if="isLoading" ref="containerRef" class="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
    
    <!-- Animated Logo / Icon -->
    <div ref="logoRef" class="relative w-24 h-24 mb-6">
      <!-- Spinning rings -->
      <div class="absolute inset-0 rounded-full border-4 border-gray-100"></div>
      <div class="absolute inset-0 rounded-full border-4 border-[#78CFA1] border-t-transparent animate-spin"></div>
      <div class="absolute inset-2 rounded-full border-4 border-[#1C92E2] border-b-transparent animate-[spin_2s_linear_infinite_reverse]"></div>
      
      <!-- Center Icon (Heart) -->
      <div class="absolute inset-0 flex items-center justify-center text-[#78CFA1]">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </div>
    </div>
    
    <!-- Text -->
    <div ref="textRef" class="text-center">
      <h2 class="text-2xl font-extrabold text-gray-900 tracking-tight">Worthydays</h2>
      <p class="text-gray-500 font-medium text-sm tracking-widest uppercase mt-2">Menebar Kebaikan...</p>
    </div>
    
  </div>
</template>

