<template>
      <ChallengeInfo v-if="!challengeStarted" @start="startChallenge"/>
      <div class="m-auto">
        <div v-if="challengeStarted" ><TripleImageGame/></div>
      </div>

</template>

<script>
import ChallengeInfo from "@/components/ChallengeInfo.vue";
import {ref} from "vue";
import TripleImageGame from "@/components/TripleImageGame.vue";

export default {
  name: "ChallengesView",
  components: {TripleImageGame, ChallengeInfo},
  setup() {
    const challengeStarted = ref(false);
    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
    }
    return {
      startChallenge,
      challengeStarted

    }
  }
}
</script>

<style scoped>

</style>