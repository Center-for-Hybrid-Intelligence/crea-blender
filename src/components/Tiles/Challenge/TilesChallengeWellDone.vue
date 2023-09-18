<template>
  <LInfo :show="show">
    <template #title>
      <h1 class="self-center">
        Well done! <br>
        You have completed a challenge in
        <span class="text-green-500">
        {{ dropCountAmount }} Moves
        </span>
      </h1>

    </template>
    <template #body>
      <p class="text-center ">
        Click below to continue to the next challenge  </p>

    </template>

    <template #button>
      <div @click="handleClick" >
        <button class="buttonBlue">
          Continue
        </button>
      </div>
    </template>

  </LInfo>
</template>

<script>
import LInfo from "@/components/layout/LInfo.vue";

export default {
  name: "TilesChallengeWellDone",
  components: {LInfo},
  props: {
    show:{
      type: Boolean,
      default: false,
    },
    dropCountAmount:{
      type: Number,
      default: 0,
    }
  },
  setup(_, {emit}){
    const handleClick = () => {
      emit('increment');
      emit('navigateToGame', 'FindBestFigureGame')
    };

    return {
      handleClick
    }
  }

}
</script>

<style scoped>

</style>