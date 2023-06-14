<template>
  <div>
    <div class="w-full flex justify-center absolute top-12 ">
      <div @click="$refs.tileGrid.saveChain()" class="z-50 rounded-full border-white border-8 aspect-square h-28 group hover cursor-pointer">
        <img src="../../assets/camera.png"  class="p-4" alt="">
      </div>
    </div>
  </div>

  <div class="w-screen h-screen overflow-hidden group-hover:border-black group-hover:border-2 border-black p-12">
    <TileGrid
        class=" "
        :filledCount="10"
        :gridSize="10"
        :tileSize="60"
        :gap="8"
        :editable="true"
        ref="tileGrid"
        @save-chain="saveChain"
        :devMode="false"
    > </TileGrid>
  </div>
  <div @click="toggleGallery"  class="fixed top-12 right-12 cursor-pointer transition-all hover:animate-wiggle z-50">
    <img class="" src="../../../public/photo-gallery-icon.svg" alt="Open gallery">
    <div class="h-8 w-8 rounded-full bg-green-500 absolute -bottom-2 -right-2 justify-center align-middle flex">
      <h2 class="text-white text-xl self-center">
      {{myChains.length}}
      </h2>
    </div>
  </div>


  <TileGallery @close="toggleGallery" :createdShapes="myChains" :visible="showGallery"/>
<!--<div class="absolute top-1/2 left-0">-->
<!--  -->
<!--</div>-->
<!--  <div class="absolute top-1/2 left-0">-->
<!--    <TileGrid-->
<!--        :filledCount="15"-->
<!--        :gridSize="20"-->
<!--        :tileSize="100"-->
<!--        :gap="10"-->
<!--        :editable="true"-->
<!--        ref="tileGrid"-->
<!--    > </TileGrid>-->
<!--  </div>-->
<!--
  <button @click="$refs.tileGrid.saveChain()" class="button">Save Chain</button>
-->

</template>
<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import {ref} from "vue";
import TileGallery from "@/components/TileGallery.vue";

export default {
  components: {
    TileGallery,
    TileGrid,
  },
  name: "TilesCreativeDigitsView",

  setup() {
    const myChains = ref([]);
    const showGallery = ref(false);
    const toggleGallery = () => {
      showGallery.value = !showGallery.value;
    }

    const saveChain = (chain) => {
      console.log(myChains.value.length, "mychain")

      // Check if the chain already exists in the myChains.value array
      const chainExists = myChains.value.some((existingChain) => {
        return JSON.stringify(existingChain) === JSON.stringify(chain);
      });
      // If the chain doesn't already exist, add it to myChains.value, and log the changes
      if (!chainExists) {
        console.log(chain + " is being saved");
        myChains.value.push(JSON.parse(JSON.stringify(chain))); // Deep copy
        console.log(myChains);
      } else {
        console.log(chain + " already exists in the array and won't be added again.");
      }
    };


    const grids = ref(4)
    return {
      grids,
      TileGrid,
      showGallery,
      toggleGallery,
      saveChain,
      myChains
    };
  },
};
</script>

<style scoped>
</style>