<template>
  <div v-if="visible"
       class="absolute  w-11/12 k1:w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 backdrop-blur-2xl backdrop-brightness-125 rounded-3xl shadow-gray-700 shadow-2xl    z-50 overflow-x-hidden  h-5/6 ">
    <h1 class="heading1  !text-6xl  text-center w-full !font-bold">
      <slot name="title" class=""></slot>
    </h1>
    <div class="flex justify-center">
      <slot name="button" class="" />
<!--
        <button class="bg-red-500 fixed top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-8 hover"
                @click="$emit('close')">X
        </button>-->

    </div>
    <div class="grid k1:grid-cols-4 h6:grid-cols-3 grid-cols-2 gap-4 k15:gap-8 p-8 justify-center  ">

        <slot name="content" class=""></slot>
    </div>
  </div>
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";

export default {
  name: "TileGallery",
  emits: ['close'],
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },

  },
  setup() {
    return {
      TileGrid,
    };
  },
}
</script>

<style scoped>

</style>