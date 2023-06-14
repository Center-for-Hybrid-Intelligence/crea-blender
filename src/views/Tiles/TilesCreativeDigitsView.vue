<template>
    <TileGrid
        class="w-screen h-screen"
        :filledCount="10"
        :gridSize="10"
        :tileSize="100"
        :gap="10"
        :editable="true"
        ref="tileGrid"
        @save-chain="saveChain"
        :devMode="false"
    > </TileGrid>
  <img @click="toggleGallery"  class="absolute top-20 right-12 h8:right-24 k15:right-36 k1:right-36 cursor-pointer transition-all hover:animate-wiggle" src="../../../public/photo-gallery-icon.svg" alt="Open gallery">

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
  <button @click="$refs.tileGrid.saveChain()" class="button">Save Chain</button>

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