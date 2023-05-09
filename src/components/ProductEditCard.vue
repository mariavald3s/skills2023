<template>
  <div class="bg-slate-500">
    <img :src="img" alt="" />
    <p>{{ name }}</p>
    <p>{{ descript }}</p>
    <div @click="this.editName = !this.editName" class="bg-slate-200">
      Edit Name
    </div>
    <div v-if="editName == true">
      <p>Change name to:</p>
      <input type="text" v-model="updatedName" />
      <div>
        <p>Submit</p>
      </div>
    </div>
    <div @click="this.editDescript = !this.editDescript" class="bg-slate-200">
      Edit Descript
    </div>
    <div v-if="editDescript == true">
      <p>Change descript to:</p>
      <input type="text" v-model="updatedDescript" />
      <div>
        <p>Submit</p>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, updateDoc, getDoc } from "firebase/firestore";


export default {
  data() {
    return {
      editName: false,
      editDescript: false,
    };
  },
  props: ["name", "descript", "img"],
  methods: {
    async editProd() {
      //code to edit product in database
      const washingtonRef = doc(db, "products", "DC");

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        capital: true,
      });
    },
  },
};
</script>
