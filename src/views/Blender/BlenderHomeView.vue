<template>
  <div class="flex flex-col  min-h-screen w-screen justify-center  items-center">

    <h1 class="font-extrabold k1:text-7xl text-5xl py-12 text-blenderOrange  font-custom">
      Crea. Blender
    </h1>

    <div class="flex flex-col k1:flex-row gap-12 k1:gap-0 justify-evenly w-screen h-full pb-12 ">
      <div class="flex flex-col justify-between gap-4 items-center ">
        <TutorialModeChallenges/>
        <img src="../../assets/downArrow.svg" alt="Down arrow" class="h-10 object-contain">
        <ChallengeMode/>

      </div>
      <div class="flex flex-col justify-between gap-4 items-center ">
        <TutorialModeCreative/>
        <img src="../../assets/downArrow.svg" alt="Down arrow" class="h-10 object-contain ">
        <CreativeMode/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ChallengeMode from "@/components/Blender/Challenge/BlenderChallengeMode.vue";
import CreativeMode from "@/components/Blender/Creative/BlenderCreativeMode.vue";
import TutorialModeChallenges from "@/components/Blender/Challenge/BlenderTutorialModeChallenges.vue";
import TutorialModeCreative from "@/components/Blender/Creative/BlenderTutorialModeCreative.vue";

export default {
  name: 'BlenderHomeView',
  components: {
    TutorialModeCreative,
    TutorialModeChallenges,
    CreativeMode,
    ChallengeMode
  }
}
</script>
