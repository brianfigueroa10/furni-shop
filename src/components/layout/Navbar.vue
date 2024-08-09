<script>
export default {
  name: 'NavbarHeader',
  data() {
    return {
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '#about' },
        { name: 'products', path: '#products' },
        { name: 'Contact', path: '#contact' }
      ]
    }
  }
}
</script>

<template>
  <header class="flex justify-between p-7 w-full px-11">
    <h1
      class="text-primary font-noto text-xl font-bold hover:underline cursor-pointer tracking-tight"
    >
      furni.shop
    </h1>
    <nav class="flex items-center justify-center gap-10 text-base max-md:hidden">
      <ul v-for="(link, index) in links" :key="index">
        <a :href="link.path">{{ link.name }}</a>
      </ul>
    </nav>
    <img src="/search-icon.png" alt="search icon" class="size-[18px]" />
  </header>
</template>
