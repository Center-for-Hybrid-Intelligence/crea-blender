<template>
  <div class="flex flex-col h-screen w-screen justify-center items-center gap-12">
    <h1 class="font-extrabold text-5xl ">
      Crea. Tiles
    </h1>
  <div class="flex justify-evenly w-screen  ">
    <div class="flex flex-col gap-2">
      <TutorialModeChallenges/>
      <img src="../../../src/assets/downArrow.png" alt="Down arrow" class="h-8 object-contain">
      <ChallengeMode/>
    </div>
    <div class="flex flex-col gap-2">
      <TutorialModeCreative/>
      <img src="../../../src/assets/downArrow.png" alt="Down arrow" class="h-8 object-contain ">
      <div class="flex gap-8">
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