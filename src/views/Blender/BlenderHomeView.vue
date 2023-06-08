<template>
  <div class="flex flex-col h-screen w-screen justify-center items-center gap-12">
    <h1 class="font-extrabold text-5xl ">
      Crea. Blender
    </h1>
  <div class="flex w-screen justify-evenly">
    <div class="flex flex-col gap-2">
      <TutorialModeChallenges/>
      <img src="../../assets/downArrow.png" alt="Down arrow" class="h-8 object-contain">
      <ChallengeMode/>

    </div>
    <div class="flex flex-col gap-2">
      <TutorialModeCreative/>
      <img src="../../assets/downArrow.png" alt="Down arrow" class="h-8 object-contain ">
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
