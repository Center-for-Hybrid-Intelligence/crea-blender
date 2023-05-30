<template>

  <UserInfo/>
  <div class="flex justify-between z-50 absolute top-0 right-0 p-8">
    <div class="flex gap-4">
      <img src="../assets/danish.jpg" alt="Home"
           class="h-8 cursor-pointer  object-contain  hover"
      />
      <img src="../assets/english.jpg" alt="Home"
           class=" h-8 cursor-pointer object-contain hover"
      />
    </div>
  </div>
  <div class="flex pt-20 px-12 justify-evenly">
    <div class="flex flex-col gap-2">
      <TutorialModeChallenges/>
      <img src="../../src/assets/downArrow.png" alt="Down arrow" class="h-8 object-contain">
      <ChallengeMode/>

    </div>
    <div class="flex flex-col gap-2">
      <TutorialModeCreative/>
      <img src="../../src/assets/downArrow.png" alt="Down arrow" class="h-8 object-contain ">
      <CreativeMode/>
    </div>

  </div>
  <div class="absolute bottom-0 right-0 p-8">
    <router-link to="/about">
      <img src="../../src/assets/ScienceAtHome.png" alt="Science at home"
           class="h-16 cursor-pointer object-contain hover">
    </router-link>


  </div>


</template>

<script>
// @ is an alias to /src

import ChallengeMode from "@/components/ChallengeMode.vue";
import CreativeMode from "@/components/CreativeMode.vue";
import TutorialModeChallenges from "@/components/TutorialModeChallenges.vue";
import UserInfo from "@/components/UserInfo.vue";
import TutorialModeCreative from "@/components/TutorialModeCreative.vue";

export default {
  name: 'HomeView',
  components: {
    TutorialModeCreative,
    UserInfo,
    TutorialModeChallenges,
    CreativeMode,
    ChallengeMode
  }
}
</script>
