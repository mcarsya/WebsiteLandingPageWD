<script setup lang="ts">
import { ref } from 'vue';
import { useDonationModal } from '~/composables/useDonationModal';

const { isDonationModalOpen, closeDonationModal } = useDonationModal();

const programs = [
  'Banasbox - Sosial Kemanusiaan',
  'Bapindo - Pemberdayaan',
  'Bambako - Pendidikan',
  'Solidaritas Palestina - Kemanusiaan',
  'Wakaf Tunai',
  'Zakat Maal / Profesi'
];

const selectedProgram = ref('');
const nominal = ref('');

const proceedToWA = () => {
  if (!selectedProgram.value) {
    alert('Silakan pilih program terlebih dahulu.');
    return;
  }
  
  const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' });
  const nominalText = nominal.value ? ` sebesar ${formatter.format(Number(nominal.value))}` : '';
  
  const text = `Halo Admin Worthydays,\n\nSaya ingin berdonasi untuk program *${selectedProgram.value}*${nominalText}.\n\nMohon info rekening atau QRIS untuk transfer. Terima kasih.`;
  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  
  window.open(waUrl, '_blank');
  closeDonationModal();
};
</script>

<template>
  <Teleport to="body">
    <div v-if="isDonationModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="closeDonationModal"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-white rounded-3xl w-full max-w-md p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button @click="closeDonationModal" class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
        
        <div class="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-4 text-[#1C92E2]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Mulai Donasi</h3>
        <p class="text-gray-500 text-sm mb-6">Pilih program kebaikan yang ingin Anda dukung hari ini.</p>
        
        <div class="space-y-5 mb-8">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Pilih Program <span class="text-red-500">*</span></label>
            <select v-model="selectedProgram" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#1C92E2] focus:ring-2 focus:ring-[#1C92E2]/20 transition-all appearance-none cursor-pointer">
              <option value="" disabled>-- Pilih Program Donasi --</option>
              <option v-for="prog in programs" :key="prog" :value="prog">{{ prog }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Nominal (Opsional)</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">Rp</span>
              <input type="number" v-model="nominal" placeholder="0" class="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-700 outline-none focus:border-[#1C92E2] focus:ring-2 focus:ring-[#1C92E2]/20 transition-all" />
            </div>
          </div>
        </div>
        
        <button @click="proceedToWA" class="w-full py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>Lanjutkan ke WhatsApp</span>
        </button>
      </div>
    </div>
  </Teleport>
</template>

