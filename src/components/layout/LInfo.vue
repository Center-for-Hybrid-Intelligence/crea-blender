<template>
  <div class="absolute w-screen h-screen flex justify-center items-center z-40">
    <div class="border-4 border-black bg-gray-200 rounded-lg w-full k1:w-1/2 p-8 px-16">
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