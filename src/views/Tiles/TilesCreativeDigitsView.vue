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
      myChains.value.push(chain);
      console.log(myChains);
    }

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