<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-14">
    <div v-for="(item, index) in data" :key="index" class="flex flex-col gap-8">
      <span class="font-noto font-black text-4xl text-primary">{{ item.id }}.</span>
      <h3 class="text-2xl font-bold text-primary">{{ item.title }}</h3>
      <p class="text-secondary text-base max-w-[270px]">{{ item.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutCardComponent',
  setup() {
    return {
      data: [
        {
          id: 1,
          title: 'Who We Are',
          description: 'You get a 2-week free trial to kick the Smarty tries. We want you to.'
        },
        {
          id: 2,
          title: 'What Do We Do',
          description: 'We give you a free course that guides you through the process.'
        },
        {
          id: 3,
          title: 'How Do We Help',
          description: 'Use our multimedia lecturers, videos, and coaching sessions.'
        },
        {
          id: 4,
          title: 'Create success story',
          description: 'With access to online learning resources anyone can transfrm.'
        }
      ]
    }
  }
}
</script>
