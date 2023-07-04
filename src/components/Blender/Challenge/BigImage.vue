<template>
  <div class="bigImage">
    <img class="w-64" :src="bigImage || 'https://placehold.co/400'" alt="">
  </div>
</template>

<script>
export default {
  name: "BigImage",
  props: {
    bigImage: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped>

</style>