<template>

  <CreativeInfo v-if="!challengeStarted" @start="startChallenge"/>
  <CreativeGame  @end="endChallenge" />
  <CreativeDone v-if="challengeIsDone"/>

</template>

<script>
import CreativeDone from "@/components/CreativeDone.vue";
import CreativeInfo from "@/components/CreativeInfo.vue";
import CreativeGame from "@/components/CreativeGame.vue";
import {ref} from "vue";
export default {
  name: "CreativeView'",
  components: {CreativeGame, CreativeInfo, CreativeDone},
  setup() {
    const challengeStarted = ref(false);
    const challengeIsDone = ref(false);

    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
    }
    const endChallenge = () => {
      console.log("end");
      challengeIsDone.value = true;
    }

    return {
      startChallenge,
      endChallenge,
      challengeStarted,
      challengeIsDone,
    }
  }
}
</script>

<style scoped>

</style>