<template>
  <div class="flex flex-col items-center gap-6">
    <img src="../../../assets/placeholder.png" alt="Placeholder Image" :class="{'opacity-50': sliderValueLocale === 0}" class="object-contain border-4 w-48 h-48"
    />
    <input
        type="range"
        min="0"
        max="100"
        class=" w-full appearance-none h-4 bg-gray-300 rounded-lg outline-none mt-4"
        @input="updateSliderValue"
        :value="sliderValueLocale"
    >
  {{sliderValueLocale}}
  </div>

</template>

<script>


import {ref} from "vue";


export default {
  name: "ImageWithSlider",
  emits: ["changeSlider"],
  setup(props, {emit}) {
    const sliderValueLocale = ref(0)
    const updateSliderValue = (value) => {
      sliderValueLocale.value = value.target.value;
      emit("changeSlider", value.target.value);
    };
    return {
      updateSliderValue,
      sliderValueLocale
    };
  },
}
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  background-color: #3182ce; /* Replace with your desired color */
}

</style>