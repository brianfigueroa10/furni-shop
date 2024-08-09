<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarHeader from '@/components/layout/Navbar.vue'
import FooterSection from '@/components/layout/Footer.vue'
</script>

<template>
  <NavbarHeader />
  <main class="flex items-center justify-center flex-col w-full max-w-[1800px] gap-16">
    <RouterView />
    <FooterSection />
  </main>
</template>
