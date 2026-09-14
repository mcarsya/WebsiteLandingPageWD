<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '~/constants/assets';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  window.scrollTo(0, 0);
});
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-900 py-24 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C92E2]/20 via-gray-900 to-gray-900"></div>
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Mulai Berdonasi</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Satu langkah kecil Anda berarti besar bagi mereka.</p>
      </div>
    </section>

    <MembershipSection />

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Metode Pembayaran Langsung</h2>
          <p class="text-gray-600">Anda juga dapat melakukan donasi langsung melalui transfer bank atau QRIS.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- QRIS -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Scan QRIS</h3>
            <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
              <img :src="ASSETS.QRIS_CODE" alt="QRIS Code" class="w-48 h-48 object-cover rounded-xl" />
            </div>
            <p class="text-sm text-gray-500 text-center">Scan kode QR ini menggunakan aplikasi e-wallet (Gopay, OVO, Dana) atau mobile banking Anda.</p>
          </div>

          <!-- Bank Transfer -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Transfer Bank</h3>
            
            <div class="space-y-4">
              <div class="p-4 border border-gray-200 rounded-xl">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold text-gray-900">Bank Syariah Indonesia (BSI)</span>
                </div>
                <div class="text-2xl text-[#1C92E2] font-mono font-bold tracking-wider mb-1">1234 5678 90</div>
                <p class="text-sm text-gray-500">a.n Yayasan Worthydays Zakat</p>
              </div>
              
              <div class="p-4 border border-gray-200 rounded-xl">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold text-gray-900">BCA Syariah</span>
                </div>
                <div class="text-2xl text-[#1C92E2] font-mono font-bold tracking-wider mb-1">0987 6543 21</div>
                <p class="text-sm text-gray-500">a.n Yayasan Worthydays Infaq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

