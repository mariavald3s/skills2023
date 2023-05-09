<template>

<div :id="name">

    <p class="text-2xl font-bold text-[#E6E6E6] p-4 text-center">{{ name }}</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-5">
        <ProductCards v-for="product in products"
        :key="product.id"
        :name="product.name"
        :descript="product.descript"
        :img="product.img"
        :category="product.category"
        :categorySpecify="name"
        />
        
    </div>
</div>
</template>
<script>
import ProductCards from "./ProductCards.vue";

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
    };
  },
  props: [ 'name' ],
  components: { ProductCards },
  async mounted() {
    const querySnap = await getDocs(query(collection(db, "products")));
    // add each doc to 'countries' array
    
    querySnap.forEach((doc) => {
      this.products.push(doc.data());
    });
  },
}
</script>