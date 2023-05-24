<template>
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
          <img src="../../src/assets/downArrow.png" alt="Placeholder Image" class="h-8 object-contain">

          <CreativeMode/>
        </div>

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

export default {
  name: 'HomeView',
  components: {
    TutorialMode,
    CreativeMode,
    ChallengeMode,
    LSection
  }
}
</script>
