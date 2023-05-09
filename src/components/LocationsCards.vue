<template>
  <div class="bg-[#252528] m-2 p-2 rounded text-[#E6E6E6]">
    <p class="font-bold text-xl">{{ city }}</p>
    <p>Region: {{ region }}</p>
    <p>Street: {{ street }}</p>
    <p>Postal Code: {{ postCode }}</p>
    <p>Country: {{ country }}</p>
    <p>Open Daily: {{ open }}</p>


    <iframe
  width="350"
  height="450"
  style="border: 0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  :src="url"
  alt="google map of location"
>
</iframe>

<!-- <iframe
  width="350"
  height="450"
  style="border: 0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.4227898848794!2d-114.0951545235484!3d51.08220447171967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f7f61acc731%3A0x20f60c25b33f069!2s728%20Northmount%20Dr%20NW%2C%20Calgary%2C%20AB%20T2K%203K2!5e0!3m2!1sen!2sca!4v1683214174312!5m2!1sen!2sca'

  alt="google map of location"
>
   
</iframe> -->
    <!-- no api key -->
    
    <!-- 
        <iframe
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="
        'https://www.google.com/maps/embed/v1/place?key=AIzaSyDCVciONqSswSrWRrzqUZYOAp7lW_M-VTk&q=' +
        street
      "
    >
    </iframe> -->
  </div>
</template>

<script>
export default {
  props: ["city", "street", "country", "postCode", "open", "region", "url"],
};
</script>
