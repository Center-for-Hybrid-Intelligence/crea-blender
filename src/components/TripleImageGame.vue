<template>
        <div class=" absolute w-screen h-screen flex justify-center items-center gap-14">
          <div class="flex flex-col">
            <TripleImage /><TripleImage /><TripleImage />
          </div>
          <div class="flex justify-evenly h- flex-col">
            <BigImage/>
            <button @click="changeGame('MatchingGame')" class="button self-center mt-8">Continue</button>
            <button @click="end" class="buttonSecondary m-auto mt-4 ">Skip</button>
          </div>

        </div>
</template>

<script>
import {ref} from "vue";
import TripleImage from "@/components/TripleImage.vue";
import BigImage from "@/components/BigImage.vue";
export default {
  name: "TripleImageGame",
  components: {BigImage, TripleImage},
  emits: [
    'navigateToGame',
    'end'
  ],

  setup(props,{emit}) {
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
},
}
</script>

<style scoped>

</style>