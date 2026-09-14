<script setup lang="ts">
import { ref } from 'vue';
import { ASSETS } from '~/constants/assets';

const activeTab = ref('whatsapp');
const tabs = [
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'bank', label: 'Bank Transfer' },
  { id: 'qris', label: 'QRIS' }
];
</script>

<template>
  <section class="py-16 bg-[#FAFAFC]">
    <div class="container mx-auto px-4 md:px-6">
      <div class="bg-gradient-to-br from-[#00B48D] to-[#008DD2] rounded-3xl overflow-hidden shadow-2xl relative">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        <div class="flex flex-col lg:flex-row p-8 md:p-12 gap-12 relative z-10 items-center">
          <!-- Left Content -->
          <div class="lg:w-1/2 text-white">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Berdonasi di Worthydays semakin mudah</h2>
            <p class="text-lg md:text-xl text-white/90">Mari bersama-sama membantu sesama melalui program kebaikan kami. Pilih metode yang paling nyaman untuk Anda.</p>
          </div>
          
          <!-- Right Content (Tabs & Card) -->
          <div class="lg:w-1/2 w-full relative">
            <!-- Tabs -->
            <div class="flex justify-end gap-2 mb-4">
              <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                      class="px-5 py-2 rounded-full text-sm font-bold transition-all"
                      :class="activeTab === tab.id ? 'bg-white/20 text-white backdrop-blur-md shadow-inner' : 'text-white/60 hover:text-white hover:bg-white/10'">
                {{ tab.label }}
              </button>
            </div>
            
            <!-- Card -->
            <div class="bg-white rounded-2xl p-8 shadow-xl min-h-[250px] flex flex-col justify-center transition-all duration-300">
              
              <!-- WhatsApp -->
              <div v-if="activeTab === 'whatsapp'" class="animate-in fade-in slide-in-from-right-4 duration-500">
                <div class="flex items-center justify-between mb-6">
                  <h3 class="text-2xl font-bold text-[#00B48D]">WhatsApp</h3>
                  <div class="w-12 h-12 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-gray-900 font-bold text-lg mb-2">Konsultasi donasi & informasi lebih lanjut</p>
                  <p class="text-gray-500 text-sm mb-6">Hubungi kami di <span class="font-bold text-gray-800">62811374566</span></p>
                  <a href="https://wa.me/62811374566" target="_blank" class="inline-block bg-[#00B48D] hover:bg-[#009b78] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5">
                    Hubungi Sekarang
                  </a>
                </div>
              </div>

              <!-- Bank Transfer -->
              <div v-if="activeTab === 'bank'" class="animate-in fade-in slide-in-from-right-4 duration-500">
                <div class="flex items-center justify-between mb-6">
                  <h3 class="text-2xl font-bold text-[#1C92E2]">Bank Transfer</h3>
                  <div class="w-12 h-12 bg-blue-50 text-[#1C92E2] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="p-4 border border-gray-100 rounded-xl bg-gray-50 flex justify-between items-center group hover:border-[#1C92E2]/30 transition-colors">
                    <div>
                      <p class="font-bold text-gray-900">BSI (Bank Syariah Indonesia)</p>
                      <p class="text-[#1C92E2] font-mono font-bold text-xl tracking-wider">1234 5678 90</p>
                    </div>
                    <button class="p-2 text-gray-400 hover:text-[#1C92E2] group-hover:bg-white rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- QRIS -->
              <div v-if="activeTab === 'qris'" class="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col items-center text-center">
                <div class="w-full flex items-center justify-between mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">QRIS</h3>
                  <div class="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                  </div>
                </div>
                <div class="bg-white p-3 rounded-xl border border-gray-200 inline-block">
                  <img :src="ASSETS.QRIS_CODE" alt="QRIS" class="w-32 h-32 object-contain" />
                </div>
                <p class="text-sm text-gray-500 mt-3">Scan menggunakan e-wallet favorit Anda</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

