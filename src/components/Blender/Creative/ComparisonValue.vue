<template>
  <div class="flex flex-col">
<!--THis is not finished but I have to fix the percentage bar-->
  <div class="flex justify-center">{{ calculated.toFixed(2) }}% match</div>
    <div class=" h-4 w-64 relative bg-gray-300">
      <div :style="{ width: (calculated+'%') }" class="h-4 absolute top-0 left-0 bg-blue-500"></div>
    </div>
  <h1 class="self-center font-extrabold text-7xl">
    =
  </h1>
  </div>
</template>

<script>
import {computed} from "vue";
export default {
  name: "ComparisonValue",
  props: {
    value: {
      type: Number,
      default: 50,
    },
    value2: {
      type: Number,
      default: 50,
    },
  },
  setup(props) {
    const value = computed(() => props.value);
    const value2 = computed(() => props.value2);
   const calculated = computed( () => 100*(1- Math.abs(value.value - value2.value) / ((value.value + value2.value))));
    return {
      calculated,
    };
  },
}
</script>

<style scoped>

</style>