<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center">
    <TilesArray></TilesArray>
    <div class=" flex flex-col absolute right-12">
      <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
    </div>
  </div>
</template>

<script>
import TilesArray from "@/components/TilesArray.vue";

export default {
  name: "CreativeGame",
  emits: [
    'end'
  ],
  components: {TilesArray},
  setup(props, {emit}) {

    const end = () => {
      console.log(end, "asd")
      emit("end");
    }
    return {
      end,
    }

  }
}
</script>

<style scoped>

</style>