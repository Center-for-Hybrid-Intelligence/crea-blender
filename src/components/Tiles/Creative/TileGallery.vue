<template>

  <LGallery :visible="visible">
    <template #title>
      Gallery
    </template>
    <template #button>
    <button class="bg-red-500 fixed top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-8 hover"
            @click="$emit('close')">X
    </button>
    </template>
    <template #content>



<!--  <div v-if="visible"
       class="absolute  w-11/12 k1:w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 backdrop-blur-2xl backdrop-brightness-125 rounded-3xl shadow-gray-700 shadow-2xl    z-50 overflow-x-hidden  h-5/6 ">
    <h1 class="heading1  !text-6xl  text-center w-full !font-bold">Gallery</h1>
    <div class="flex justify-center">
      <button class="bg-red-500 fixed top-0 right-0 rounded-full text-white w-12 h-12 font-bold text-2xl p-2 m-8 hover"
              @click="$emit('close')">X
      </button>
    </div>
    <div class="grid k1:grid-cols-4 h6:grid-cols-3 grid-cols-2 gap-4 k15:gap-8 p-8 justify-center  ">-->

      <div v-for="shape in createdShapes" :key="shape" class=" rounded-xl bg-slate-600" >
        <!--        {{shape}}-->
        <TileGrid
            :filledCount="10"
            :gridSize="12"
            :tileSize="12"
            :borderRadius="0.2"
            :border-size="0.14"
            :gap="4"
            :editable="false"
            ref="tileGrid"
            :chain="shape"
        ></TileGrid>
      </div>
    </template>
  </LGallery>

  <!--    </div>
    </div>-->
</template>

<script>
import TileGrid from "@/components/Tiles/TileGrid.vue";
import LGallery from "@/components/layout/LGallery.vue";

export default {
  name: "TileGallery",
  components: {TileGrid, LGallery},
  emits: ['close'],
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    createdShapes: {
      type: Array,
      required: false,
    },

  },
  setup() {

    document.addEventListener('mousemove', function (event) {
      const gradientContainer = document.getElementById('gradient-container');
      const xPos = event.clientX / window.innerWidth * 5 - 1;
      const yPos = event.clientY / window.innerHeight * 5 - 1;
      gradientContainer.style.background = `radial-gradient(ellipse at ${xPos * 10}% ${yPos * 10}%, #A65F5A, #4165A1)`;
    });
    return {
      TileGrid,
      LGallery
    };
  },
}
</script>

<style scoped>

</style>