<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ASSETS } from '~/constants/assets';

// Load Midtrans Snap Script with the provided Sandbox Client Key
useHead({
  script: [
    {
      src: 'https://app.sandbox.midtrans.com/snap/snap.js',
      'data-client-key': 'Mid-client-ahS9VJr1tzlppBbC',
      defer: true
    }
  ]
});

const route = useRoute();
const programId = route.params.id as string;

// Dummy data program
const programData = {
  id: programId,
  title: 'Solidaritas Palestina - Kemanusiaan',
  category: 'Kemanusiaan',
  status: 'Aktif',
  minDonation: 10000,
  createdAt: '12 September 2025',
  image: ASSETS.PROGRAM_BANASBOX,
  desc: 'Bantuan darurat berupa pangan, obat-obatan, dan kebutuhan musim dingin untuk saudara di Palestina. Setiap donasi Anda sangat berarti untuk kelangsungan hidup mereka di tengah krisis kemanusiaan ini. Mari bersama merajut kepedulian.',
  collected: 450000000,
  target: 1000000000,
};

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
};

const getPercentage = (collected: number, target: number) => {
  return Math.min(100, Math.round((collected / target) * 100));
};

// Form State
const form = ref({
  amount: 50000, // Default Silver
  name: '',
  phone: '',
  email: '',
  city: ''
});

const isProcessing = ref(false);

const presetNominals = [
  { label: 'Mini Bronze', value: 20000 },
  { label: 'Bronze', value: 25000 },
  { label: 'Silver', value: 50000 },
  { label: 'Gold', value: 75000 },
  { label: 'Platinum', value: 100000 },
  { label: 'Diamond', value: 200000 },
  { label: 'Crown', value: 300000 },
];

const selectPreset = (val: number) => {
  form.value.amount = val;
};

// Checkout Handler
const handleCheckout = async () => {
  if (form.value.amount < programData.minDonation) {
    alert(`Minimal donasi adalah ${formatCurrency(programData.minDonation)}`);
    return;
  }
  
  if (!form.value.name || !form.value.phone || !form.value.email) {
    alert('Mohon lengkapi Nama, WhatsApp, dan Email Anda.');
    return;
  }

  isProcessing.value = true;
  try {
    const response = await $fetch('/api/payment/create', {
      method: 'POST',
      body: {
        programId: programData.id,
        programName: programData.title,
        amount: form.value.amount,
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        city: form.value.city || 'Tidak Diketahui'
      }
    });

    if (response && response.token) {
      // Trigger Midtrans Snap Popup
      window.snap.pay(response.token, {
        onSuccess: function (result: any) {
          alert('Pembayaran sukses! Terima kasih atas donasi Anda.');
          console.log(result);
        },
        onPending: function (result: any) {
          alert('Menunggu pembayaran Anda diselesaikan...');
          console.log(result);
        },
        onError: function (result: any) {
          alert('Pembayaran gagal, silakan coba lagi.');
          console.log(result);
        },
        onClose: function () {
          alert('Anda menutup popup tanpa menyelesaikan pembayaran.');
        }
      });
    }
  } catch (err: any) {
    alert('Terjadi kesalahan saat memproses pembayaran: ' + err.message);
  } finally {
    isProcessing.value = false;
  }
};
</script>

<template>
  <div class="bg-[#FAFAFC] min-h-screen pt-24 pb-16">
    <div class="container mx-auto px-4 md:px-6 max-w-7xl">
      
      <!-- Breadcrumb -->
      <nav class="flex text-sm text-slate-500 mb-6 font-medium">
        <NuxtLink to="/" class="hover:text-[#1C92E2] transition-colors">Beranda</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/program" class="hover:text-[#1C92E2] transition-colors">Program</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-slate-800 font-bold truncate max-w-[200px]">{{ programData.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- Kiri: Detail Program -->
        <div class="lg:col-span-7 flex flex-col gap-8">
          
          <!-- Hero Banner -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div class="aspect-video relative overflow-hidden">
              <img :src="programData.image" :alt="programData.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6">
                <span class="inline-block py-1 px-3 rounded-md bg-[#78CFA1] text-white font-bold text-xs mb-3 shadow-sm">
                  {{ programData.category }}
                </span>
                <h1 class="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md leading-tight">
                  {{ programData.title }}
                </h1>
              </div>
            </div>
            
            <!-- Info Bar -->
            <div class="p-6 md:p-8 bg-white">
              
              <!-- Progress -->
              <div class="mb-6">
                <div class="flex justify-between items-end mb-2">
                  <div>
                    <p class="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Terkumpul</p>
                    <span class="text-2xl font-bold text-[#1C92E2]">{{ formatCurrency(programData.collected) }}</span>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Target</p>
                    <span class="text-lg font-bold text-slate-700">{{ formatCurrency(programData.target) }}</span>
                  </div>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3 mb-2 overflow-hidden shadow-inner">
                  <div class="bg-gradient-to-r from-[#1C92E2] to-[#78CFA1] h-3 rounded-full transition-all duration-1000 relative" :style="`width: ${getPercentage(programData.collected, programData.target)}%`">
                    <!-- Striping effect -->
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InN0cmlwZXMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMNDAgMEg4MEw0MCA4MFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiIC8+PC9zdmc+')] opacity-20"></div>
                  </div>
                </div>
              </div>

              <!-- Metrics Grid -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100">
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-400 font-semibold uppercase">Status</span>
                  <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">{{ programData.status }}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-400 font-semibold uppercase">Kategori</span>
                  <span class="text-sm font-bold text-slate-800">{{ programData.category }}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-400 font-semibold uppercase">Min. Donasi</span>
                  <span class="text-sm font-bold text-slate-800">{{ formatCurrency(programData.minDonation) }}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-400 font-semibold uppercase">Tgl Dibuat</span>
                  <span class="text-sm font-bold text-slate-800">{{ programData.createdAt }}</span>
                </div>
              </div>

              <!-- Deskripsi -->
              <div class="mt-8 prose prose-slate max-w-none">
                <h3 class="text-xl font-bold text-slate-900 mb-4">Cerita Program</h3>
                <p class="text-slate-600 leading-relaxed text-base">{{ programData.desc }}</p>
                <p class="text-slate-600 leading-relaxed text-base mt-4">Bersama kita bisa mengembalikan senyum mereka dan membuktikan bahwa kepedulian itu nyata.</p>
              </div>

            </div>
          </div>
          
        </div>

        <!-- Kanan: Form Donasi -->
        <div class="lg:col-span-5 relative">
          <div class="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-28">
            <div class="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#78CFA1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <div>
                <h2 class="text-2xl font-extrabold text-slate-900">Donasi Sekarang</h2>
                <p class="text-sm text-slate-500 font-medium">Pilih nominal atau masukkan manual</p>
              </div>
            </div>

            <form @submit.prevent="handleCheckout" class="flex flex-col gap-6">
              
              <!-- Nominal Box -->
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-3">Pilih Paket Donasi</label>
                <div class="flex flex-wrap gap-2 mb-4">
                  <button v-for="preset in presetNominals" :key="preset.value" type="button"
                          @click="selectPreset(preset.value)"
                          class="px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-200 shadow-sm"
                          :class="form.amount === preset.value 
                            ? 'bg-[#1C92E2] text-white border-[#1C92E2] ring-2 ring-blue-500/20' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-[#1C92E2] hover:text-[#1C92E2]'">
                    {{ preset.label }}
                  </button>
                </div>
                
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">Rp</span>
                  <input v-model.number="form.amount" type="number" required min="10000"
                         class="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-xl font-extrabold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#78CFA1] focus:border-transparent transition-all shadow-inner"
                         placeholder="Nominal lainnya..." />
                </div>
              </div>

              <div class="space-y-4">
                <label class="block text-sm font-bold text-slate-700 mb-1">Informasi Donatur</label>
                
                <div>
                  <input v-model="form.name" type="text" required
                         class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#78CFA1] focus:bg-white transition-colors"
                         placeholder="Nama Lengkap" />
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <input v-model="form.phone" type="tel" required
                         class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#78CFA1] focus:bg-white transition-colors"
                         placeholder="Nomor WhatsApp" />
                         
                  <input v-model="form.email" type="email" required
                         class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#78CFA1] focus:bg-white transition-colors"
                         placeholder="Alamat Email" />
                </div>

                <div>
                  <input v-model="form.city" type="text"
                         class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#78CFA1] focus:bg-white transition-colors"
                         placeholder="Kota/Kabupaten Asal" />
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit" :disabled="isProcessing"
                      class="w-full mt-4 py-4 rounded-xl text-white font-extrabold text-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                      :class="isProcessing ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#78CFA1] hover:bg-[#63bc8c] hover:-translate-y-1 hover:shadow-green-500/25'">
                <template v-if="isProcessing">
                  <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </template>
                <template v-else>
                  Lanjutkan Pembayaran
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </template>
              </button>

              <p class="text-center text-xs font-medium text-slate-400 flex items-center justify-center gap-1.5 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Pembayaran Aman via Midtrans
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

