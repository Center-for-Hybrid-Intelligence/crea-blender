<template>
  <!--  <Tiles4TileGrids/>-->
  <div class=" flex k1:flex-row flex-col flex-col-reverse p-8 align-middle min-h-screen justify-center">
    <div class="grid grid-cols-2 border-black gap-12">
      <div v-for="shape in fourDifferentShapes" :key="shape"
           class=" hover border-2 border-white min-w-min cursor-pointer self-end justify-center  flex">
        <!--        {{shape}}-->
        <TileGrid
            :filledCount="10"
            :gap="3" :tile-size="16" :grid-size="10" :border-radius="0.2" :border-size="0.2"
            :editable="false"
            ref="tileGrid"
            :chain="shape"
            @click="changeGame('RecreateFigureGame', shape,solution )"
        ></TileGrid>
    </div>
  </div>
  <div class="flex justify-center overflow-hidden">
    <TileGrid class="" :grid-size="10" :editable="false" :chain="solution"/>
  </div>

  <div class=" flex flex-col fixed right-12 bottom-12 ">
    <button @click="changeGame('RecreateFigureGame')" class="button self-center mt-8">Continue</button>
    <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
  </div>
  </div>

</template>

<script>

import shapesCollection from '../../../shapesCollection.js';

/*
import Tiles4TileGrids from "@/components/Tiles/Challenge/Tiles4TileGrids.vue";
*/

import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";

export default {
  name: "FindBestFigure",
  /*
    components: {Tiles4TileGrids},
  */
  components: {TileGrid},
  setup(props, {emit}) {
/*
    const myChains = ref([]);
*/
    const fourDifferentShapes = ref(shapesCollection.fourDifferentShapes);
    const solution = ref(shapesCollection.solution);


    console.log(shapesCollection.optimalSolutionIndex, )
    console.log(shapesCollection.optimalSolutionMoves, )

/*    const handleSaveChain = (chain) => {
      myChains.value.push(JSON.parse(JSON.stringify(chain))); // Deep copy
      console.log(chain + " already exists in the array and won't be added again.");
    };*/


    const changeGame = (game, shape, solution) => {
      emit('navigateToGame', game, shape, solution);
    };

    const end = () => {
      emit("end");
    }
    return {
      changeGame,
      end,
      fourDifferentShapes,
      solution,
      shapesCollection,
    }
  }
}
</script>

<style scoped>

</style>