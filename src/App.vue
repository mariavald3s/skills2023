<script>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
import Footer from "./components/Footer.vue";
export default {
  components: { Footer },
}

</script>

<template>
  <header>
      <nav class="p-6 bg-[#18181A] text-[#E6E6E6] font-[32px] font-[600] drop-shadow-lg lg:flex flex-row-reverse justify-between fixed w-screen z-20">
        <div class="self-center p-2 lg:p-0">
        <RouterLink to="/" class="px-2 content-center hover:text-[#b2b2b2]">Home</RouterLink>
        <RouterLink to="/testimonials" class="px-2 hover:text-[#b2b2b2]">Testimonials</RouterLink>
        <RouterLink to="/about-us" class="px-2 hover:text-[#b2b2b2]">About Us</RouterLink>
        <RouterLink to="/contact-us" class="px-2 hover:text-[#b2b2b2]">Contact Us</RouterLink>
        <RouterLink to="/products" class="px-2 hover:text-[#b2b2b2]">Products</RouterLink>
        <RouterLink to="/login" class="px-2 hover:text-[#b2b2b2]">Login</RouterLink>
        <RouterLink to="/locations" class="mx-2 drop-shadow-lg transition duration-300 ease-in-out text-[#E6E6E6] bg-[#EB6123] p-2 rounded hover:bg-[#ce4d16]">Our Locations</RouterLink>
        </div>
        <div class="flex">
          <RouterLink to="/" class="px-2 justify-self-end">
            <div class="bg-[#E6E6E6] rounded p-1">

              <img src="./assets/Logo.png" class="w-[100px]" alt="logo">
            </div>
          </RouterLink>
        </div>
      </nav>
  </header>

  <router-view></router-view>

  <Footer/>
</template>

