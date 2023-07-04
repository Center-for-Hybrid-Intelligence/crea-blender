<template>
  <div class="w-screen h-screen">

    <ChallengeInfo v-if="!challengeStarted" @start="startChallenge"/>
    <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }">
        <component :is="currentGame" @navigateToGame="navigateToGame" @end="endChallenge"/>
    </div>
    <ChallengeDone v-if="challengeIsDone"/>
  </div>
</template>

<script>
import ChallengeInfo from "@/components/Blender/Challenge/BlenderChallengeInfo.vue";
import {ref} from "vue";
import TripleImageGame from "@/components/Blender/Challenge/TripleImageGame.vue";
import MatchingGame from "@/components/Blender/Creative/MatchingGame.vue";
import ChallengeDone from "@/components/Blender/Challenge/BlenderChallengeDone.vue";

export default {
  name: "ChallengesView",
  computed: {},
  components: {ChallengeDone, MatchingGame, TripleImageGame, ChallengeInfo},
  setup() {
    const challengeStarted = ref(false);
    const challengeIsDone = ref(false);
    const currentGame = ref('TripleImageGame');

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