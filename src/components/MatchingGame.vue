<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center gap-14">
    <div class="flex flex-col w-full p-12 k1:p-0 k1:w-3/5 gap-12 ">
    <div class="flex justify-between">
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-60 h-60">
      <div class="flex align-middle justify-center ">
        <h1 class="self-center font-extrabold text-7xl">
        =
        </h1>
      </div>
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-60 h-60">
    </div>
    <div class="flex justify-between">
    <ImageWithSlider/>
    <ImageWithSlider/>
    <ImageWithSlider/>
    </div>
    </div>
    <div class=" flex flex-col absolute right-12">

    <Button @click="changeGame('TripleImageGame')" class="button self-center mt-8">Continue</Button>
    <Button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</Button>
    </div>
</div>
</template>

<script>
import ImageWithSlider from "@/components/ImageWithSlider.vue";

export default {
  name: "MatchingGame",
  components: {ImageWithSlider},


  setup(props, {emit}) {

    const changeGame = (game) => {
      emit('navigateToGame', game);
    };

    const end = () => {
      emit("end");    }
    return {
      changeGame,
      end,
    }
  }
}
</script>

<style scoped>

</style>