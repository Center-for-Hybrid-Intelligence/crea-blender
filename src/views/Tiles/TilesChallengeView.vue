<template>
  <ChallengeInfo @start="startChallenge"  :show="!challengeStarted"  />
  <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }" class="transition-all duration-500 ">
  <component :is="currentGame" @endChallenge="endChallenge" @increment="increment"  :roundNumber="roundNumber"
             :start="challengeStarted" @navigateToGame="navigateToGame" @end="endChallenge" :solution="solutionRecreate" :solutionInfo="solutionInfoRecreate" :currentShape="currentShapeRecreate" />
  </div>
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
    const roundNumber = ref(1);
    const currentGame = ref('FindBestFigureGame');
    const currentShapeRecreate = ref(null);
    const solutionRecreate = ref(null);
    const solutionInfoRecreate = ref(null);

    const startChallenge = () => {
      challengeStarted.value = true;
    }
/*    const endChallenge = () => {
      challengeIsDone.value = true;
    }*/
    const increment = () => {
      roundNumber.value += 1;
      console.log(roundNumber.value, "in here " )
    }
    const navigateToGame = (game, currentShape, solution, solutionInfo) => {
      if (currentShape && solution){
        currentShapeRecreate.value = currentShape
        solutionRecreate.value = solution
        solutionInfoRecreate.value = solutionInfo
      }
      currentGame.value = game;
    };

    return {
      startChallenge,
      challengeStarted,
      currentGame,
      navigateToGame
      ,currentShapeRecreate,
      solutionRecreate,
      solutionInfoRecreate,
      increment,
      roundNumber
    }
  }
}
</script>

<style scoped>

</style>
