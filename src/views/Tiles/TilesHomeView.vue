<template>
  <div class="flex flex-col  min-h-screen w-screen justify-center  items-center">
    <h1 class="font-extrabold k1:text-7xl text-5xl py-12 text-tilesBlue font-custom">
      Crea. Tiles
    </h1>
  <div class="flex flex-col k1:flex-row gap-12 k1:gap-0 justify-evenly w-screen h-full pb-12 ">
    <div class="flex flex-col justify-between gap-4 items-center ">
      <TutorialModeChallenges/>
      <img src="../../../src/assets/downArrow.svg" alt="Down arrow" class="h-10  object-contain">
      <ChallengeMode/>
    </div>
    <div class="flex flex-col items-center justify-between gap-4">
      <TutorialModeCreative/>
      <div class="flex gap-24">
      <img src="../../../src/assets/downArrow.svg" alt="Down arrow" class="h-10 object-contain transform k1:rotate-45 rotate-0 ">
      <img src="../../../src/assets/downArrow.svg" alt="Down arrow" class="h-10 object-contain transform k1:-rotate-45 rotate-0 ">
      </div>
      <div class="flex flex-col k1:flex-row gap-8 justify-center">
      <CreativeModeDogs/>
      <CreativeModeDigits/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ChallengeMode from "@/components/Tiles/Challenge/TilesChallengeMode.vue";
import TutorialModeCreative from "@/components/Tiles/Creative/TilesTutorialModeCreative.vue";
import TutorialModeChallenges from "@/components/Tiles/Challenge/TilesTutorialModeChallenges.vue";
import CreativeModeDogs from "@/components/Tiles/Creative/TilesCreativeModeDogs.vue";
import CreativeModeDigits from "@/components/Tiles/Creative/TilesCreativeModeDigits.vue";

export default {
  name: "TilesHomeView",
  components: {CreativeModeDogs,CreativeModeDigits, TutorialModeCreative, ChallengeMode,TutorialModeChallenges}
}
</script>

<style scoped>

</style>