<template>
    <header class="bg-[#18181A] relative h-[650px] overflow-hidden">
        <img v-if="windowWidth > 1100" src="../assets/Products/Decorations/unnamed_ec07e4bb-4315-4fd2-85fc-af27897bd3a7_1000x.jpg" alt="" class="w-full object-cover opacity-40"/>
        <div class="absolute start-1/4 md:top-1/4 end-1/4 bottom-1/4" data-aos="fade-right" data-aos-duration="2000">
            <p class="text-4xl md:text-8xl drop-shadow font-bold text-[#E6E6E6] uppercase pb-4">
                Spooky popups halloween store
            </p>
           <RouterLink to="/locations">
               <div class="py-4 px-6 bg-[#EB6123] drop-shadow-lg font-bold text-lg text-[#E6E6E6] flex justify-between rounded hover:bg-[#ce4d16] transition duration-300 ease-in-out">
                   <p>Our Locations</p>
                   <p> ></p>
               </div>

           </RouterLink>
        
        </div>
      
    </header>
    <div class="bg-[#252528] p-6">
    <RouterLink
      to="/contact-us"
      class=""
    >
      <div class="p-6 border-[#EB6123] border-4 rounded-lg hover:bg-[#EB6123] transition duration-300 ease-in-out">
        <p class="text-center text-xl font-bold text-[#E6E6E6]">
          Questions? Feel free to contact us!
        </p>
      </div>
    </RouterLink>

    <div class="mt-6 p-2 bg-[#5E32BA] grid justify-items-center rounded text-[#E6E6E6]" data-aos="fade-up" data-aos-duration="3500">
        <img src="../assets/fiveStar.png" class="max-h-[50px]" alt="">
        <p class="px-10 py-2">"I had the best Halloween ever thanks to this store! Their selection of costumes and decorations is unmatched, and the staff was incredibly helpful in helping me find the perfect outfit. I got so many compliments on my costume and can't wait to come back next year!"</p>
        <p>- Sarah T.</p>
    </div>
    <h1 class="text-3xl font-bold text-[#E6E6E6] text-center pt-7" data-aos="zoom-in" data-aos-duration="3500">Popping up to provide you with top quality halloween gear!</h1>

  </div>

</template>

<script>

export default {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted () {
    this.windowWidth = window.innerWidth;
  }

};
</script>
