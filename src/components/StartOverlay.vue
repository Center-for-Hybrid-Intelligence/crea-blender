<template>
  <div
      class=" w-full hover:backdrop-brightness-50 transition-all duration-300  h-full group absolute inset-0 rounded-lg flex justify-center items-center cursor-pointer text-white ">
    <div class=" opacity-0 transition-all duration-300 group-hover:opacity-100 " :class="buttonType">
      <h1 class="text-gray-800 text-3xl">
        Play
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TilesStartOverlay",
  props:{

    buttonType:{
      type:String
    }
  }
}
</script>

<style scoped>

</style>