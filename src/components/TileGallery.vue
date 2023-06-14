<template>
  <div v-if="visible" class="absolute h-min top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-white border border-black border-8 rounded-lg shadow-sm">
    <h1 class="heading1 m-2 text-center w-full">Your shapes so far</h1>
    <div class="flex justify-center">

      <button class="bg-black absolute top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-2" @click="$emit('close')">X</button>
    </div>
    <div class="grid grid-cols-3 gap-1 k15:gap-4">
      <div v-for="(shape, index) in createdShapes" :key="index" class="p-2  k15:p-5 ">
        {{shape}}
        <TileGrid
            :filledCount="10"
            :gridSize="10"
            :tileSize="10"
            :gap="3"
            :editable="false"
            ref="tileGrid"
            :chain="shape"
        ></TileGrid>
      </div>
    </div>
  </div>
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";
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
    const grids = ref(4)
    return {
      grids,
      TileGrid,
    };
  },
}
</script>

<style scoped>

</style>