<template>
    <div
    class="text-[#0B0C10] bg-[#C4C4C4] rounded-lg p-4 overflow-hidden m-3 drop-shadow-md" v-if="cardHidden == false"
  >
  <div class="flex flex-col justify-center">
      <p class="p-2 font-bold self-center">
       {{ firstName }} {{ lastName }}
      </p>
      <p class="self-center">Email: {{ email }}</p>
      <div class="self-center p-1">

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
    <div>
      <div @click="deleteReview" class="bg-red-500 text-[#E6E6E6] m-2 flex justify-center p-2 rounded hover:bg-red-600">Delete the Review</div>
    </div>
    </div>
</template>

<script>
import { doc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  query, 
  addDoc
} from "firebase/firestore";

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
  props: ["firstName", "lastName", "descript", "stars", "email"],
  data() {
    return {
      cardHidden: false
    };
  },
  async mounted() {
    
  },
  methods: {
    async deleteReview () {
      await deleteDoc(doc(db, "reviews", (this.firstName + this.lastName + this.stars)));
      // location.reload();
      this.cardHidden = true;
    }
  }
};
</script>
