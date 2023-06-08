<template>
  <CreativeInfo v-if="!challengeStarted" @start="startChallenge"/>
  <CreativeGame  @end="endChallenge" />
  <CreativeDone v-if="challengeIsDone"/>
</template>

<script>

import CreativeInfo from "@/components/Tiles/Creative/TilesCreativeInfoDogs.vue";
import CreativeGame from "@/components/Tiles/Creative/TilesCreativeGameDogs.vue";
import CreativeDone from "@/components/Tiles/Creative/TilesCreativeDone.vue";
import {ref} from "vue";

export default {
  name: "TilesCreativeDogsView",
  components: {CreativeDone, CreativeGame, CreativeInfo},
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