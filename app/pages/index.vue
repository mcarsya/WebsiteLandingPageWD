<template>
  <div>
    <HeroSection />
    <AboutSection />
    <DokumentasiSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  window.scrollTo(0, 0);
});
</script>

