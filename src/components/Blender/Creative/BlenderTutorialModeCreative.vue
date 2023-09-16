<template>
  <LModeSelection class="w-60 self-center" :img="'tutorial.jpg'">

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
      <router-link to="blender/creative">
        <!--        bg-[#89f2f2]-->
        <!--        <div class="bg-green-500 w-full h-12 rounded-b-lg flex justify-center items-center cursor-pointer text-white ">
                  Start
                </div>-->
        <div
            class=" w-full hover:backdrop-brightness-75 transition-all duration-300 overflow-hidden h-full group absolute inset-0 rounded-lg flex justify-center items-center cursor-pointer text-white ">
          <div
              class="opacity-0 transition-all duration-300 group-hover:opacity-100 bg-blenderOrange text-neutral px-6 py-2 rounded-full">
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
  name: "TutorialModeCreative",
  components: {LModeSelection},

}
</script>

<style scoped>

</style>