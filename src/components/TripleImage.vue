<template>
      <div @click="onChange" class="grid mb-8 w-96 grid-cols-3 gap-2 border-4 hover:border-green-600">
        <img class="w-32" :src="image1 || 'https://placehold.co/400'" alt="">
        <img class="w-32" :src="image2 || 'https://placehold.co/400'" alt="">
        <img class="w-32" :src="image3 || 'https://placehold.co/400'" alt="">
      </div>
</template>

<script>
// import Image from "@/components/image/Image.vue";

export default {
  name: "TripleImage",
  components: {},
  props: {
    image1: {
      type: String,
      default: "",
    },
    image2: {
      type: String,
      default: "",
    },
    image3: {
      type: String,
      default: "",
    },
  },
  setup() {
    const onChange = () => {
      console.log("change");
    }
    return {
      onChange
    }
  }
}


</script>

<style scoped>

</style>