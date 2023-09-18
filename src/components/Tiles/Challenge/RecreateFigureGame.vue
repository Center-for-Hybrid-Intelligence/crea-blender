<template>
  <div class="k1:overflow-hidden k1:w-screen k1:h-screen">
    <div class="fixed right-12 top-12 z-50 flex items-center justify-center text-white text-3xl font-bold">
      Round: {{roundNumber}} / 3
    </div>
  <div class="transition-all duration-500  absolute w-full h-full z-20 opacity-0 pointer-events-none "
       :class="{' opacity-100 pointer-events-auto' : areAllSame(solution, currentShape) }">
    <div class="" v-if="roundNumber <= 2">
    <TilesChallengeWellDone show @navigateToGame="changeGame('FindBestFigureGame')"  @increment="incrementRoundNumber" :dropCountAmount="dropCount"/>
  </div>
    <div class="" v-else-if="roundNumber === 3">
      <ChallengeDone  :dropCountAmount="dropCount" show/>
    </div>
  </div>
  <div :class="{'blur-2xl' : areAllSame(solution, currentShape)}"
       class=" transition-all  duration-500 min-h-screen flex flex-col items-center">
    <div class="relative flex flex-col k1:flex-row justify-center align-middle">
      <h2 class=" k1:text-5xl text-3xl k1:pb-0 px-12 pb-8 max-w-2xl self-center text-center pt-10 text-white">Recreate
        figure in the least amount of moves</h2>
      <h1 class="text-3xl k1:absolute  -bottom-12 text-tilesBlue text-center">
        Total Moves: {{ dropCount }}
      </h1>
    </div>
    <div class="fixed z-50  right-12 bottom-12 flex items-center justify-center text-white text-3xl font-bold">
      <TimerComponent :timer="timer"/>
      <div v-if="timer < 0 " class=" flex flex-col ">
        <button @click="endChallenge('FindBestFigureGame')" class="buttonBlue">Times Up!</button>
      </div>
    </div>

    <div class=" flex max-h-fit k1:flex-row overflow-hidden flex-col flex-col-reverse  align-middle  justify-center">
      <TileGrid
          :gridSize="12"
          :tile-size="45"
          :gap="6"
          :editable="true"
          :chain="currentShape"
          ref="tileGrid"
          :dropCount="dropCount"
          @update:dropCount="dropCount = $event"
      ></TileGrid>

      <div class="flex item-center justify-center overflow-hidden ">
        <div class="self-center">

          <h1 class="text-2xl text-tilesBlue  text-center">
            Goal Figure:
          </h1>
          <div class="shadow-xl transition-all duration-300 border-2 border-white  self-end justify-center  flex">
            <TileGrid class="h-fit " :filledCount="10"
                      :gridSize="12"
                      :tileSize="12"
                      :borderRadius="0.2"
                      :border-size="0.14"
                      :gap="2" :editable="false" :chain="solution"/>

          </div>
        </div>
      </div>
      <div class=" flex flex-col fixed right-12 bottom-12 ">
        <!--
                <button @click="changeGame('FindBestFigureGame')" class="button self-center mt-8">Continue</button>
        -->
        <!--
                <button @click="end" class="buttonSecondary m-auto mt-4 ">Skip</button>
        -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {ref} from "vue";
import TileGrid from "@/components/Tiles/TileGrid.vue";
import TilesChallengeWellDone from "@/components/Tiles/Challenge/TilesChallengeWellDone.vue";
import TimerComponent from "@/components/Tiles/Timer.vue";
import ChallengeDone from "@/components/Tiles/Challenge/TilesChallengeDone.vue";

export default {
  name: "RecreateFigure",
  components: {ChallengeDone, TimerComponent, TilesChallengeWellDone, TileGrid},
  props: {
    currentShape: {
      type: Array,
      default: null
    },
    solution: {
      type: Array,
      default: null
    },
    solutionInfo: {
      type: Object,
      default: null
    }, roundNumber:{
      type:Number
    }
  },
  emits: [
    'navigateToGame',
    'end'
  ],
  setup(props, {emit}) {
    const challengeStarted = ref(false);
    const isSameFigure = ref(false)
    const dropCount = ref(0);
    const bestSolutionIndex = ref(props.solutionInfo.optimalSolutionIndex)
    const bestSolutionMovesAmount = ref(props.solutionInfo.optimalSolutionMoves)
    const timer = ref(60);
    console.log(bestSolutionIndex.value, bestSolutionMovesAmount.value, "solution info from inhere")


    const incrementRoundNumber = () => {
      emit("increment")
    }

    const startTimer = () => {
      const countdown = setInterval(() => {
        timer.value--;
        if (timer.value === -1) {
          clearInterval(countdown);
        }
      }, 1000);
    }

    const endChallenge = () => {
      emit('endChallenge');
    }

    function areAllSame(solution, currentShape) {
      let solutionNormalised = normalizeShape(solution)
      let currentShapeNormalised = normalizeShape(currentShape)
      for (let i = 0; i < solutionNormalised.length; i++) {
        if (solutionNormalised[i].filled !== currentShapeNormalised[i].filled) {
          return false;
        }
      }
      return true; // All items are the same
    }

    function normalizeShape(shape) {
      // Find the indices of the first and last rows with 'filled: true'
      let firstFilledRow = -1;
      let lastFilledRow = -1;

      for (let i = 0; i < shape.length; i++) {
        if (shape[i].filled === true) {
          if (firstFilledRow === -1) {
            firstFilledRow = i;
          }
          lastFilledRow = i;
        }
      }

      // If no 'filled: true' rows are found, return an empty array
      if (firstFilledRow === -1) {
        return [];
      }

      // Create a new array containing rows from firstFilledRow to lastFilledRow
      const normalizedShape = shape.slice(firstFilledRow, lastFilledRow + 1);

      return normalizedShape;
    }

    startTimer()

    const startChallenge = () => {
      challengeStarted.value = true;
    }
    const end = () => {
      emit("end");
    }
    const changeGame = (game) => {
      emit('navigateToGame', game);
    };
    return {
      startChallenge,
      challengeStarted,
      changeGame,
      end,
      isSameFigure,
      areAllSame,
      dropCount,
      startTimer,
      timer,
      endChallenge,
        incrementRoundNumber
    }
  }
}
</script>

<style scoped>

</style>