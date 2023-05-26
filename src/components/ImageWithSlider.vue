<template>
  <div class="flex flex-col items-center gap-6">
    <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain border-4 w-48 h-48">
    <input
        type="range"
        min="0"
        max="100"
        class=" w-full appearance-none h-4 bg-gray-300 rounded-lg outline-none mt-4"
        @input="updateSliderValue"
    >  </div>
  {{sliderValue}}
</template>

<script>

export default {
  name: "ImageWithSlider",
  props: {
    sliderValue: {
      type: Number,
      required: true,
    },
  },
  setup(props, {emit}) {
    const updateSliderValue = (event) => {
      emit("change", event.target.value);
    };
    return {
      updateSliderValue
    };
  },
}
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  background-color: #3182ce; /* Replace with your desired color */
}

</style>