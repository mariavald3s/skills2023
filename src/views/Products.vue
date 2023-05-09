<template>
    <header class="bg-[#18181A] relative h-[650px] overflow-hidden">
    <img
    v-if="windowWidth > 1100"
      src="../assets/Products/Decorations/halloween-lw-inflatable-decorations.jpg"
      alt=""
      class="object-cover opacity-40 w-full"
    />
    <div class="absolute left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2">
      <p class="text-4xl md:text-7xl drop-shadow font-bold text-[#E6E6E6] uppercase pb-4" data-aos="fade-right" data-aos-duration="2000">
        Products
      </p>
    </div>
  </header>
  <div class="bg-[#252528]">
    <ul class="flex flex-col lg:flex-row justify-center p-3 text-[#e6e6e6] font-bold">
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Accessories">Accessories</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Animatronics">Animatronics</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Candy and Treats">Candy And Treats</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Costumes">Costumes</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Decorations">Decorations</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Makeup and Prostetics">Makeup and Prostetics</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Party Supplies">Party Supplies</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Pet Costumes">Pet Costumes</a></li>
      <li class="p-2 m-1 bg-[#eb6123] rounded hover:bg-[#ce4d16]"><a href="#Wigs and Hairpieces">Wigs and Hairpieces</a></li>
    </ul>
    <ProdCategory v-for="category in categories"
                :key="category"
                :name="category"

    />

  </div>

</template>

<script>
import ProductCards from "../components/ProductCards.vue";
import ProdCategory from "../components/ProdCategories.vue";

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
  data() {
    return {
      products: [],
      categories: [ 'Accessories', 'Animatronics', 'Candy and Treats', 'Costumes', 'Decorations',
                    'Makeup and Prostetics', 'Party Supplies', 'Pet Costumes', 'Wigs and Hairpieces' ],
      windowWidth: window.innerWidth
    };
  },
  components: { ProductCards , ProdCategory },
  async mounted() {
    this.windowWidth = window.innerWidth;
    const querySnap = await getDocs(query(collection(db, "products")));
    // add each doc to 'countries' array
    
    querySnap.forEach((doc) => {
      this.products.push(doc.data());
    });
  },
}
</script>