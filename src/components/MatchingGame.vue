<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center gap-14">

    <div class="flex flex-col w-full p-12 k1:p-0 k1:w-3/5 gap-12 ">
    <div class="flex justify-between">
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-60 h-60">
      <div class="flex align-middle justify-center ">
        <ComparisonValue :value="slider1" :value2="slider2" />
      </div>
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-60 h-60">
    </div>
    <div class="flex justify-between">
      <ImageWithSlider @changeSlider="value => handleSlider(value, 'slider1')"/>
      <ImageWithSlider @changeSlider="value => handleSlider(value, 'slider2')"/>
    <ImageWithSlider/>
    </div>
    </div>

    <div class=" flex flex-col absolute right-12">
    <button @click="changeGame('TripleImageGame')" class="button self-center mt-8">Continue</button>
    <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
    </div>
</div>

</template>

<script>
import ImageWithSlider from "@/components/ImageWithSlider.vue";
import ComparisonValue from "@/components/ComparisonValue.vue";
import {ref} from "vue";

export default {
  name: "MatchingGame",
  emits: [
    'navigateToGame',
    'end'
  ],
  components: { ComparisonValue, ImageWithSlider},


  setup(props, {emit}) {
  const slider1 = ref(50);
  const slider2 = ref(50);

    const handleSlider2 = (value) => {
      console.log(value)
    };

    const handleSlider = (value, slider) => {
      if (slider === "slider1") {
        slider1.value = parseInt(value);
      } else {
        slider2.value = parseInt(value);
      }
    };


    const changeGame = (game) => {
      emit('navigateToGame', game);
    };



    const end = () => {
      emit("end");    }
    return {
      changeGame,
      end,
      slider1,
      slider2,
      handleSlider2,
      handleSlider
    }
  }
}
</script>

<style scoped>

</style>