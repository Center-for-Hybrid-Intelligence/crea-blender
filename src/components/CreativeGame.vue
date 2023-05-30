<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center gap-14">
  <Button @click="end" class="buttonSecondary m-auto mt-4 ">Done</Button>
</div>
</template>

<script>
export default {
  name: "CreativeGame",
  setup(props,{emit}){

    const end = () => {
      emit("end");
    }
    return{
      end,
    }

  }
}
</script>

<style scoped>

</style>