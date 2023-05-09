<template>
  <div class="bg-[#18181A] text-[#E6E6E6] lg:flex justify-between p-3">
    <div class="text-lg text-[#E6E6E6] flex flex-col pt-3">
      <RouterLink to="/" class="px-2 hover:text-[#b2b2b2]">Home</RouterLink>
      <RouterLink to="/testimonials" class="px-2 hover:text-[#b2b2b2]">Testimonials</RouterLink>
        <RouterLink to="/about-us" class="px-2 hover:text-[#b2b2b2]">About Us</RouterLink>
        <RouterLink to="/contact-us" class="px-2 hover:text-[#b2b2b2]">Contact Us</RouterLink>
        <RouterLink to="/products" class="px-2 hover:text-[#b2b2b2]">Products</RouterLink>
        <RouterLink to="/login" class="px-2 hover:text-[#b2b2b2]">Login</RouterLink>
      
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.8967961593241!2d-112.79366236107198!3d49.71468749286527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8711fc31fbe1%3A0xa844b36ef6f583da!2sLethbridge%2C%20AB%20T1H%205V1!5e0!3m2!1sen!2sca!4v1683213490302!5m2!1sen!2sca" width="350" height="200" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="text-right">
      <p class="text-[#EB6123] font-bold">Main Local</p>
      <p>
        3120 12 AVE North
        <br />
        LETHBRIDGE AB T1H 5V1
      </p>
      <p class="text-[#EB6123] font-bold">Our Contacts</p>
      <p>
        info@SpookyPopUps.com <br />
        403.555.0635
      </p>
      <div class="flex justify-end p-1">
        <p class="text-[#EB6123] font-bold">Check us out on social media!</p>
        <div class="flex px-2">
          <a href="https://instagram.com"
            ><img
              src="../assets/instagram-free-icon-font.png"
              alt="instagram"
              class="px-1"
          /></a>
          <a href="https://twitter.com"
            ><img
              src="../assets/twitter-free-icon-font.png"
              alt="twitter"
              class="px-1"
          /></a>
          <a href="https://youtube.com"
            ><img
              src="../assets/youtube-free-icon-font.png"
              alt="youtube"
              class="pl-1"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
