<template>
  <LModeSelection :locked="false" class="w-72" :img="'tilesCreativeDigits.jpg'">
    <template #title>
      Creative
    </template>
    <template #body>
      Create as many Digits as possible
    </template>
    <template #button>
      <router-link to="tiles/creative/digits" >
        <TilesStartOverlay :buttonType="'buttonBlue'" />
      </router-link>
    </template>
  </LModeSelection>
</template>

<script>
import LModeSelection from "@/components/layout/LModeSelection.vue";
import TilesStartOverlay from "@/components/StartOverlay.vue";

export default {
  name: "CreativeMode",
  components: {TilesStartOverlay, LModeSelection}
}
</script>

<style scoped>

</style>