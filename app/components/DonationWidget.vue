<script setup lang="ts">
import { ref } from 'vue';
import { ASSETS } from '~/constants/assets';

const isOpen = ref(false);
const activeMethod = ref('qris');

const toggleWidget = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative">
    <!-- Floating Action Button -->
    <button @click="toggleWidget" 
            class="w-16 h-16 rounded-full bg-gradient-to-r from-[#1C92E2] to-[#78CFA1] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform duration-300 z-50 relative overflow-hidden group">
      <div class="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out"></div>
      
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
      
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
    </button>

    <!-- Popup Widget -->
    <div v-if="isOpen" class="absolute bottom-20 right-0 w-[360px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden origin-bottom-right transition-all duration-300">
      <div class="bg-gradient-to-r from-[#1C92E2] to-[#1474b8] p-6 text-white">
        <h3 class="font-bold text-xl mb-1">Mulai Kebaikanmu</h3>
        <p class="text-blue-100 text-sm">Pilih metode donasi yang paling nyaman untuk Anda.</p>
      </div>
      
      <div class="p-6">
        <!-- Tabs -->
        <div class="flex bg-gray-100 p-1 rounded-xl mb-6">
          <button @click="activeMethod = 'qris'" class="flex-1 py-2 text-sm font-bold rounded-lg transition-colors" :class="activeMethod === 'qris' ? 'bg-white text-[#1C92E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'">QRIS</button>
          <button @click="activeMethod = 'transfer'" class="flex-1 py-2 text-sm font-bold rounded-lg transition-colors" :class="activeMethod === 'transfer' ? 'bg-white text-[#1C92E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'">Transfer</button>
          <button @click="activeMethod = 'wa'" class="flex-1 py-2 text-sm font-bold rounded-lg transition-colors" :class="activeMethod === 'wa' ? 'bg-white text-[#1C92E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'">WhatsApp</button>
        </div>

        <!-- Content -->
        <div class="min-h-[220px]">
          
          <!-- QRIS -->
          <div v-if="activeMethod === 'qris'" class="flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <div class="bg-gray-50 p-3 rounded-2xl border border-gray-100 mb-4 shadow-inner">
              <img :src="ASSETS.QRIS_CODE" alt="QRIS Code" class="w-40 h-40 object-cover rounded-xl" />
            </div>
            <p class="text-sm text-gray-500 text-center mb-4">Scan kode QR di atas menggunakan aplikasi e-wallet atau m-banking Anda.</p>
            <button class="w-full py-3 bg-[#1C92E2] text-white font-bold rounded-xl hover:bg-[#1474b8] transition-colors">Unduh QRIS</button>
          </div>
          
          <!-- Transfer -->
          <div v-if="activeMethod === 'transfer'" class="animate-in fade-in slide-in-from-right-4 duration-300">
            <div class="space-y-4">
              <div class="p-4 border border-gray-200 rounded-xl hover:border-[#1C92E2] transition-colors cursor-pointer group">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold text-gray-900">BSI (Bank Syariah Indonesia)</span>
                  <span class="text-xs font-semibold px-2 py-1 bg-green-50 text-green-600 rounded">Zakat</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-lg text-gray-600 font-mono">1234 5678 90</span>
                  <button class="text-[#1C92E2] group-hover:bg-blue-50 p-2 rounded-lg transition-colors" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  </button>
                </div>
                <p class="text-xs text-gray-400 mt-1">a.n Yayasan Worthydays</p>
              </div>
              
              <div class="p-4 border border-gray-200 rounded-xl hover:border-[#1C92E2] transition-colors cursor-pointer group">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold text-gray-900">BCA Syariah</span>
                  <span class="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded">Infaq</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-lg text-gray-600 font-mono">0987 6543 21</span>
                  <button class="text-[#1C92E2] group-hover:bg-blue-50 p-2 rounded-lg transition-colors" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  </button>
                </div>
                <p class="text-xs text-gray-400 mt-1">a.n Yayasan Worthydays</p>
              </div>
            </div>
          </div>
          
          <!-- WhatsApp -->
          <div v-if="activeMethod === 'wa'" class="flex flex-col items-center justify-center h-full pt-4 animate-in fade-in slide-in-from-left-4 duration-300">
            <div class="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <p class="text-gray-600 text-center mb-6 font-medium">Butuh bantuan konsultasi Zakat atau konfirmasi donasi manual?</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors text-center flex items-center justify-center gap-2">
              Hubungi CS Kami
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

