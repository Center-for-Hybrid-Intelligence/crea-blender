<template>
  <ChallengeInfo v-if="!challengeStarted" @start="startChallenge"/>
  <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }">
  <component :is="currentGame" @navigateToGame="navigateToGame" @end="endChallenge"/>
  </div>
  <ChallengeDone v-if="challengeIsDone"/>
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

    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
    }
    const endChallenge = () => {
      console.log("end");
      challengeIsDone.value = true;
    }
    const navigateToGame = (game) => {
      currentGame.value = game;
    };

    return {
      startChallenge,
      endChallenge,
      challengeStarted,
      challengeIsDone,
      currentGame,
      navigateToGame
    }
  }
}
</script>

<style scoped>

</style>
