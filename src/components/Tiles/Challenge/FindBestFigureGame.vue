<template>
  <div class=" overflow-hidden flex k1:flex-row flex-col flex-col-reverse align-middle min-h-screen justify-center">
    <div class="fixed right-12 top-12 z-50 flex items-center justify-center text-white text-3xl font-bold">
    Round: {{roundNumber}} / 3
    </div>
    <div
        class="grid grid-cols-2 border-black k1:gap-x-12 k1:gap-y-0 gap-4 gap-x-4 k1:px-12 k1:py-12 justify-center p-4 ">
      <div v-for="(shape, index) in fourDifferentShapes" :key="shape"
           class="k1:hover:scale-105 shadow-2xl transition-all duration-300 border-2 border-white cursor-pointer self-end justify-center  flex"
           @click="changeGame('RecreateFigureGame', shape, solution, solutionInfo, index )"
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
    <div class="fixed right-12 bottom-12 z-50 flex items-center justify-center text-white text-3xl font-bold">
      <TimerComponent :timer="timer"/>
      <div v-if="timer < 0 " class=" flex flex-col">
        <button @click="endChallenge('FindBestFigureGame')" class="buttonBlue">Times Up!</button>
      </div>
    </div>

    <div class="flex flex-col justify-center   ">
      <div class="max-w-2xl">
        <h2 class=" text-3xl absolute top-8 k1:top-24 k1:pb-0 px-12 pb-8 self-center text-center pt-10 text-white"> Pick the
          figure which you think required the least amount of moves to generate from the big figure</h2>
      </div>

      <TileGrid class=""  :grid-size="12" :gap="8" :editable="false" :chain="solution"/>
    </div>
  </div>

</template>

<script>

import shapesCollection from '../../../shapesCollection.js';
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref, watch} from "vue";
import TimerComponent from "@/components/Tiles/Timer.vue";

export default {
  name: "FindBestFigure",
  components: {TimerComponent, TileGrid},
  props: {
    start: {
      type: Boolean
    },
    roundNumber:{
      type: Number
    }
  },
  setup(props, {emit}) {
    console.log(props.roundNumber, "#round number" )
    const fourDifferentShapes = ref(shapesCollection[props.roundNumber].fourDifferentShapes);
    const solution = ref(shapesCollection[props.roundNumber].solution);
    const solutionInfo = ref(shapesCollection[props.roundNumber].solutionInfo);
    const timer = ref(30);

    const startTimer = () => {
      const countdown = setInterval(() => {
        timer.value--;
        if (timer.value === -1) {
          clearInterval(countdown);
        }
      }, 1000);
    }

    watch(
        () => props.start,
        (newStartValue) => {
          if (newStartValue === true) {
            startTimer();
          }
        }
    );


    /*
        console.log(shapesCollection.solutionInfo.optimalSolutionIndex, "index")
        console.log(shapesCollection.solutionInfo.optimalSolutionMoves, "best solution")
    */

    const endChallenge = (game) => {
      emit('navigateToGame', game);

    }
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
      solutionInfo,
      startTimer,
      timer,
      endChallenge,

    }
  }
}
</script>

<style scoped>

</style>