<script setup lang="ts">
import { ASSETS } from '~/constants/assets';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const programs = [
  {
    title: 'Banasbox',
    category: 'Sosial Kemanusiaan',
    description: 'Bantuan sembako dan kebutuhan dasar untuk keluarga prasejahtera.',
    image: ASSETS.PROGRAM_BANASBOX,
    color: 'from-[#1C92E2]/90 to-gray-900/90'
  },
  {
    title: 'Bapindo',
    category: 'Pemberdayaan',
    description: 'Bantuan modal usaha dan pendampingan UMKM mikro.',
    image: ASSETS.PROGRAM_BAPINDO,
    color: 'from-[#78CFA1]/90 to-gray-900/90'
  },
  {
    title: 'Bambako',
    category: 'Pendidikan',
    description: 'Beasiswa pendidikan untuk generasi muda berprestasi namun kurang mampu.',
    image: ASSETS.PROGRAM_BAMBAKO,
    color: 'from-[#FFDB08]/90 to-gray-900/90'
  }
];

const cardsRef = ref([]);

onMounted(() => {
  gsap.fromTo(cardsRef.value, 
    { y: 100, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      stagger: 0.2, 
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#programs',
        start: 'top 70%',
      }
    }
  );
});
</script>

<template>
  <section id="programs" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Unggulan</h2>
        <p class="text-lg text-gray-600">
          Inisiatif strategis kami untuk menyelesaikan berbagai permasalahan sosial dan meningkatkan kualitas hidup masyarakat.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
        <div v-for="(program, index) in programs" :key="index" ref="cardsRef"
             class="relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
             :class="index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''">
          
          <img :src="program.image" :alt="program.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
          
          <div :class="`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`"></div>
          
          <!-- Shine Effect -->
          <div class="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>

          <div class="absolute inset-0 p-8 flex flex-col justify-end z-20">
            <span class="inline-block py-1 px-3 rounded-full bg-white/20 text-white font-medium text-xs mb-4 backdrop-blur-sm border border-white/30 self-start group-hover:bg-white/30 transition-colors duration-300">
              {{ program.category }}
            </span>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-md group-hover:translate-x-2 transition-transform duration-300">
              {{ program.title }}
            </h3>
            <p class="text-gray-200 line-clamp-3 mb-6 font-light group-hover:text-white transition-colors duration-300">
              {{ program.description }}
            </p>
            <button class="flex items-center gap-2 text-white font-semibold hover:gap-4 group-hover:gap-4 transition-all w-fit">
              <span>Pelajari Lebih Lanjut</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
