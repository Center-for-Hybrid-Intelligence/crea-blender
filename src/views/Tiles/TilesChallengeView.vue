<template>
  <ChallengeInfo @start="startChallenge"  :class="{ 'opacity-0 scale-50': challengeStarted }" class="opacity-100 scale-100 transition-all duration-500 " />
  <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }" class="transition-all duration-500 ">
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
