<template>
  <section
    class="bg-[#F4F6F6] flex relative flex-col w-11/12 min-h-[784px] items-center rounded-2xl p-8"
  >
    <img src="/Mask.png" alt="" class="absolute top-0 left-0 h-[784px] object-fill max-md:hidden" />
    <div class="flex flex-col relative items-center justify-center grow gap-4 md:px-5 w-max">
      <h2
        class="font-noto font-semibold flex items-center text-center max-lg:justify-center max-[300px]:text-xl text-3xl md:text-5xl text-primary"
      >
        What our happy <br />
        client say
      </h2>
      <p
        class="text-base text-secondary text-wrap max-w-64 max-[300px]:max-w-32 md:max-w-[450px] text-center"
      >
        File storage made easy – including powerful features you won’t find anywhere else. Whether
        you’re.
      </p>
      <img
        src="/archive-icon.png"
        alt=""
        class="absolute -right-24 max-md:top-4 md:-right-32 lg:-right-40 top-1/2 max-[350px]:hidden"
      />
    </div>

    <div class="flex flex-col md:flex-row gap-20 items-start justify-evenly p-4 lg:p-16">
      <div class="relative bg-slate-600 h-max">
        <img src="/Client.png" alt="" class="h-[400px] object-cover" />
        <img src="/star-icon.png" alt="" class="absolute top-16 -left-16" />
      </div>
      <article class="flex flex-col max-w-[600px] gap-8">
        <span
          class="text-primary font-noto text-xl font-bold hover:underline cursor-pointer tracking-tight"
          >furni.shop</span
        >
        <p class="text-[#5E7388] italic font-medium max-w-[300px]">
          File storage made easy – including powerful features you won’t find anywhere else. Whether
          you’re.
        </p>
        <span class="flex flex-col gap-1">
          <h5 class="font-bold text-lg text-accent">Larry Diamond</h5>
          <small class="text-muted">Chief Executive Officer</small>
        </span>
        <div class="flex gap-5">
          <button class="button-arrow">🠔</button>
          <button class="button-arrow">🠖</button>
        </div>
      </article>
    </div>
    <img src="/Ellipse.png" alt="" class="bottom-24 max-md:hidden lg:left-36 absolute" />
  </section>
</template>

<script>
export default {
  name: 'TestimonialsComponent'
}
</script>

<style>
.button-arrow {
  background-color: #ffffff;
  color: #152137;

  font-weight: 900;
  padding: 8px 14px;

  border-radius: 100%;
}
</style>
