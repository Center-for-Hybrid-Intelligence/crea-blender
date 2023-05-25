<template>
  <LInfo>
    <template #title>
      <h1 class="self-center">
        Well done!
        You have completed a challenge!
      </h1>
    </template>
    <template #body>
          <p>
            Click below to the return to the game menu
            even more challenges!  </p>

    </template>

    <template #button>
      <router-link to="/" >
      <button class="button">
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
  components: {LInfo}
}
</script>

<style scoped>

</style>