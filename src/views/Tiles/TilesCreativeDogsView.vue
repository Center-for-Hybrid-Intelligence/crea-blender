<template>
  <div class="w-screen h-screen">
  <CreativeInfo v-if="!challengeStarted" @start="startChallenge"/>
    <div :class="{ 'blur-2xl': !challengeStarted || challengeIsDone }">
    <div class="">
      <div class="w-full flex flex-col justify-center items-center absolute top-12 gap-2 ">
        <div @click="$refs.tileGrid.saveChain()"
             class="z-30 rounded-full border-white border-8 aspect-square h-28 w-28 group hover cursor-pointer">
          <img draggable="false" src="../../assets/camera.png" class="p-4" alt="">
          <div :class="{light: enabled, redLight: redEnabled }">
          </div>
        </div>
        <div class="" v-if="showError">
          <h1 v-if="showError" class="text-white opacity-100" :class=" { showError :  'opacity-100' } " :key="showError">Figure already exist in gallery</h1>
        </div>
      </div>

    </div>
    <div class="absolute right-12 bottom-12 flex items-center justify-center text-white text-3xl font-bold">
      <div v-if="timer >= 0">
        {{ timer }}
      </div>
      <div v-if="timer < 0 " class=" flex flex-col ">
        <button @click="endChallenge" class="buttonSecondary z-30">Finish</button>
      </div>
    </div>
    <div class="w-screen h-screen overflow-hidden group-hover:border-black group-hover:border-2 border-black p-12">
      <TileGrid
          class=" "
          :filledCount="10"
          :gridSize="10"
          :tileSize="60"
          :gap="8"
          :borderRadius="0.5"
          :border-size="0.3"
          :editable="true"
          ref="tileGrid"
          @save-chain="saveChain"
          :devMode="false"
      ></TileGrid>
    </div>
    <div @click="toggleGallery" draggable="false"
         class="fixed top-12 right-12 cursor-pointer transition-all hover:animate-wiggle z-30">
      <img draggable="false" class="w-20 h-20" src="@/assets/imageGallery.svg" alt="Open gallery">
      <div class="h-8 w-8 rounded-full bg-green-500 absolute -bottom-2 -right-2 justify-center align-middle flex">
        <h2 class="text-white text-xl self-center">
          {{ myChains.length }}
        </h2>
      </div>
    </div>
    </div>

    <TileGallery @close="toggleGallery" :createdShapes="myChains" :visible="showGallery"/>
  <CreativeDone v-if="challengeIsDone"/>
  </div>
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import TileGallery from "@/components/Tiles/Creative/TileGallery.vue";
import mp3File from '@/assets/audio/flash.mp3';
import CreativeInfo from "@/components/Tiles/Creative/TilesCreativeInfoDogs.vue";
import CreativeDone from "@/components/Tiles/Creative/TilesCreativeDone.vue";
import {ref} from "vue";

export default {
  name: "TilesCreativeDogsView",
  components: {CreativeDone, CreativeInfo, TileGallery, TileGrid},
  setup() {
    const myChains = ref([]);
    const showGallery = ref(false);
    const showError = ref(false);
    const toggleGallery = () => {
      showGallery.value = !showGallery.value;
    }
    const enabled = ref(false)
    const redEnabled = ref(false)
    const animatedChain = ref([]);
    const challengeStarted = ref(false);
    const challengeIsDone = ref(false);

    const startChallenge = () => {
      console.log("start");
      challengeStarted.value = true;
      startTimer()
    }
    const endChallenge = () => {
      console.log("end");
      challengeIsDone.value = true;
    }

    const timer = ref(5);

    const saveChain = (chain) => {
      animatedChain.value = chain; // Deep copy
      console.log(animatedChain)
      // Check if the chain already exists in the myChains.value array
      const chainExists = myChains.value.some((existingChain) => {
        return JSON.stringify(existingChain) === JSON.stringify(chain);
      });
      // If the chain doesn't already exist, add it to myChains.value, and log the changes
      if (!chainExists) {
        const audio = new Audio(mp3File);
        audio.play();
        enabled.value = true;
        setTimeout(() => {
          enabled.value = false;
        }, 500)
        myChains.value.push(JSON.parse(JSON.stringify(chain))); // Deep copy
      } else {
        redEnabled.value = true;
        showError.value = true;
        setTimeout(() => {
          redEnabled.value = false;
        }, 500)
        setTimeout(() => {
          showError.value = false;
        }, 1500)
        console.log(chain + " already exists in the array and won't be added again.");
      }
    };

    const startTimer = () => {
        const countdown = setInterval(() => {
          timer.value--;
          if (timer.value === -1) {
            clearInterval(countdown);
          }
        }, 1000);
    }

    return {
      startChallenge,
      endChallenge,
      challengeStarted,
      challengeIsDone,
      TileGrid,
      showGallery,
      toggleGallery,
      saveChain,
      myChains,
      mp3File,
      enabled,
      redEnabled,
      animatedChain,
      startTimer,
      timer,
      showError,
      CreativeDone,
      CreativeInfo,

    }
  }
}
</script>

<style scoped>

</style>