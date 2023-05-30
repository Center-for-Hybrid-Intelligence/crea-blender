<template>
  <div v-if="visible" class="absolute h-min top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-white border border-black border-8 rounded-lg shadow-sm">
    <h1 class="heading1 m-2 text-center w-full">Your images so far</h1>
    <div class="flex justify-center">

      <button class="bg-black absolute top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-2" @click="$emit('close')">X</button>
    </div>
  <div class="grid grid-cols-3 gap-1 k15:gap-4">
    <div v-for="(item, index) in gallery" :key="index" class= "p-2  k15:p-5 ">
      <img :src="item.src" :alt="item.alt" class="rounded w-full h-12 h8:h-28 k15:h-48 object-cover object-center">
    </div>
  </div>
  </div>
</template>

<script>
// import {onMounted, onBeforeUnmount} from "vue";
// import {ref} from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Gallery",
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    gallery: {
      type: Array,
      required: false,
      default: () => [  {
        src: 'https://via.placeholder.com/300',
        alt: 'Image 2',
        title: 'Image 2',
        description: 'This is the description of Image 2.'
      },
        {
          src: 'https://via.placeholder.com/300',
          alt: 'Image 3',
          title: 'Image 3',
          description: 'This is the description of Image 3.'
        },
        {
          src: 'https://via.placeholder.com/300',
          alt: 'Image 3',
          title: 'Image 3',
          description: 'This is the description of Image 3.'
        },
        {
          src: 'https://via.placeholder.com/300',
          alt: 'Image 3',
          title: 'Image 3',
          description: 'This is the description of Image 3.'
        },],
    },

  },
  setup() {


    return {

    }
  }
}
</script>

<style scoped>

</style>