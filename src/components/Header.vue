<template>
  <div class="flex justify-between z-50 absolute w-screen top-0 p-8">
    <router-link to="/">
      <img src="../assets/home.png" alt="Home"
           class="w-12 h-12 object-contain cursor-pointer"
    /></router-link>



    <div class="flex gap-4">

    <img src="../assets/danish.jpg" alt="Home"
    class="h-8 cursor-pointer  object-contain "
    />
    <img src="../assets/english.jpg" alt="Home"
    class=" h-8 cursor-pointer object-contain"
    />
    </div>
  </div>

</template>

<script>
export default {
  name: "Header-"
}
</script>

<style scoped>

</style>