<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center">
    <div class=" flex flex-col absolute right-12">
      <button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "CreativeGame",
  emits: [
    'end'
  ],
  components: {},
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