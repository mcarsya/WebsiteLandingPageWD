<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ASSETS } from '~/constants/assets';
import { useDonationModal } from '~/composables/useDonationModal';

const { openDonationModal } = useDonationModal();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 transition-all duration-500" :class="isScrolled ? 'pt-4 px-4' : ''">
    <header class="transition-all duration-500" 
            :class="isScrolled ? 'bg-white shadow-xl rounded-full max-w-7xl mx-auto border border-gray-100' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'">
      <div class="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <img :src="ASSETS.LOGO" alt="Worthydays Logo" class="h-10 w-auto object-contain" />
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-2">
          <NuxtLink to="/" active-class="text-[#1C92E2] font-semibold" exact-active-class="text-[#1C92E2] font-bold after:w-full" class="relative group text-sm text-gray-700 hover:text-[#1C92E2] transition-colors py-2 px-4 rounded-xl hover:bg-gray-100/50 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:bg-[#1C92E2] after:-translate-x-1/2 after:transition-all after:duration-300 after:rounded-full after:w-0 hover:after:w-8">
            Beranda
          </NuxtLink>
          <NuxtLink to="/tentang-kami" active-class="text-[#1C92E2] font-semibold" exact-active-class="text-[#1C92E2] font-bold after:w-full" class="relative group text-sm text-gray-700 hover:text-[#1C92E2] transition-colors py-2 px-4 rounded-xl hover:bg-gray-100/50 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:bg-[#1C92E2] after:-translate-x-1/2 after:transition-all after:duration-300 after:rounded-full after:w-0 hover:after:w-8">
            Tentang Kami
          </NuxtLink>
          <NuxtLink to="/program" active-class="text-[#1C92E2] font-semibold" exact-active-class="text-[#1C92E2] font-bold after:w-full" class="relative group text-sm text-gray-700 hover:text-[#1C92E2] transition-colors py-2 px-4 rounded-xl hover:bg-gray-100/50 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:bg-[#1C92E2] after:-translate-x-1/2 after:transition-all after:duration-300 after:rounded-full after:w-0 hover:after:w-8">
            Program
          </NuxtLink>
          <NuxtLink to="/laporan-keuangan" active-class="text-[#1C92E2] font-semibold" exact-active-class="text-[#1C92E2] font-bold after:w-full" class="relative group text-sm text-gray-700 hover:text-[#1C92E2] transition-colors py-2 px-4 rounded-xl hover:bg-gray-100/50 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:bg-[#1C92E2] after:-translate-x-1/2 after:transition-all after:duration-300 after:rounded-full after:w-0 hover:after:w-8">
            Laporan Keuangan
          </NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="hidden md:flex items-center">
          <NuxtLink to="/donasi" class="bg-[#78CFA1] hover:bg-[#68be91] text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Donasi Sekarang
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-gray-700">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      
      <!-- Mobile Drawer -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md rounded-b-3xl px-4 py-4 space-y-2">
        <NuxtLink @click="isMobileMenuOpen = false" to="/" active-class="text-[#1C92E2] font-semibold bg-blue-50" class="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">Beranda</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" to="/tentang-kami" active-class="text-[#1C92E2] font-semibold bg-blue-50" class="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">Tentang Kami</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" to="/program" active-class="text-[#1C92E2] font-semibold bg-blue-50" class="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">Program</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" to="/laporan-keuangan" active-class="text-[#1C92E2] font-semibold bg-blue-50" class="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50">Laporan Keuangan</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" to="/donasi" class="block mt-4 text-center bg-[#78CFA1] text-white font-semibold px-4 py-3 rounded-xl">Donasi Sekarang</NuxtLink>
      </div>
    </header>
  </div>
</template>

