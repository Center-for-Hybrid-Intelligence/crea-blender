<template>
  <LModeSelection :locked="false" class="w-72">
    <template #image>
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image">
    </template>
    <template #title>
      Creative
    </template>
    <template #body>
      Create your own animals
    </template>
    <template #button>
      <router-link to="/creative" >
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
  name: "CreativeMode",
  components: {LModeSelection}
}
</script>

<style scoped>

</style>