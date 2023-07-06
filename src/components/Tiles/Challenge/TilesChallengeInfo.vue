<template>
  <LInfo :show="show" >
    <template #title>
      <h1 class="self-center">
        Challenge mode
      </h1>
    </template>
    <template #body>
      <div class="flex w-full">
        <div class="flex gap-8 flex-col">
          <div class="flex w-full">
            <div class="w-1/5 flex align-middle">
              <img src="../../../assets/bearFeet.png" class="w-12 object-contain" alt="Home">
            </div>
            <div class="w-4/5 flex items-center">
              <p>
                Select a shape from the four small shapes on the left from which you think it woll take the least amount of moves to recreate the target shape on the right. Then recreate the target shape you see on the right.
              </p>
            </div>

          </div>
          <div class="flex w-full ">
            <div class="w-1/5 flex align-middle">
              <img src="../../../assets/hourglass.png" class="w-12 object-contain" alt="Home">
            </div>
            <div class="w-4/5 flex items-center">
              <p>
                You have 30 seconds to pick the best shape and 1 min to recreate the target
              </p>
            </div>
          </div>
          <div class="flex w-full ">
            <div class="w-1/5 flex align-middle">
              <img src="../../../assets/hourglass.png" class="w-12 object-contain" alt="Home">
            </div>
            <div class="w-4/5 flex items-center">
              <p>
                Complete 6 challenges
              </p>
            </div>
          </div>
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
  name: "TilesChallengeInfo",
  emits: [
    'start'
  ],
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
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