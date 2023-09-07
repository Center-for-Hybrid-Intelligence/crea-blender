<template>
  <h1>Recreate Figure</h1>
  <div class=" flex k1:flex-row flex-col flex-col-reverse p-8 align-middle min-h-screen justify-center">
    <TileGrid
        :filledCount="10"
        :gridSize="10"
        :tileSize="12"
        :borderRadius="0.2"
        :border-size="0.14"
        :gap="4"
        :editable="true"
        ref="tileGrid"
        :chain="currentShape"
    ></TileGrid>
    <div class="flex justify-center overflow-hidden">
      <TileGrid class="" :grid-size="10" :editable="false" :chain="solution"/>
    </div>

    <div class="flex justify-evenly h- flex-col">
      <button @click="changeGame('FindBestFigureGame')" class="button self-center mt-8">Continue</button>
      <button @click="end" class="buttonSecondary m-auto mt-4 ">Skip</button>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import TileGrid from "@/components/Tiles/TileGrid.vue";

export default {
  name: "RecreateFigure",
  components: {TileGrid},
  props: {
    currentShape: {
      type: Array,
      default: null
    },
    solution: {
      type: Array,
      default: null
    }
  },
  emits: [
    'navigateToGame',
    'end'
  ],
  setup(props, {emit}) {
    const challengeStarted = ref(false);
    const startChallenge = () => {
      console.log("start");
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
    }
  }
}
</script>

<style scoped>

</style>