<template>
  <div :class="{ 'opacity-50': locked, 'hover': !locked }" class="lModeSelection sca relative ">
<!--
    <router-link :to="path">
-->
    <div v-if="locked" class="absolute flex items-center justify-center w-full h-full">
      <img src="../../../src/assets/locked.png" alt="Placeholder Image" class="w-24 object-contain ">
    </div>
    <div class="imageFrame bg-gray-200 h-52 rounded-t-lg w-full">
        <img :src="require(`../../assets/${img}`)" alt="Game selection" class="rounded-t-lg object-cover h-full">
    </div>

    <div class="p-2 px-4 bg-black  absolute w-full bottom-12 bg-opacity-50">
      <div class="font-bold text-2xl text-white">
        <slot name="title" class=""></slot>
      </div>
        <div class="text-md  text-white">
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
    },
    img: {
      type:String,
      required: true
    },
   /* path: {
      type: String,
      required: true
    },*/
  }
}
</script>

<style scoped>

</style>