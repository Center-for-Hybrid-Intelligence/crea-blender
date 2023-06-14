<template>
  <div class=" flex k1:flex-row flex-col flex-col-reverse p-8 align-middle min-h-screen justify-center">
    <div class="grid grid-cols-2 border-black gap-12  ">
      <div @click="chosenOne(1)" class="border-2 border-white min-w-min cursor-pointer self-end justify-center  flex  ">
        <TileGrid class="" :key="gap1" :gap="gap1" :tile-size="16" :grid-size="10" :editable="false" />
      </div>
      <div @click="chosenOne(2)"  class="border-2 border-white min-w-min cursor-pointer self-end justify-center  flex  ">
        <TileGrid class="" :gap="gap2" :tile-size="16" :grid-size="10" :editable="false"/>
      </div>
      <div @click="chosenOne(3)"  class="border-2 border-white min-w-min cursor-pointer self-start flex  justify-center">
        <TileGrid class="" :gap="gap3" :tile-size="16" :grid-size="10" :editable="false"/>
      </div>
      <div @click="chosenOne(4)"  class="border-2 border-white min-w-min cursor-pointer self-start flex  justify-center">
        <TileGrid class="" :gap="gap4" :tile-size="16" :grid-size="10" :editable="false"/>
      </div>
    </div>

    <div class="flex justify-center overflow-hidden">
      <TileGrid class="" :grid-size="10" :editable="false"/>
    </div>
  </div>
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";
import {flattenToSet} from "@babel/core/lib/config/helpers/deep-array";

export default {
  name: "Tiles4TileGrids",
  methods: {flattenToSet},
  components: {TileGrid},
  setup(){
    const gap1 = ref(2);
    const gap2 = ref(2);
    const gap3 = ref(2);
    const gap4 = ref(2);




    const chosenOne = (grid)  => {
      console.log("sup bia",grid )
    }
  return{
      chosenOne,
    gap1,
    gap2,
    gap3,
    gap4,

    }
  }
}
</script>

<style scoped>

</style>