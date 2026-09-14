<script setup lang="ts">
import { ASSETS } from '~/constants/assets';
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <img :src="ASSETS.LOGO" alt="Worthydays Logo" class="h-10 w-auto object-contain mb-6 grayscale brightness-200" />
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Lembaga filantropi modern yang berfokus pada pemberdayaan umat melalui Zakat, Infaq, Sedekah, dan Wakaf sejak 2021.
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1C92E2] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1C92E2] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1C92E2] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6">Program</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-[#1C92E2] transition-colors">Banasbox</a></li>
            <li><a href="#" class="hover:text-[#1C92E2] transition-colors">Bapindo</a></li>
            <li><a href="#" class="hover:text-[#1C92E2] transition-colors">Bambako</a></li>
            <li><a href="#" class="hover:text-[#1C92E2] transition-colors">WorthyTalks Podcast</a></li>
          </ul>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6">Informasi</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/tentang-kami" class="hover:text-[#1C92E2] transition-colors">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/laporan-keuangan" class="hover:text-[#1C92E2] transition-colors">Laporan Keuangan</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-[#1C92E2] transition-colors">Syarat & Ketentuan</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-[#1C92E2] transition-colors">Kebijakan Privasi</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C92E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Jl. Contoh Alamat No. 123, Kota, Provinsi, 12345</span>
            </li>
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C92E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+62 812 3456 7890</span>
            </li>
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C92E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>halo@worthydays.org</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} Worthydays. All rights reserved.</p>
        <p class="mt-2 md:mt-0">Est. 2021</p>
      </div>
    </div>
  </footer>
</template>

