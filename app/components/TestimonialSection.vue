<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ASSETS } from '~/constants/assets';
import gsap from 'gsap';

const sectionRef = ref(null);
const cardsRef = ref([]);

const testimonials = [
  {
    quote: "Bantuan modal dari Bapindo tidak hanya menyelamatkan warung kecil saya, tapi juga memberikan harapan baru bagi keluarga kami untuk bisa mandiri.",
    name: "Ibu Fatimah",
    role: "Penerima Manfaat Bapindo",
    avatar: ASSETS.AVATAR_TESTI_1
  },
  {
    quote: "Menjadi relawan di Worthydays adalah pengalaman luar biasa. Melihat langsung senyum mereka yang terbantu membuat semua lelah terbayarkan.",
    name: "Ahmad Rizki",
    role: "Relawan Worthydays",
    avatar: ASSETS.AVATAR_TESTI_2
  }
];

onMounted(() => {
  gsap.fromTo(cardsRef.value,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' } }
  );
});
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4 md:px-6 relative">
      <!-- Decor -->
      <svg class="absolute top-0 left-0 text-gray-200 w-32 h-32 -translate-x-10 -translate-y-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12">
        <div v-for="(testi, index) in testimonials" :key="index" ref="cardsRef" class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative">
          <div class="flex items-center gap-4 mb-8">
            <img :src="testi.avatar" :alt="testi.name" class="w-16 h-16 rounded-full object-cover ring-4 ring-gray-50" />
            <div>
              <h4 class="font-bold text-gray-900 text-lg">{{ testi.name }}</h4>
              <p class="text-sm text-[#1C92E2] font-medium">{{ testi.role }}</p>
            </div>
          </div>
          <p class="text-gray-600 text-lg md:text-xl leading-relaxed italic">
            "{{ testi.quote }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

