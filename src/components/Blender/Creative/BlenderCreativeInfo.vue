<template>
  <LInfo :show="show">
    <template #title>
      <h1 class="self-center !text-blenderOrange">
        Creative mode
      </h1>
    </template>
    <template #body>
      <div class="flex gap-8 flex-col">

      <div class="flex w-full">
        <div class="w-1/5 flex align-middle">
          <img src="../../../assets/bearFeet.png" class="w-12 object-contain" alt="Home">
        </div>
        <div class="w-4/5 flex items-center">
          <p>
            Come up with as many original and creative animal-like images as you can. "Creative" animal-like images thet strike as people clever, uncommon, humorous, innovative or different          </p>
        </div>

      </div>
      <div class="flex w-full ">
        <div class="w-1/5 flex align-middle">
          <img src="../../../assets/hourglass.png" class="w-12 object-contain" alt="Home">
        </div>
        <div class="w-4/5 flex items-center">
          <p>
            You have unlimited time to finish this task
          </p>
        </div>
      </div>
      </div>

    </template>

    <template #button>
      <button @click="start" class="buttonOrange">
        Start
      </button>
    </template>

  </LInfo>
</template>

<script>
import LInfo from "@/components/layout/LInfo.vue";

export default {
  name: "CreativeInfo",
  emits: [
    'start'
  ],
  components: {LInfo},
  props: {
    show:{
      type: Boolean,
      default: false,
    }
  },
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