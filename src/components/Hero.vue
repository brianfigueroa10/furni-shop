<script>
export default {
  name: 'HeroSection'
}
</script>

<template>
  <section
    class="flex flex-col py-6 h-[600px] justify-center max-xl:items-center w-full lg:w-11/12 relative"
  >
    <div
      class="flex flex-col justify-center gap-5 z-10 bg-white/70 lg:bg-white/40 backdrop-blur-md lg:backdrop-blur-lg w-full md:w-[650px] h-[470px] items-center"
    >
      <img
        src="/hero/DOTS-hero.png"
        alt="dots hero"
        class="absolute left-1/4 -top-16 w-20 h-24 z-50 object-contain"
      />
      <h1
        class="font-noto max-[380px]:text-3xl max-xl:text-center font-bold text-5xl md:text-6xl text-primary"
      >
        We Help You <br />Make Modern <br />Interior
      </h1>
      <div class="md:w-[418px]">
        <p class="text-balance w-11/12 lg:w-[326px] max-lg:text-center lg:text-secondary">
          We will help you to make an elegant and luxurious interior designed by professional
          interior designer.
        </p>
      </div>
    </div>
    <img
      src="/hero/hero.png"
      alt="hero img"
      class="lg:w-8/12 absolute h-[600px] top-0 right-0 object-cover"
    />
  </section>
</template>
