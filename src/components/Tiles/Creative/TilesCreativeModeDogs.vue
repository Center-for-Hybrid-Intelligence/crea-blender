
<template>
  <LModeSelection :locked="false" class="w-72" :img="'tilesCreative1.jpg'">
    <template #title>
      Creative
    </template>
    <template #body>
      Create your own animals
    </template>
    <template #button>
      <router-link to="tiles/creative/dogs" >
        <TilesStartOverlay :buttonType="'buttonBlue'" />
      </router-link>
    </template>

  </LModeSelection>
</template>

<script>
import LModeSelection from "@/components/layout/LModeSelection.vue";
import TilesStartOverlay from "@/components/StartOverlay.vue";

export default {
  name: "TilesCreativeModeDogs",
  components: {TilesStartOverlay, LModeSelection}
}
</script>

<style scoped>

</style>
