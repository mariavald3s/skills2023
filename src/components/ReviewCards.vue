<template>
    <div
    class="text-[#E6E6E6] bg-[#5E32BA] rounded-lg overflow-hidden m-3 drop-shadow-md"
    data-aos="zoom-in" data-aos-duration="3500"
  >
  <div class="flex flex-col justify-center">
    <p class="p-2 font-bold text-center uppercase">
       {{ firstName }} {{ lastName }}
      </p>
      <div class="flex justify-center">

        <img v-if="stars == 5" src="../assets/fiveStar.png" alt="five stars" class="w-[110px]">
        <img v-if="stars == 4" src="../assets/fourStar.png" alt="four stars" class="w-[110px]">
        <img v-if="stars == 3" src="../assets/threeStar.png" alt="three stars" class="w-[110px]">
        <img v-if="stars == 2" src="../assets/twoStar.png" alt="two stars" class="w-[110px]">
        <img v-if="stars == 1" src="../assets/oneStar.png" alt="one stars" class="w-[110px]">
      </div>

  </div>

    <div class="px-5 pb-3 flex justify-center flex-col">
      <p class="flex justify-center">{{ descript }}</p>
    </div>
    </div>
</template>

<script>
export default {
  props: ["firstName", "lastName", "descript", "stars", "email"],
  data() {
    return {};
  },
  async mounted() {
    
  },
};
</script>
