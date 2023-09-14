<template>
  <!--  <Tiles4TileGrids/>-->
  <div class=" overflow-hidden flex k1:flex-row flex-col flex-col-reverse align-middle min-h-screen justify-center">
    <div class="grid grid-cols-2 border-black k1:gap-x-12 k1:gap-y-0 gap-4 gap-x-4 k1:px-12 k1:py-12 justify-center p-4 ">
      <div v-for="(shape) in fourDifferentShapes" :key="shape"
           class="k1:hover:scale-105 transition-all duration-300 border-2 border-white  cursor-pointer self-end justify-center  flex"
           @click="changeGame('RecreateFigureGame', shape, solution, solutionInfo )"
      >
        <TileGrid
            :filledCount="10"
            :gap="3" :tile-size="16" :grid-size="12" :border-radius="0.2" :border-size="0.2"
            :editable="false"
            ref="tileGrid"
            :chain="shape"
        ></TileGrid>
    </div>
  </div>
  <div class="flex justify-center   ">
    <TileGrid class="" :grid-size="12" :gap="8" :editable="false" :chain="solution"/>
  </div>

  <div class=" flex flex-col fixed right-12 bottom-12 ">
<!--
    <button @click="changeGame('RecreateFigureGame')" class="button self-center mt-8">Continue</button>
-->
    <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
  </div>
  </div>

</template>

<script>

import shapesCollection from '../../../shapesCollection.js';
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";

export default {
  name: "FindBestFigure",
  components: {TileGrid},
  setup(props, {emit}) {
    const fourDifferentShapes = ref(shapesCollection.fourDifferentShapes);
    const solution = ref(shapesCollection.solution);
    const solutionInfo = ref(shapesCollection.solutionInfo);

    console.log(shapesCollection.solutionInfo.optimalSolutionIndex, "index" )
    console.log(shapesCollection.solutionInfo.optimalSolutionMoves, "best solution")


    const changeGame = (game, shape, solution, solutionInfo) => {
      emit('navigateToGame', game, shape, solution, solutionInfo);
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
      solutionInfo
    }
  }
}
</script>

<style scoped>

</style>