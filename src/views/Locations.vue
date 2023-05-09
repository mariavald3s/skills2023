<template>
    <header class="bg-[#18181A] relative h-[650px] overflow-hidden">
    <img
    v-if="windowWidth > 1100"
      src="../assets/Products/Decorations/d100d8ab-b1d8-4d14-8bd2-304d389a7638-USATSI_17065675.webp"
      alt=""
      class="object-cover opacity-40 w-full"
    />
    <div class="absolute left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2">
      <p class="text-4xl md:text-7xl drop-shadow font-bold text-[#E6E6E6] uppercase pb-4" data-aos="fade-right" data-aos-duration="2000">
        Locations
      </p>
    </div>
  </header>

  <div class="grid lg:grid-cols-3">
    <LocationsCards v-for="location in locations"
                :key="location.street"
                :city="location.city"
                :street="location.street"
                :country="location.country"
                :postCode="location.postCode"
                :open="location.open"
                :region="location.region"
                data-aos="fade-up" data-aos-duration="3500"
                />
  </div>

</template>

<script>
import LocationsCards from "../components/LocationsCards.vue";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  query,
  doc, 
  addDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCVciONqSswSrWRrzqUZYOAp7lW_M-VTk",
  authDomain: "skills-21548.firebaseapp.com",
  //   databaseURL: "https://skills-21548-default-rtdb.firebaseio.com",
  projectId: "skills-21548",
  storageBucket: "skills-21548.appspot.com",
  messagingSenderId: "592924228427",
  appId: "1:592924228427:web:148c548cc432e651cc06ce",
  measurementId: "G-D98DS0JGDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  components: { LocationsCards },
  data() {
    return {
      locations: [],
      windowWidth: window.innerWidth
    };
  },
  async mounted() {
    this.windowWidth = window.innerWidth;
    const querySnap = await getDocs(query(collection(db, "locations")));
    // add each doc to 'countries' array
    querySnap.forEach((doc) => {
      this.locations.push(doc.data());
    });
  },
   

}
</script>