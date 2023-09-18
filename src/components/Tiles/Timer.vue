<template>
  <div v-if="timer >= 0">
    <div class="bg-slate-700 p-2 w-32 text-center rounded-lg">
      {{ timer }} sec
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerComponent",
  props:{
    timer: {
      type: Number,

    }
  }
}
</script>

<style scoped>

</style>