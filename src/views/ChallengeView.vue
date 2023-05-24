<template>
      <ChallengeInfo/>
  <LSection>
    <template #body>
    </template>
  </LSection>
</template>

<script>
import LSection from "@/components/layout/LSection.vue";
import ChallengeInfo from "@/components/ChallengeInfo.vue";

export default {
  name: "ChallengesView",
  components: {ChallengeInfo, LSection}
}
</script>

<style scoped>

</style>