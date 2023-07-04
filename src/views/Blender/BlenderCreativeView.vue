<template>

  <CreativeInfo v-if="!challengeStarted" @start="startChallenge"/>
    <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }">

  <CreativeGame  @end="endChallenge" />
   </div>
  <CreativeDone v-if="challengeIsDone"/>

</template>

<script>
import CreativeDone from "@/components/Blender/Creative/BlenderCreativeDone.vue";
import CreativeInfo from "@/components/Blender/Creative/BlenderCreativeInfo.vue";
import CreativeGame from "@/components/Blender/Creative/BlenderCreativeGame.vue";
import {ref} from "vue";
export default {
  name: "CreativeView'",
  components: {CreativeGame, CreativeInfo, CreativeDone},
  setup() {
    const challengeStarted = ref(false);
    const challengeIsDone = ref(false);

    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
    }
    const endChallenge = () => {
      console.log("end");
      challengeIsDone.value = true;
    }

    return {
      startChallenge,
      endChallenge,
      challengeStarted,
      challengeIsDone,
    }
  }
}
</script>

<style scoped>

</style>