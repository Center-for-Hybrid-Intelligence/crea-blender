<template>
  <h1>Best figure</h1>
  <div class=" flex flex-col absolute right-12">
    <button @click="changeGame('RecreateFigureGame')" class="button self-center mt-8">Continue</button>
    <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
  </div>
</template>

<script>

export default {
  name: "FindBestFigure",
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