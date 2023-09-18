<template>
  <LInfo :show="show">
    <template #title>
      <h1 class=" !text-blenderOrange ">
        Well done!
        You have completed a challenge!
      </h1>
    </template>
    <template #body>
      <p class="text-center">
        Click below to the return to the game menu for
        even more challenges!
      </p>

    </template>

    <template #button>
      <router-link to="/">
        <button class="buttonOrange">
          Menu
        </button>
      </router-link>
    </template>

  </LInfo>

</template>

<script>
import LInfo from "@/components/layout/LInfo.vue";

export default {
  name: "ChallengeDone",
  components: {LInfo},
  props: {
    show:{
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>

</style>