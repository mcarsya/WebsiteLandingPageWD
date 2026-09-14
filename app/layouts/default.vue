<template>
  <div class="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-800">
    <AppNavbar />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <DonationCTASection />
    <AppFooter />
    <div class="fixed bottom-6 right-6 z-50">
      <DonationWidget />
    </div>
  </div>
</template>

