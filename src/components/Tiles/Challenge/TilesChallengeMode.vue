<template>
  <LModeSelection class="w-72" :img="'tiles.jpg'">
    <template #title>
        Challenges
    </template>
    <template #body>
        Complete task in 60sec
    </template>
    <template #button>
      <router-link to="tiles/challenges" >
<!--        <div class="bg-green-500 w-full h-12 rounded-b-lg flex justify-center items-center cursor-pointer text-white ">
        Start
        </div>-->
        <div
            class=" w-full hover:backdrop-brightness-75 transition-all duration-300 overflow-hidden h-full group absolute inset-0 rounded-lg flex justify-center items-center cursor-pointer text-white ">
          <div class="opacity-0 transition-all duration-300 group-hover:opacity-100 bg-tilesBlue text-neutral px-6 py-2 rounded-full">
            <h1 class="text-gray-800 text-3xl">
              Start
            </h1>
          </div>
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