<template>
  <header class="bg-[#18181A] relative h-[650px] overflow-hidden">
    <img
    v-if="windowWidth > 1100"
      src="../assets/Products/Decorations/halloween-house-new-west-1.jpg"
      alt=""
      class="object-cover opacity-40 w-full"
    />
    <div class="absolute left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2">
      <p class="text-4xl md:text-7xl drop-shadow font-bold text-[#E6E6E6] uppercase pb-4" data-aos="fade-right" data-aos-duration="2000">
        Testimonials
      </p>
    </div>
  </header>
  <div class="bg-[#252528] ">

    <p class="bg-[#252528] text-[#E6E6E6] font-bold text-2xl text-center p-2">Here are some testimonials from some happy customers!  Be sure to like us on facebook, twitter and instagram.</p>
    <div class="flex px-2 justify-center">
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

            <div class="grid md:grid-cols-3">
                <ReviewCards
                v-for="review in reviews"
                :key="review.id"
                :firstName="review.firstName"
                :lastName="review.lastName"
                :descript="review.descript"
                :stars="review.stars"
                />
                
            </div>
        </div>
        </template>

<script>
import ReviewCards from "../components/ReviewCards.vue";

// Import the functions you need from the SDKs you need
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
  components: { ReviewCards },
  data() {
    return {
      reviews: [],
      windowWidth: window.innerWidth
    };
  },
  methods: {
    async createReview() {
      // 'users' collection reference
      if (this.descript == undefined) {
        
      }

      if (this.name == undefined) {

      }

      if (this.stars == undefined) {

      }

      const colRef = collection(db, 'reviews')
      // data to send
      const dataObj = {
        // firstName: "maria",
        // email: "hello@gmail.com",
        descript: this.descript,
        id: this.name + this.stars,
        name: this.name,
        stars: this.stars,
      }
      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)
      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)

      location.reload();
    }
  },
  async mounted() {

    this.windowWidth = window.innerWidth;
    const querySnap = await getDocs(query(collection(db, "reviews")));
    // add each doc to 'countries' array
    querySnap.forEach((doc) => {
      this.reviews.push(doc.data());
    });
  },
};
</script>
