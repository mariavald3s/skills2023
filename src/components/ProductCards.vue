<template>
    <div v-if="showCard == true" @click="showDescript" class=" rounded bg-[#E9804D] overflow-hidden m-2 text-[#E6E6E6]">
        <img :src="img" alt="" class="max-w-full lg:max-w-full">
        <p class="p-2 font-bold">{{ name }}</p>

        <p v-if="showDescription == true" class="pb-4 px-4">{{ descript }}</p>
    </div>
</template>

<script>
export default {
    data() {
    return {
      showCard: false,
      showDescription: false
    };
  },
    props: ["name", "descript", "img", "category", "categorySpecify"],
    methods: {
        showDescript () {
            this.showDescription = !this.showDescription;
        }
    },
    async mounted() {
        if (this.category == this.categorySpecify) {
            this.showCard = true;
        }
    }
}
</script>