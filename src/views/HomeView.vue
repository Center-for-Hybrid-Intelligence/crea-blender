<template>

  <UserInfo/>
  <LSection>
    <template #body>
      <div class="flex justify-evenly">
        <div class="flex flex-col gap-2">
            <TutorialMode/>
          <img src="../../src/assets/downArrow.png" alt="Placeholder Image" class="h-8 object-contain">
          <ChallengeMode/>

        </div>
        <div class="flex flex-col gap-2">
            <TutorialMode/>
          <img src="../../src/assets/downArrow.png" alt="Placeholder Image" class="h-8 object-contain ">
          <CreativeMode/>
        </div>

      </div>
      <div class="absolute bottom-0 right-0 p-8">
        <router-link to="/about" >
          <img src="../../src/assets/ScienceAtHome.png" alt="Placeholder Image" class="h-16 cursor-pointer object-contain hover">
        </router-link>

      </div>


    </template>
  </LSection>
</template>

<script>
// @ is an alias to /src

import LSection from "@/components/layout/LSection.vue";
import ChallengeMode from "@/components/ChallengeMode.vue";
import CreativeMode from "@/components/CreativeMode.vue";
import TutorialMode from "@/components/TutorialMode.vue";
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: 'HomeView',
  components: {
    UserInfo,
    TutorialMode,
    CreativeMode,
    ChallengeMode,
    LSection
  }
}
</script>
