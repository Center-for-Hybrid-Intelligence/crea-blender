<template>
      <div @click="onChoose" class="grid mb-8 w-96 grid-cols-3 gap-2 border-4 hover:border-green-600">
        <img class="w-32" :src="image1.url" alt="">
        <img class="w-32" :src="image2.url" alt="">
        <img class="w-32" :src="image3.url" alt="">
      </div>
</template>

<script>
// import Image from "@/components/image/Image.vue";

export default {
  name: "TripleImage",
  components: {},
  props: {
    image1: {
      type: Object,
      default: () => ({
        url: "https://placehold.co/400",
        id: "image 1 id",
      }),
    },
    image2: {
      type: Object,
      default: () => ({
        url: "https://placehold.co/400",
        id: "image 2 id",
      }),
    },
    image3: {
      type: Object,
      default: () => ({
        url: "https://placehold.co/400",
        id: "image 3 id",
      }),
    },
  },
  setup() {
    const onChoose = (value) => {
      console.log(value);
    }
    return {
      onChoose
    }
  }
}


</script>

<style scoped>

</style>