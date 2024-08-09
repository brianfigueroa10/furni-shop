<template>
  <section
    class="flex flex-col lg:flex-row w-full justify-center gap-6 items-center lg:items-end px-4 lg:px-28"
  >
    <div
      class="flex flex-col max-lg:items-center max-lg:justify-center max-lg:text-center gap-6 w-full lg:w-1/3"
    >
      <div class="flex flex-col max-lg:text-center">
        <h2
          class="font-noto font-bold flex items-center max-lg:justify-center text-4xl text-primary"
        >
          Hot
          <img src="/fire.png" alt="fire icon" class="w-12" /> <br />
        </h2>
        <h2 class="font-noto font-bold text-4xl text-primary">deals for you</h2>
      </div>
      <p class="text-base text-secondary w-2/3">
        Online shopping for retail sales direct to consumers
      </p>
    </div>
    <div
      class="flex gap-8 flex-col lg:flex-row lg:w-2/3 items-center justify-center max-lg:text-center max-lg:items-center lg:justify-between"
    >
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex flex-col gap-2 md:w-56 max-lg:items-center"
      >
        <img src="/bellow-icon.png" alt="bellow-icon" class="w-8 object-contain" />
        <h2 class="font-bold text-[16px] text-accent">{{ item.title }}</h2>
        <p class="text-base text-secondary text-balance">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BellowComponent',
  setup() {
    return {
      data: [
        {
          title: '1.5% cashback',
          description: 'Online shopping for retail sales direct to consumers'
        },
        {
          title: '30-day terms',
          description: 'Online shopping for retail sales direct to consumers'
        },
        { title: 'Save Money', description: 'Online shopping for retail sales direct to consumers' }
      ]
    }
  }
}
</script>
