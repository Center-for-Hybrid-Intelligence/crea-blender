<template>
  <LModeSelection class="w-60 self-center" :img="'tutorial.jpg'">
    <template #title>
      <div class="text-lg">
      Tutorial
        </div>
    </template>
    <template #body>
      <div class="text-xs">
      Understand the basis of the game

      </div>
    </template>
    <template #button>
      <router-link to="/blender/challenges" >
        <TilesStartOverlay :buttonType="'buttonOrange'" />
      </router-link>
    </template>

  </LModeSelection>
</template>

<script>
import LModeSelection from "@/components/layout/LModeSelection.vue";
import TilesStartOverlay from "@/components/StartOverlay.vue";

export default {
  name: "TutorialMode",
  components: {TilesStartOverlay, LModeSelection},
}
</script>

<style scoped>

</style>