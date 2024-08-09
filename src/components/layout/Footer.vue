<template>
  <footer
    class="bg-[#244D4D] flex flex-col gap-20 w-full items-center justify-center text-[#EEEEEE] py-16"
  >
    <header class="flex flex-col gap-6 lg:flex-row justify-around w-full items-center">
      <h3
        class="font-normal flex items-center max-lg:text-center max-lg:justify-center text-5xl text-white tracking-tight leading-normal"
      >
        Star your business today <br />
        for $0+ state fees.
      </h3>
      <div class="flex flex-col md:flex-row gap-6">
        <button class="button bg-white text-[#244d4d]">Get started</button>
        <button class="button bg-[#3A5F5F] text-white">Contact Sales</button>
      </div>
    </header>
    <div class="border-[0.5px] border-gray-400/20 w-10/12"></div>
    <div class="flex flex-col justify-evenly w-full lg:flex-row items-center gap-10">
      <article class="flex flex-col gap-5 max-xl:text-center">
        <span class="font-noto text-xl font-bold hover:underline cursor-pointer tracking-tight"
          >furni.shop</span
        >
        <p class="max-w-60 text-sm">
          Optix seamlessly connects your members with the community, resources.
        </p>
        <div class="flex gap-5 justify-center items-end">
          <img src="/social/facebook-icon.png" alt="facebook" />
          <img src="/social/x-icon.png" alt="x" />
          <img src="/social/linkedin-icon.png" alt="linkedin" />
          <img src="/social/pinterest-icon.png" alt="pinterest" />
        </div>
      </article>
      <table class="text-sm my-table max-md:hidden">
        <tr>
          <th>Entity types</th>
          <th>Services</th>
          <th>Resources</th>
          <th>Support</th>
        </tr>
        <tr>
          <td>Kowleadge base</td>
          <td>Contact Us</td>
          <td>Pricing</td>
          <td>Contact</td>
        </tr>
        <tr>
          <td>Segurity</td>
          <td>Press</td>
          <td>FAQ</td>
          <td>Affiliates</td>
        </tr>
        <tr>
          <td>Privacy Plicy</td>
          <td>Payrool</td>
          <td>Contact Support</td>
          <td>Sitemap</td>
        </tr>
        <tr>
          <td>About Us</td>
          <td>Legal</td>
          <td>API</td>
          <td>Trust & Safety</td>
        </tr>
      </table>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style>
.my-table {
  border-collapse: separate;
  border-spacing: 50px 10px; /* Ajusta la separación entre celdas */
}

.my-table th,
.my-table td {
  text-align: left;
}

.button {
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
}
</style>
