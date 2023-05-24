<template>
  <div class="lModeSelection">
    <div class="imageFrame bg-gray-200 rounded-t-lg w-full  object-contain">
      <slot name="image"></slot>
    </div>

    <div class="border-x-2 p-2">
      <div class="font-extrabold text-2xl">
        <slot name="title" class=""></slot>
      </div>
        <div class="text-md">
      <slot name="body"></slot>

        </div>
    </div>
    <div class="">
      <slot name="button" class=""></slot>
    </div>



  </div>


</template>

<script>
export default {
  name: "LModeSelection"
}
</script>

<style scoped>

</style>