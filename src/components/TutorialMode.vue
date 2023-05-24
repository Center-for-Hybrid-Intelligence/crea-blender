<template>
  <LModeSelection class="w-60 self-center">
    <template #image>
      <img src="../../src/assets/tutorial.jpg" alt="Placeholder Image " class="rounded-t-lg">
    </template>
    <template #title>
      <div class="text-lg">
      Tutorial
        </div>
    </template>
    <template #body>
      <div class="text-xs">
      Understand the basis of the game

      </div>
    </template>
    <template #button>
      <router-link to="/challenges" >
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
  name: "TutorialMode",
  components: {LModeSelection}
}
</script>

<style scoped>

</style>