<template>
  <LGallery :visible="visible">
    <template #title>
      Gallery
    </template>
    <template #button>
      <button class="bg-red-500 fixed top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-8 hover"
              @click="$emit('close')">X
      </button>
    </template>


    <template #content>
      <div v-for="(item, index) in gallery" :key="index" class= "p-2  k15:p-5 ">
        {{index}}
        {{item.src}}
        <img :src="item.src" :alt="item.alt" class="rounded w-full h-12 h8:h-28 k15:h-48 object-cover object-center">
      </div>
    </template>
  </LGallery>
</template>

<script>

import LGallery from "@/components/layout/LGallery.vue";
export default {
  name: "BlenderGallery",
  components: {LGallery},
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    gallery: {
      type: Array,
      required: false,
      default: () => [{
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
  return: {
    LGallery
  }
}
</script>

<style scoped>

</style>