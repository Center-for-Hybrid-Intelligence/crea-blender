<template>
  <div :class="{ 'opacity-50': locked, 'hover': !locked }" class="lModeSelection sca relative ">
    <div v-if="locked" class="absolute flex items-center justify-center w-full h-full">
      <img src="../../../src/assets/locked.png" alt="Placeholder Image" class="w-24 object-contain">
    </div>
    <div class="imageFrame bg-gray-200 max-h-36 rounded-t-lg w-full object-contain">
      <slot name="image"></slot>
    </div>

    <div class="border-x-2 p-4">
      <div class="font-extrabold text-2xl">
        <slot name="title" class=""></slot>
      </div>
        <div class="text-md">
      <slot name="body"></slot>
        </div>
    </div>
    <div class="" >
      <slot name="button" class=""></slot>
    </div>



  </div>


</template>

<script>
export default {
  name: "LModeSelection",
  props: {
    locked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>