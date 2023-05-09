<template>
  <header class="bg-[#18181A] relative h-[650px] overflow-hidden">
    <img v-if="windowWidth > 1100"
      src="../assets/Products/Decorations/halloween-decorated-front-door-with-various-size-and-shape-pumpkins-and-skeletons--front-porch-decorated-for-the-halloween-season--104253932.jpg"
      alt=""
      class="object-cover opacity-40"
    />
    <div class="absolute left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2">
      <p
        class="text-4xl md:text-7xl drop-shadow font-bold text-[#E6E6E6] uppercase pb-4"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        Contact Us
      </p>
    </div>
  </header>
  <div class="md:grid grid-cols-2">
    <div>

      <div class="bg-[#252528] text-[#E6E6E6] p-4 m-4 rounded flex flex-col" v-if="submittedFranch == false">
        <p class="font-bold text-2xl p-1 self-center uppercase">Franchise Information</p>
        <!-- <div v-if="submittedFranch == false"> -->
          <div class="self-center">
            <label for="firstNameFranch">First Name:</label> <br />
            <input
            type="text"
            v-model="firstNameFranch"
            placeholder="ex. Jane"
            required
            class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800"
            />
          </div >
          <div class="self-center">
            <label for="lastNameFranch">Last Name:</label> <br />
            <input
            type="text"
            v-model="lastNameFranch"
            placeholder="ex. Doe"
            required
            class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800"
            />
          </div>
          <div class="self-center">
            <label for="emailFranch">Email:</label> <br />
            <input
            type="email"
            v-model="emailFranch"
            placeholder="ex. janed@gmail.com"
            required
            class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800"
            />
          </div>
          <div class="self-center">
            <label for="findOut">How did you find out about <br> SPOOKY POPUPS:</label> <br />
            <select v-model="findOut" class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800" placeholder="Please select one">
              <option disabled value="">Please select one</option>
              <option value="radio">Radio</option>
              <option value="television">Television</option>
              <option value="word of mouth">Word of Mouth</option>
              <option value="voice in head">A Voice in my Head</option>
            </select>
          </div>
          <div class="self-center">
            <label for="reasonFranch">What is your reason for <br> wanting a franchise:</label> <br />
            <textarea
            v-model="reasonFranch"
            placeholder="Your Message"
            required
            class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800"
            />
          </div>
          <div
          type="submit"
          @click="createRequest"
          class="py-4 px-6 bg-[#EB6123] drop-shadow-lg font-bold text-lg text-[#E6E6E6] flex justify-between rounded hover:bg-[#ce4d16] transition duration-300 ease-in-out"
          >
          <p>Send</p> 
          <p>></p>
        </div>
        <!-- </div> -->
      </div>
      <p v-if="submittedFranch == true">
        Thank you for your submission! We will get back to you soon.
      </p>
      
      <div class="m-4 p-4 bg-[#252528] rounded text-[#E6E6E6] flex flex-col" v-if="submittedReview == false">
        <p class="font-bold text-2xl p-1 self-center uppercase">Submit a Testimonial</p>
        <!-- <form> -->
          <div class="self-center">
            <label for="name" class="p-2">First Name:</label> <br>
            <input type="text" v-model="firstNameRev" required class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800" placeholder="ex. Jane"/>
          </div>
          <div class="self-center">
            <label for="name" class="p-2">Last Name:</label> <br>
            <input type="text" v-model="lastNameRev" required class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800" placeholder="ex. Doe"/>
          </div>
          <div class="self-center">
            <label for="name" class="p-2">Email:</label> <br>
            <input type="text" v-model="emailRev" required class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800" placeholder="ex. janed@gmail.com"/>
          </div>
          <div class="self-center">
            <label for="stars" class="p-2">Out of 5 star rating:</label> <br>
            <select v-model="stars" class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800" placeholder="Please select one">
              <option disabled value="">Please select an option</option>
              <option value="1">1/5 Stars</option>
              <option value="2">2/5 Stars</option>
              <option value="3">3/5 Stars</option>
              <option value="4">4/5 Stars</option>
              <option value="5">5/5 Stars</option>
            </select>
          </div>
          <div class="self-center flex flex-col">
            <label for="descript" class="pt-2">What did you like best about our stores?</label> 
            <textarea v-model="descript" required class="border-2 rounded border-[#18181A] m-2 p-1 text-slate-800" placeholder="Your review"/>
          </div>
          <div type="submit" @click="createReview" class="py-4 px-6 bg-[#EB6123] drop-shadow-lg font-bold text-lg text-[#E6E6E6] flex justify-between rounded hover:bg-[#ce4d16] transition duration-300 ease-in-out">
            <p>Send</p>
            <p>></p>
          </div>
          <!-- </form> -->
        </div>
        <p v-if="submittedReview == true">
          Thank you for your feedback! 
        </p>
      </div>
        <div class="bg-[#252528] m-4 rounded p-6 text-[#E6E6E6] flex flex-col">
          <h1 class="uppercase text-4xl font-bold text-center">Spooky Popups <br> Corporate Office</h1>
          <div class="bg-[#E6E6E6] text-[#252528] m-2 p-2 rounded">
            <p class="font-bold text-xl">MAIN</p>
            <p>3120 12 AVE North</p>
            <p>LETHBRIDGE AB T1H 5V1</p>
            <p>info@SpookyPopUps.com</p>
            <p>403.555.0635</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.8967961593241!2d-112.79366236107198!3d49.71468749286527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8711fc31fbe1%3A0xa844b36ef6f583da!2sLethbridge%2C%20AB%20T1H%205V1!5e0!3m2!1sen!2sca!4v1683213490302!5m2!1sen!2sca" width="280" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

        <div class="bg-[#E6E6E6] text-[#252528] m-2 p-2 rounded">
          <p class="font-bold text-xl">ACCOUNTING</p>
          <p>accounting@SpookyPopUps.com</p>
          <p>403.556.0635</p>

        </div>

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
  addDoc,
  setDoc
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
  //   components: { ReviewCards },
  data() {
    return {
      reviews: [],
      submittedFranch: false,
      submittedReview: false,
      windowWidth: window.innerWidth
    };
  },
  methods: {
    async createRequest() {
      // 'users' collection reference
      const colRef = collection(db, "contactForm");
      // data to send
      const dataObj = {
        // firstName: "maria",
        // email: "hello@gmail.com",
        firstName: this.firstNameFranch,
        lastName: this.lastNameFranch,
        email: this.emailFranch,
        findOut: this.findOut,
        reason: this.reasonFranch,
      };
      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj);
      // access auto-generated ID with '.id'
      console.log("Document was created with ID:", docRef.id);

      this.submittedFranch = true;
    },
    async createReview() {
      // 'users' collection reference
      
      const dataObj = {
        // firstName: "maria",
        // email: "hello@gmail.com",
        firstName: this.firstNameRev,
        lastName: this.lastNameRev,
        email: this.emailRev,
        stars: this.stars,
        descript: this.descript,
      };
      await setDoc(doc(db, "reviews", (this.firstNameRev + this.lastNameRev + this.stars)), dataObj);

      // const colRef = collection(db, "reviews");
      // // data to send
      // // create document and return reference to it
      // const docRef = await addDoc(colRef, dataObj);
      // // access auto-generated ID with '.id'
      // console.log("Document was created with ID:", docRef.id);

      this.submittedReview = true;
    },
  },
  async mounted() {
    // const querySnap = await getDocs(query(collection(db, "reviews")));
    // // add each doc to 'countries' array
    // querySnap.forEach((doc) => {
    //   this.reviews.push(doc.data());
    // });
    this.windowWidth = window.innerWidth;
  },
};
</script>
