<script setup lang="ts">
import { ASSETS } from '~/constants/assets';
</script>

<template>
  <section class="py-24 bg-gray-900 text-white overflow-hidden relative">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C92E2] via-gray-900 to-gray-900"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Cerita & Inspirasi</h2>
        <p class="text-lg text-gray-400">
          Saksikan langsung dampak kebaikan Anda dan dengarkan kisah inspiratif dari mereka yang terus berjuang.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Video Spotlight Card -->
        <div class="lg:col-span-2 relative group rounded-3xl overflow-hidden cursor-pointer bg-black">
          <img :src="ASSETS.VIDEO_THUMBNAIL" alt="Video Showcase" class="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          <!-- Play Button -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1C92E2] transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
          
          <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
            <span class="inline-block py-1 px-3 rounded-full bg-[#1C92E2]/20 text-[#1C92E2] font-semibold text-xs mb-3 backdrop-blur-sm border border-[#1C92E2]/30">Spotlight</span>
            <h3 class="text-2xl md:text-3xl font-bold mb-2 text-white">Senyum Baru untuk Desa Pelosok</h3>
            <p class="text-gray-300 line-clamp-2">Perjalanan relawan Worthydays mengantarkan bantuan air bersih dan sanitasi yang mengubah hidup ratusan warga.</p>
          </div>
        </div>

        <!-- Podcast Embed Card -->
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700 flex flex-col relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#1db954] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          
          <div class="flex items-center gap-4 mb-8">
            <img :src="ASSETS.PODCAST_THUMBNAIL" alt="WorthyTalks Podcast" class="w-20 h-20 rounded-2xl object-cover shadow-lg" />
            <div>
              <h4 class="font-bold text-xl text-white">WorthyTalks</h4>
              <p class="text-[#1db954] text-sm font-semibold">Tersedia di Spotify</p>
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mb-8 flex-grow">
            Dengarkan bincang santai namun mendalam seputar filantropi, isu sosial, dan gaya hidup Islami bersama narasumber inspiratif.
          </p>
          
          <!-- Mockup Spotify Embed (Visual only for layout, or actual iframe if needed) -->
          <div class="bg-black/50 rounded-2xl p-4 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
            <div class="flex items-center gap-4">
               <div class="w-12 h-12 bg-[#1db954] rounded-full flex items-center justify-center flex-shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
               </div>
               <div>
                 <p class="text-white font-bold text-sm line-clamp-1">Ep 24: Kedermawanan di Era Digital</p>
                 <p class="text-gray-400 text-xs">Worthydays • 45 min</p>
               </div>
            </div>
            
            <div class="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div class="w-1/3 h-full bg-[#1db954]"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

