<template>
  <header class="bg-[#18181A] relative h-[650px] overflow-hidden">
    <img
    v-if="windowWidth > 1100"
      src="../assets/Products/Decorations/20221018_DavidAndrews_Georgetown_Halloween_Decorations_DLA02203_3000.webp"
      alt=""
      class="object-cover opacity-40"
    />
    <div
      class="absolute left-[57%] top-[57%] -translate-x-1/2 -translate-y-1/2"
    >
      <p
        class="text-4xl md:text-8xl drop-shadow font-bold text-[#E6E6E6] uppercase pb-4"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        About Spooky Popups
      </p>
    </div>
  </header>
  <div class="bg-[#E6E6E6]">
    <h1 class="text-4xl pl-2 md:pl-0 pt-6 font-bold md:text-center uppercase">What We Do</h1>
    <div class="md:flex justify-center p-2">
      <img
        src="../assets/Products/Decorations/Screenshot-2022-08-09-at-14.17.41-d27baaf.png"
        alt=""
        class="w-3/4 md:w-1/2 rounded mr-2 ml-6 my-8"
      />

      <p class="self-center px-6">
        We aim to bring our customers top quality Halloween gear at a low price,
        we can't be bothered with a store all year long when all you need us for
        is 1 month. To help keep costs low we'll take over any abandoned or
        vacant space starting on October 1st for just over a month to bring our
        customers the Halloween gear they need, when they need it, for amazing
        prices.
        <br />
        <br />
        After November 2nd, we are gone but we'll be back again on October 1st
        the following year to spook people all over again!
      </p>
    </div>

    <div class="bg-[#252528] p-2">
      <div class="bg-[#E6E6E6] m-6 rounded drop-shadow-lg" data-aos="zoom-out">
        <p class="p-2 text-4xl font-bold flex justify-center uppercase">
          Why Are We Better
        </p>
        <div class="md:flex flex-row-reverse p-2 justify-around">
          <div class="rounded overflow-hidden h-1/3 p-2">
            <img src="../assets/Products/Decorations/halloween-decorations-1180227672-2000-d825f6b71be745729e98954328664895.jpg" alt="" class="w-[2000px]" />
          </div>

          <ul class="self-center text-lg">
            <li class="flex p-3">
              <img
                src="../assets/check.png"
                alt=""
                class="h-5 self-center pr-4"
              />
              <p>
                We keep our costs low and pass those onto the customers!  When you shop with us you can be sure that the spooky deals you see are the best around!  No need to shop 
around, we've done that for you and rest assured you won't find our goods at a better price anywhere!

              </p>
            </li>
            <li class="flex p-3">
              <img
                src="../assets/check.png"
                alt=""
                class="h-5 self-center pr-4"
              />
              <p>
                We are family friendly!  Halloween is for everyone!  From young children to older adults, our store stocks great spooky products to meet all ages!

              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-6 px-4">
      <p class="flex justify-center text-4xl font-bold pb-4 uppercase">
        What About Refunds
      </p>
      <div class="flex justify-evenly text-center">
        <p class="text-lg font-bold pb-2">Because we know our Halloween offerings are the best around in both quality and price, every sale is final.</p>
      </div>
    </div>
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
