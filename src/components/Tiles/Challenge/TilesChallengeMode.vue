<template>
  <LModeSelection class="w-72" :img="'tiles.jpg'">
    <template #title>
        Challenges
    </template>
    <template #body>
        Complete task in 60sec
    </template>
    <template #button>
      <router-link to="tiles/challenges" >
        <TilesStartOverlay :buttonType="'buttonBlue'" />
      </router-link>
    </template>

  </LModeSelection>
</template>

<script>
import LModeSelection from "@/components/layout/LModeSelection.vue";
import TilesStartOverlay from "@/components/StartOverlay.vue";

export default {
  name: "ChallengeMode",
  components: {TilesStartOverlay, LModeSelection}
}
</script>

<style scoped>

</style>