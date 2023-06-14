<template>
  <LModeSelection :locked="false" class="w-72" :img="'placeholder.png'">
    <template #title>
      Creative
    </template>
    <template #body>
      Create as many Digits as possible
    </template>
    <template #button>
      <router-link to="tiles/creative/digits" >
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