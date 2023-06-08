<template>
  <h1>Recreate Figure</h1>
  <div class="flex justify-evenly h- flex-col">
    <button @click="changeGame('FindBestFigureGame')" class="button self-center mt-8">Continue</button>
    <button @click="end" class="buttonSecondary m-auto mt-4 ">Skip</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "RecreateFigure",
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