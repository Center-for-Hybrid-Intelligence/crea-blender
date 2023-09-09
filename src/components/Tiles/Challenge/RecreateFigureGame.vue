<template>
  <div class="min-h-screen flex flex-col items-center p-8">
    <h2 class=" text-2xl pt-20 pb-10 text-white">Recreate In the least amount of moves</h2>
    {{ isSameFigure }}
    <div class=" flex h-fit k1:flex-row overflow-hidden flex-col flex-col-reverse   align-middle  justify-center">
      <TileGrid
          :gridSize="10"
          :editable="true"
          ref="tileGridRef"
          :chain="currentShape"
      ></TileGrid>
      <div class="flex item-center justify-center overflow-hidden ">
        <div class="border-4 rounded-xl">
          <TileGrid class="h-fit " :filledCount="10"
                    :gridSize="10"
                    :tileSize="12"
                    :borderRadius="0.2"
                    :border-size="0.14"
                    :gap="4" :editable="false" :chain="solution"/>
        </div>

      </div>


      <div class=" flex flex-col fixed right-12 bottom-12 ">
        <button @click="changeGame('FindBestFigureGame')" class="button self-center mt-8">Continue</button>
        <button @click="end" class="buttonSecondary m-auto mt-4 ">Skip</button>
      </div>
    </div>

  </div>

</template>

<script>
import {ref, watch} from "vue";
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
    const isSameFigure = ref(false)
    console.log(props.currentShape, )

    watch(() => props.currentShape, (newVal) => {
      // This callback will be executed whenever the chain prop of TileGrid changes
      console.log('TileGrid chain changed:', newVal);
    });


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
      isSameFigure
    }
  }
}
</script>

<style scoped>

</style>