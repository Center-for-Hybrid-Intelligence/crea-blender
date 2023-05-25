<template>
      <ChallengeInfo v-if="!challengeStarted" @start="startChallenge"/>
      <div class="m-auto">
        <component :is="currentGame" v-if="challengeStarted" @navigateToGame="navigateToGame" @end="endChallenge" />

<!--
        <TripleImageGame v-if="challengeStarted && currentGame === 'tripleImage'" @navigateToGame="navigateToGame"  />
-->
      </div>
  <ChallengeDone v-if="challengeIsDone"/>

</template>

<script>
import ChallengeInfo from "@/components/ChallengeInfo.vue";
import {ref} from "vue";
import TripleImageGame from "@/components/TripleImageGame.vue";
import MatchingGame from "@/components/MatchingGame.vue";
import ChallengeDone from "@/components/ChallengeDone.vue";

export default {
  name: "ChallengesView",
  computed: {
  },
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