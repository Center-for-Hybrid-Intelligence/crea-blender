<template>
  <CreativeInfo v-if="!challengeStarted" @start="startChallenge"/>
  <CreativeGame  @end="endChallenge" />
  <CreativeDone v-if="challengeIsDone"/>
</template>

<script>
// @ is an alias to /src
import CreativeGame from "@/components/Tiles/Creative/TilesCreativeGameDigits.vue";
import CreativeInfo from "@/components/Tiles/Creative/TilesCreativeInfoDigits.vue";
import CreativeDone from "@/components/Tiles/Creative/TilesCreativeDone.vue";
import {ref} from "vue";
export default {
  name: 'TilesCreativeView',
  components: {
    CreativeDone,
    CreativeInfo,
    CreativeGame,
  },
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
