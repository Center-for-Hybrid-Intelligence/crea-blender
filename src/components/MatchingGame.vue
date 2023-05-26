<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center gap-14">
    <div class="flex flex-col w-full p-12 k1:p-0 k1:w-3/5 gap-12 ">
    <div class="flex justify-between">
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-60 h-60">
      <div class="flex align-middle justify-center ">
        <ComparisonValue :sliderValue="20" :value="slider1" :value2="slider2" />
      </div>
      <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-60 h-60">
    </div>
    <div class="flex justify-between">
      <ImageWithSlider @change="handleSlider1Change"/>
      <ImageWithSlider @change="handleSlider2Change"/>
    <ImageWithSlider @change="(value) => handleSlider2Change(value)"/>
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
import ComparisonValue from "@/components/ComparisonValue.vue";
import {ref} from "vue";

export default {
  name: "MatchingGame",
  components: {ComparisonValue, ImageWithSlider},


  setup(props, {emit}) {
  const slider1 = ref(10);
  const slider2 = ref(9);
  const slider3 = ref(0);

    const handleSlider1Change = (value) => {
      slider1.value = parseInt(value)
      console.log(value)
    };
    const handleSlider2Change = (value) => {
      slider2.value = parseInt(value)
      console.log(value)
    };

    const handleSlider3Change = (value) => {
      slider3.value = value;
      console.log(value)
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
      slider3,
      handleSlider1Change,
      handleSlider2Change,
      handleSlider3Change
    }
  }
}
</script>

<style scoped>

</style>