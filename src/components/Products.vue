<template>
  <section class="flex flex-col gap-9 w-full px-28" id="products">
    <div class="flex items-center justify-between flex-col gap-3 md:flex-row">
      <h2
        class="font-noto font-normal flex items-center max-lg:justify-center text-4xl text-primary"
      >
        Products
      </h2>
      <div class="flex gap-2 items-center">
        <span class="text-base cursor-pointer">See All</span>
        <div>
          <img src="/Arrow.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-9 py-5">
      <span
        :class="selectedCategory === null ? 'text-black font-semibold' : 'text-muted'"
        @click="filterByCategory(null)"
        class="cursor-pointer"
        >All</span
      >
      <div
        v-for="category in categories"
        :key="category"
        :class="selectedCategory === category ? 'text-black font-semibold' : 'text-muted'"
        @click="filterByCategory(category)"
        class="flex cursor-pointer"
      >
        <span>
          {{ category }}
        </span>
      </div>
    </div>
    <article
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 lg:gap-10 w-full mt-14 place-items-center"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="flex flex-col gap-7 lg:w-[300px] h-[419px] relative"
      >
        <div
          class="flex flex-col h-[310px] bg-[#F4F6F6] rounded-md items-center pt-14 gap-4 min-w-max sm:min-w-[300px]"
        >
          <img
            src="/shopping-cart.png"
            alt="cart"
            class="absolute bg-[#D6C4B8] -top-3 right-12 w-8 rounded-full p-1.5 object-cover cursor-pointer"
          />
          <h3 class="text-accent text-2xl tracking-tight cursor-pointer">
            {{ product.name }}
          </h3>
          <div class="flex gap-6">
            <p class="text-accent text-base font-semibold">${{ product.price.toFixed(2) }}</p>
            <p v-if="product.priceBefore" class="text-muted text-sm line-through font-light">
              ${{ product.priceBefore.toFixed(2) }}
            </p>
          </div>
        </div>
        <img
          :src="product.img"
          :alt="product.name"
          class="w-48 h-64 object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2 hover:scale-105 ease-in-out transition-all cursor-pointer duration-100"
        />
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ProductsList',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Hand Base Lamp',
          category: 'Light',
          price: 35.0,
          priceBefore: 55.0,
          img: '/products/Image.png'
        },
        {
          id: 2,
          name: 'Vintage Chair',
          category: 'Chair',
          price: 65.0,
          priceBefore: 95.0,
          img: '/products/Image(1).png'
        },
        {
          id: 3,
          name: 'Lamp Tool',
          category: 'Light',
          price: 35.0,
          priceBefore: 45.0,
          img: '/products/Image(2).png'
        },
        {
          id: 4,
          name: 'Stylishh Chair',
          category: 'Chair',

          price: 45.0,
          priceBefore: 55.0,
          img: '/products/Image(3).png'
        },
        {
          id: 5,
          name: 'Vintage Chair',
          category: 'Chair',
          price: 65.0,
          priceBefore: 95.0,
          img: '/products/Image(4).png'
        },
        {
          id: 6,
          name: 'Stackable Chair',
          category: 'Chair',
          price: 87.0,
          priceBefore: 97.0,
          img: '/products/Image(5).png'
        }
      ],
      categories: [],
      selectedCategory: null
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory) {
        return this.products.filter((product) => product.category === this.selectedCategory)
      }
      return this.products
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category
    }
  },
  created() {
    // Extraer categorías únicas de los productos
    this.categories = [...new Set(this.products.map((product) => product.category))]
  }
}
</script>
