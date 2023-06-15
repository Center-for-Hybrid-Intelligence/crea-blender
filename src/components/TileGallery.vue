<template>
  <div v-if="visible" class="absolute  w-11/12 k1:w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-3xl shadow-lg z-50 overflow-x-hidden  h-5/6 ">
    <h1 class="heading1  text-center w-full !font-bold">Gallery</h1>
    <div class="flex justify-center">
      <button class="bg-black absolute top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-8 hover" @click="$emit('close')">X</button>
    </div>
    <div class="grid k1:grid-cols-4 h6:grid-cols-3 grid-cols-2 gap-4 k15:gap-8 p-8 justify-center">
      <div v-for="shape in createdShapes" :key="shape" class= "bg-white rounded-xl  ">
<!--        {{shape}}-->
        <TileGrid
            :filledCount="10"
            :gridSize="10"
            :tileSize="12"
            :gap="4"
            :editable="false"
            ref="tileGrid"
            :chain="shape"
        > </TileGrid>
      </div>
    </div>
  </div>
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
export default {
  name: "TileGallery",
  components: {TileGrid},
  emits: ['close'],
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    createdShapes: {
      type: Array,
      required: false,
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