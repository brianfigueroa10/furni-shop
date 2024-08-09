<script>
export default {
  name: 'AboutSection'
}
</script>
<script setup>
import AboutCardComponent from '@/components/AboutCard.vue'
</script>

<template>
  <section class="flex flex-col items-center w-full px-8 lg:px-28 gap-20" id="about">
    <div class="flex flex-col md:flex-row justify-between items-center w-full gap-8">
      <div class="flex flex-col gap-6">
        <h2
          class="font-noto font-normal flex items-center max-lg:justify-center text-4xl text-primary"
        >
          About Us
        </h2>
        <p class="lg:w-96 w-64 text-base max-lg:text-center text-secondary max-[300px]:max-w-32">
          At Besnik Consultancy, we take pride in our values – service, integrity, and excellence.
        </p>
      </div>
      <button
        class="text-[#5F5F64] bg-[#F4F6F6] font-semibold px-8 py-4 rounded-md shadow-2xl shadow-[#244D4D]"
      >
        Learn More
      </button>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-11 justify-between w-full">
      <AboutCardComponent />
      <img src="/aboutImage.png" alt="About Us" />
    </div>
  </section>
</template>
