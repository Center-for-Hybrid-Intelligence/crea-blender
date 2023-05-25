<template>
        <div class=" absolute w-screen h-screen flex justify-center items-center gap-14">
          <div class="flex flex-col">
            <TripleImage /><TripleImage /><TripleImage />
          </div>
          <div class="flex justify-evenly h- flex-col">
            <BigImage/>
            <Button class="button m-auto mt-8">Skip</Button>
          </div>

        </div>
</template>

<script>
import {ref} from "vue";
import TripleImage from "@/components/TripleImage.vue";
import BigImage from "@/components/BigImage.vue";
export default {
  name: "TripleImageGame",
  components: {BigImage, TripleImage},
  setup() {
    const challengeStarted = ref(false);
    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
    }
    return {
      startChallenge,
      challengeStarted

    }
},
}
</script>

<style scoped>

</style>