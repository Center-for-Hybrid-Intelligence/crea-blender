<template>
  <ChallengeInfo @start="startChallenge"  :show="!challengeStarted"  />
  <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }" class="transition-all duration-500 ">
  <component :is="currentGame" @navigateToGame="navigateToGame" @end="endChallenge" :solution="solutionRecreate" :currentShape="currentShapeRecreate" />
  </div>
  <ChallengeDone :show="challengeIsDone" />
</template>


<script>
import ChallengeInfo from "@/components/Tiles/Challenge/TilesChallengeInfo.vue";
import ChallengeDone from "@/components/Tiles/Challenge/TilesChallengeDone.vue";
import FindBestFigureGame from "@/components/Tiles/Challenge/FindBestFigureGame.vue";
import RecreateFigureGame from "@/components/Tiles/Challenge/RecreateFigureGame.vue";
import {ref} from "vue";

export default {
  name: "TilesChallengeView",
  components: {ChallengeDone, ChallengeInfo, FindBestFigureGame, RecreateFigureGame},
  setup() {
    const challengeStarted = ref(false);
    const challengeIsDone = ref(false);
    const currentGame = ref('FindBestFigureGame');
    const currentShapeRecreate = ref(null);
    const solutionRecreate = ref(null);


    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
    }
    const endChallenge = () => {
      console.log("end");
      challengeIsDone.value = true;
    }
    const navigateToGame = (game, currentShape, solution) => {
      if (currentShape && solution){
        currentShapeRecreate.value = currentShape
        solutionRecreate.value = solution
      }
      currentGame.value = game;
    };

    return {
      startChallenge,
      endChallenge,
      challengeStarted,
      challengeIsDone,
      currentGame,
      navigateToGame
      ,currentShapeRecreate,
      solutionRecreate
    }
  }
}
</script>

<style scoped>

</style>
