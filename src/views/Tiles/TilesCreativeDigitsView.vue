<template>

  <div class="">
    <div class="w-full flex flex-col justify-center items-center absolute top-12 gap-2 ">
      <div @click="$refs.tileGrid.saveChain()"
           class="z-50 rounded-full border-white border-8 aspect-square h-28 w-28 group hover cursor-pointer">
        <img draggable="false" src="../../assets/camera.png" class="p-4" alt="">
        <div :class="{light: enabled, redLight: redEnabled }">
        </div>
      </div>
      <div class="" v-if="showError">
      <h1 v-if="showError" class="text-white opacity-100" :class=" { showError :  'opacity-100' } " :key="showError">Figure already exist in gallery</h1>
      </div>
    </div>


  </div>
  <div class="absolute right-36 bottom-36 flex items-center justify-center text-white text-3xl font-bold">
    <button v-if="timer === 0" @click="startTimer()" class="button buttonSecondary ">
      Start
    </button>
    <div v-if="timer > 0">
      {{ timer }}
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
       class="fixed top-12 right-12 cursor-pointer transition-all hover:animate-wiggle z-50">
    <img draggable="false" class="w-24 h-24" src="@/assets/imageGallery.svg" alt="Open gallery">
    <div class="h-8 w-8 rounded-full bg-green-500 absolute -bottom-2 -right-2 justify-center align-middle flex">
      <h2 class="text-white text-xl self-center">
        {{ myChains.length }}
      </h2>
    </div>
  </div>

  <TileGallery @close="toggleGallery" :createdShapes="myChains" :visible="showGallery"/>


</template>
<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";
import TileGallery from "@/components/TileGallery.vue";
import mp3File from '@/assets/audio/flash.mp3';

export default {
  components: {
    TileGallery,
    TileGrid,
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

    const timer = ref(0);

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
      if (timer.value === 0) {
        timer.value = 45;
        const countdown = setInterval(() => {
          timer.value--;
          if (timer.value === 0) {
            clearInterval(countdown);
          }
        }, 1000);
      }
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
    };
  },
};
</script>

<style scoped>

.light {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 100%;
  z-index: 2;
  animation: 1s flash infinite;
}

.redLight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(ellipse at center, rgba(255, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 100%;
  z-index: 2;
  animation: 1s redflash infinite;
}

@keyframes flash {
  0% {
    width: 0;
    height: 0;
  }
  20% {
    width: 1000px;
    height: 1000px;
  }
  25% {
    width: 0;
    height: 0;
  }
  50% {
    width: 0;
    height: 0;
  }
  100% {
    width: 0;
    height: 0;
  }
}

@keyframes redflash {
  0% {
    width: 0;
    height: 0;
  }
  20% {
    width: 150px;
    height: 150px;
  }
  25% {
    width: 0;
    height: 0;
  }
  50% {
    width: 0;
    height: 0;
  }
  100% {
    width: 0;
    height: 0;
  }
}


</style>