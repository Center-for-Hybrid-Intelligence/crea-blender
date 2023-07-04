<template>
  <LInfo>
    <template #title>
      <h1 class="self-center">
      Challenge mode
      </h1>
    </template>
    <template #body>
      <div class="flex w-full">
        <div class="w-1/5">
        <img src="../../../assets/hourglass.png" class="w-12" alt="Home">
        </div>
        <div class="w-4/5">
          <p>
          Choose the set of images you think will create the target image. You have 30 seconds.
          </p>
        </div>

      </div>
    </template>

    <template #button>
      <button @click="start" class="button">
        Start
      </button>
    </template>

  </LInfo>
</template>

<script>
import LInfo from "@/components/layout/LInfo.vue";

export default {
  name: "ChallengeInfo",
  emits: [
    'start'
  ],
  components: {LInfo},
  setup(props, {emit}) {
    const start = () => {
      emit("start");    }
    return {
      start
    }
  }
}
</script>

<style scoped>

</style>