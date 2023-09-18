<template>

  <CreativeInfo @start="startChallenge" :show="!challengeStarted"/>
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
          <h1 v-if="showError" class="text-white opacity-100" :class=" { showError :  'opacity-100' } "
              :key="showError">Figure already exist in gallery</h1>
        </div>
      </div>


    </div>
    <div class="fixed z-50 right-12 bottom-12 flex items-center justify-center text-white text-3xl font-bold">
      <TimerComponent :timer="timer"/>
      <div v-if="timer < 0 " class=" flex flex-col ">
        <button @click="endChallenge" class="buttonBlue">Finish</button>
      </div>

    </div>
    <div class="w-screen h-screen overflow-hidden group-hover:border-black group-hover:border-2 border-black p-12">
      <TileGrid
          class=" "
          :filledCount="10"
          :gridSize="12"
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
    <TileGalleryImage :my-chains="myChains" :toggle-gallery="toggleGallery"/>
    <TileGallery @close="toggleGallery" :createdShapes="myChains" :visible="showGallery"/>
  </div>
  <CreativeDone :show="challengeIsDone"/>


</template>
<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";
import TileGallery from "@/components/Tiles/Creative/TileGallery.vue";
import mp3File from '@/assets/audio/flash.mp3';
import CreativeInfo from "@/components/Tiles/Creative/TilesCreativeInfoDigits.vue";
import CreativeDone from "@/components/Tiles/Creative/TilesCreativeDone.vue";
import TimerComponent from "@/components/Tiles/Timer.vue";
import TileGalleryImage from "@/views/Tiles/TileGalleryImage.vue";

export default {
  components: {
    TileGalleryImage,
    TimerComponent,
    TileGallery,
    TileGrid,
    CreativeDone,
    CreativeInfo
  },
  name: "TilesCreativeDigitsView",
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
      startTimer()
      challengeStarted.value = true;
    }
    const endChallenge = () => {
      challengeIsDone.value = true;
    }
    const timer = ref(120);

    const saveChain = (chain) => {
      animatedChain.value = chain; // Deep copy
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
      startChallenge,
      endChallenge,
      challengeStarted,
      challengeIsDone
    };
  },
};
</script>

<style scoped>


</style>