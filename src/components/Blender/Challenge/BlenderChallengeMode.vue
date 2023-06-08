<template>
  <LModeSelection class="w-72">
    <template #image>
      <img src="../../../assets/placeholder.png" alt="Placeholder Image">
    </template>
    <template #title>
        Challenges
    </template>
    <template #body>
        Complete task in 60sec
    </template>
    <template #button>
      <router-link to="blender/challenges" >
        <div class="bg-green-500 w-full h-12 rounded-b-lg flex justify-center items-center cursor-pointer text-white ">
        Start
        </div>
      </router-link>
    </template>

  </LModeSelection>
</template>

<script>
import LModeSelection from "@/components/layout/LModeSelection.vue";

export default {
  name: "ChallengeMode",
  components: {LModeSelection}
}
</script>

<style scoped>

</style>