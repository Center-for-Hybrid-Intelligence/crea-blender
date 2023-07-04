<template>
    <div class="absolute z-50 k1:p-12 p-6 w-11/12 k1:w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 backdrop-blur-2xl backdrop-brightness-125 rounded-3xl shadow-gray-700 shadow-2xl z-50 overflow-x-hidden  h-5/6">
      <div class="h-full flex flex-col justify-between">
      <div class="text-center heading1">
          <slot name="title"></slot>
      </div>
      <div class="pb-12">
          <slot name="body"></slot>
      </div>
      <div class="flex justify-center">
          <slot name="button"></slot>

      </div>

      </div>
  </div>
</template>

<script>
export default {
  name: "LInfo"
}
</script>

<style scoped>

</style>