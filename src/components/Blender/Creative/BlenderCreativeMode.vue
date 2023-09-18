<template>
  <LModeSelection :locked="false" class="w-72" :img="'placeholder.png'">
    <template #title>
      Creative
    </template>
    <template #body>
      Create your own animals
    </template>
    <template #button>
      <router-link to="blender/creative" >
        <TilesStartOverlay :buttonType="'buttonOrange'" />
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