<template>
  <div class="bg-[#252528] text-[#E6E6E6] pt-[190px] md:pb-36" v-if="this.login == false">
    <div class="flex flex-col px-10">
      <p class="text-xl font-bold mx-4 my-2">Login</p>
      <label for="username" class="mx-4">Username:</label>
      <input type="text" class="m-4 text-[#18181A] p-1 rounded" v-model="user" />
      <label for="password" class="mx-4">Password:</label>
      <input type="password" class="m-4 text-[#18181A] p-1 rounded" v-model="password" />
      <div
        class="bg-[#EB6123] m-2 font-bold flex justify-center p-2 rounded hover:bg-[#ce4d16]"
        @click="loginFunc"
      >
        <p>Login</p>
      </div>
    </div>
  </div>

  <div class="" v-if="this.login == true">
    <p class="bg-green-200 pt-48 md:pt-32 px-4">Login successful!</p>
    <!-- put page here -->
    <div class="p-2">
      <p class="text-center font-bold text-4xl pt-5">Admin Board</p>
      <p class="text-center font-bold text-xl pt-5">Location Editor</p>
      <!-- pull locations from database, implement delete and add system -->
      <div class="grid lg:grid-cols-3">
        <EditLocationsCards
          v-for="location in locations"
          :key="location.id"
          :city="location.city"
          :region="location.region"
          :street="location.street"
          :country="location.country"
          :open="location.open"
        />

      </div>

      <p class="m-5 py-4 px-6 bg-sky-600 drop-shadow-lg font-bold text-lg text-[#E6E6E6] flex justify-center rounded hover:bg-sky-800 transition duration-300 ease-in-out" v-if="showForm == false" @click="showForm = true">Add New Location</p>

      <div
        class="text-[#0B0C10] bg-[#C4C4C4] rounded-lg p-4 overflow-hidden m-3 drop-shadow-md flex flex-col"
        v-if="submitted == false && showForm == true"
      >
        <!-- <div v-if="submittedFranch == false"> -->
        <div class="self-center">
          <label for="street">Street:</label> <br />
          <input
            type="text"
            v-model="street"
            placeholder="ex. 10200 102 Ave NW"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>
        <div class="self-center">
          <label for="city">City:</label> <br />
          <input
            type="text"
            v-model="city"
            placeholder="ex. Edmonton"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>
        <div class="self-center">
          <label for="region">Region:</label> <br />
          <input
            type="email"
            v-model="region"
            placeholder="ex. Alberta"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>
        <div class="self-center">
          <label for="postCode">Postal Code:</label> <br />
          <input
            type="email"
            v-model="postCode"
            placeholder="ex. T6E 1V1"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>
        <div class="self-center">
          <label for="country">Country:</label> <br />
          <input
            type="email"
            v-model="country"
            placeholder="ex. Canada"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>
        <div class="self-center">
          <label for="open">Open daily:</label> <br />
          <input
            type="email"
            v-model="open"
            placeholder="ex. 9:00am - 6:00pm"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>
        <div class="self-center">
          <label for="url">Embed URL:</label> <br />
          <input
            type="email"
            v-model="url"
            placeholder="ex. https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8062239821866!2d-113.49874942339174!3d53.54337407234711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02248bb6c93f7%3A0xf16bcb0b052b8e1!2s10200%20102%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5J%200V1!5e0!3m2!1sen!2sca!4v1683214260126!5m2!1sen!2sca"
            required
            class="border-2 rounded border-[#252528] m-2 p-1 text-slate-800"
          />
        </div>

        <div
          type="submit"
          @click="addLocation"
          class="py-4 px-6 bg-sky-600 drop-shadow-lg font-bold text-lg text-[#E6E6E6] flex justify-between rounded hover:bg-sky-800 transition duration-300 ease-in-out"
        >
          <p>Send</p>
          <p>></p>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <p
      v-if="submitted == true"
      @click="newForm"
      class="mx-5 drop-shadow-lg transition duration-300 ease-in-out text-[#E6E6E6] bg-green-600 p-2 rounded hover:bg-green-700"
    >
      Submission successful! Click here to submit another location.
    </p>
    <div class="p-2">
      <p class="text-center font-bold text-xl pt-5">Testimonials Approval</p>
      <!-- pull testimonials from database, implement delete
                     and add system push the rest to an approved array -->
      <div class="grid lg:grid-cols-3">
        <ApprovalReviewCards
          v-for="review in reviews"
          :key="review.id"
          :firstName="review.firstName"
          :email="review.email"
          :lastName="review.lastName"
          :descript="review.descript"
          :stars="review.stars"
        />
      </div>
    </div>
    <!-- <div class="p-2">
                <p>Product Manager</p>

                <p>Search Products to Edit:</p>
                <input type="text" v-model="prodSearch">

                <div @click="searchProds">
                    <p>Search</p>
                </div>
                <ProductEditCard v-for="prod in searchedProds"
                :key="prod.id"
                :name="prod.name"
                :descript="prod.descript"
                :img="prod.img"/>

            </div> -->
  </div>
</template>

<script>
import ProductEditCard from "../components/ProductEditCard.vue";
import ApprovalReviewCards from "../components/ApprovalReviewCards.vue";
import EditLocationsCards from "../components/EditLocationsCards.vue";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  query,
  doc,
  addDoc,
  setDoc,
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
  components: { ProductEditCard, ApprovalReviewCards, EditLocationsCards },
  data() {
    return {
      products: [],
      searchedProds: [],
      login: false,
      reviews: [],
      locations: [],
      submitted: false,
      showForm: false
    };
  },
  methods: {
    searchProds() {
      for (let i = 0; i < this.products.length; i++) {
        if (this.prodSearch == this.products[i].name) {
          this.searchedProds.push(this.products[i]);
        }
      }
    },
    newForm() {
      this.street = "";
      this.city = "";
      this.country = "";
      this.postCode = "";
      this.open = "";
      this.region = "";
      this.url = "";

      this.submitted = false;
    },
    loginFunc() {
      if (this.user == "spookp3" && this.password == "skills2023") {
        this.login = true;
      }
    },
    async editProduct() {
      // 'users' collection reference

      const colRef = collection(db, "products");
      // data to send
      const dataObj = {
        // firstName: "maria",
        // email: "hello@gmail.com",
        descript: this.descript,
        id: this.name,
        name: this.name,
      };

      // SET DOC????

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj);
      // access auto-generated ID with '.id'
      console.log("Document was created with ID:", docRef.id);

      location.reload();
    },

    //locations
    async addLocation() {
      // 'users' collection reference

      const dataObj = {
        // firstName: "maria",
        // email: "hello@gmail.com",
        street: this.street,
        city: this.city,
        region: this.region,
        postCode: this.postCode,
        country: this.country,
        open: this.open,
        url: this.url,
      };
      await setDoc(doc(db, "locations", this.street), dataObj);
      this.submitted = true;
    },
  },
  async mounted() {
    const querySnap = await getDocs(query(collection(db, "products")));
    // add each doc to 'countries' array
    querySnap.forEach((doc) => {
      this.products.push(doc.data());
    });

    const querySnap2 = await getDocs(query(collection(db, "reviews")));
    // add each doc to 'countries' array
    querySnap2.forEach((doc) => {
      this.reviews.push(doc.data());
    });

    const querySnap3 = await getDocs(query(collection(db, "locations")));
    // add each doc to 'countries' array
    querySnap3.forEach((doc) => {
      this.locations.push(doc.data());
    });
  },
};
</script>
