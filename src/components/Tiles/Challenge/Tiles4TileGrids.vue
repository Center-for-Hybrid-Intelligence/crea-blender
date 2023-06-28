<template>
  <div class=" flex k1:flex-row flex-col flex-col-reverse p-8 align-middle min-h-screen justify-center">
    <div class="grid grid-cols-2 border-black gap-12  ">
      <div class="hover border-2 border-white min-w-min cursor-pointer self-end justify-center  flex  ">
        <TileGrid class="" :gap="3" :tile-size="16" :grid-size="10" :border-radius="0.2" :border-size="0.2" :editable="false" />
      </div>
      <div class="hover border-2 border-white min-w-min cursor-pointer self-end justify-center  flex  ">
        <TileGrid class="" :gap="3" :tile-size="16" :grid-size="10" :border-radius="0.2" :border-size="0.2" :editable="false"/>
      </div>
      <div class="hover border-2 border-white min-w-min cursor-pointer self-start flex  justify-center">
        <TileGrid class="" :gap="3" :tile-size="16" :grid-size="10" :border-radius="0.2" :border-size="0.2" :editable="false"/>
      </div>
      <div class="hover border-2 border-white min-w-min cursor-pointer self-start flex  justify-center">
        <TileGrid class="" :gap="3" :tile-size="16" :grid-size="10" :border-radius="0.2" :border-size="0.2" :editable="false"/>
      </div>
    </div>

    <div class="flex justify-center overflow-hidden">
      <TileGrid class="" :grid-size="10" :editable="false"/>
    </div>
  </div>
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {flattenToSet} from "@babel/core/lib/config/helpers/deep-array";

export default {
  name: "Tiles4TileGrids",
  methods: {flattenToSet},
  components: {TileGrid},
  setup(){

  return{
    }
  }
}
</script>

<style scoped>

</style>