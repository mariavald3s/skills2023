<template>
    <div class="text-[#0B0C10] bg-[#C4C4C4] rounded-lg p-4 overflow-hidden m-3 drop-shadow-md" v-if="cardHidden == false">
        <p>City: {{ city }}</p>
        <p>Region: {{ region }}</p>
        <p>Street: {{ street }}</p>
        <p>Postal Code: {{ postCode }}</p>
        <p>Country: {{ country }}</p>
        <p>Open Daily: {{ open }}</p>
        <div>
          <div @click="deleteReview" class="bg-red-500 text-[#E6E6E6] m-2 flex justify-center p-2 rounded hover:bg-red-600">Delete the Location</div>
        </div>
    </div>
</template>

<script>
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
    props: ["city", "street", "country", "postCode", "open", "region"],
    data() {
    return {
      cardHidden: false,
    }
  },
    methods: {
    async deleteReview () {
      await deleteDoc(doc(db, "locations", (this.street)));
      // location.reload();
      this.cardHidden = true;
    }
  }
}
</script>