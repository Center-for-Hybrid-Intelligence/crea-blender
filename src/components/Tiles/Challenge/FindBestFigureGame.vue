<template>
  <Tiles4TileGrids/>
  <div class=" flex flex-col fixed right-12 bottom-12 ">
    <button @click="changeGame('RecreateFigureGame')" class="button self-center mt-8">Continue</button>
    <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
  </div>
</template>

<script>

import Tiles4TileGrids from "@/components/Tiles/Challenge/Tiles4TileGrids.vue";

export default {
  name: "FindBestFigure",
  components: {Tiles4TileGrids},
  setup(props, {emit}) {

    const changeGame = (game) => {
      emit('navigateToGame', game);
    };

    const end = () => {
      emit("end");    }
    return {
      changeGame,
      end,
    }
  }
}
</script>

<style scoped>

</style>