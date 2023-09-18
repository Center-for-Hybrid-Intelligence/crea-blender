<template>
  <LModeSelection class="w-72" :img="'placeholder.png'">
<!--    <template #image>
      <img src="../../../assets/placeholder.png" alt="Placeholder Image">
    </template>-->
    <template #title>
        Challenges
    </template>
    <template #body>
        Complete task in 60sec
    </template>
    <template #button>
      <router-link to="blender/challenges" >
        <TilesStartOverlay :buttonType="'buttonOrange'" />
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