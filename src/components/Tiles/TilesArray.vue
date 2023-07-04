<template>

  <div class="h-screen w-screen">
<!--    <div class="grid gap-1 grid-container">-->
<!--      <Tile-->
<!--          v-for="(tile, index) in grid"-->
<!--          :key="index"-->
<!--          class="draggable"-->
<!--          :isOn="tile.filled"-->
<!--          :isMovable="true"-->
<!--          :location="[Math.floor(index/16), index%16] "-->
<!--          ref="tiles"-->
<!--          draggable="true"-->
<!--          @dragover.prevent-->
<!--          @dragenter.prevent-->
<!--      ></Tile>-->
<!--    </div>-->
    <div class="grid gap-1 grid-container" :style="gridStyle">
      <div v-for="(row, index) in rows" :key="row">
        <vue-draggable tag="transition-group" v-model="grid" item-key="id">
          <template v-slot:item="{item}">
            <Tile :isOn="item.filled"
                  :key="item"
                  class="draggable"
                  :isMovable="true"
                  :location="[Math.floor(row), index%gridSize] "
                  ref="tiles"
                  draggable="true"
                  @dragover.prevent
                  @dragenter.prevent
                  @change="onchange"
            ></Tile>

          </template>
        </vue-draggable>

      </div>

    </div>
<!--    <div class="absolute bg-red-500 p-4 hidden rounded-md" :style="{ top: elementTop, left: elementLeft, 'display: block': isMoving }"-->
<!--    ></div>-->
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import Tile from "@/components/Tiles/Tile.vue";
import VueDraggable from "vue3-draggable";

export default {
  name: "TilesArray",
  components: {VueDraggable, Tile},
  setup() {
    const gridSize = 16;
    const grid = ref(createGrid(gridSize, 2));
    const rows = ref(16);


    const mouseX = ref(0); // Current mouse X position
    const mouseY = ref(0); // Current mouse Y position

    const elementTop = computed(() => mouseY.value + "px"); // Set the top position based on the mouse Y position
    const elementLeft = computed(() => mouseX.value + "px"); // Set the left position based on the mouse X position

  // const onchange = (event) => {

    function createGrid(size, filledCount) {
      return Array.from({length: size}, (_, index) => ({
        filled: index < filledCount,
      }));
    }

    const updateMousePosition = (event) => {
      // Update the mouse position based on the event coordinates
      mouseX.value = event.pageX;
      mouseY.value = event.pageY;
    };

    onMounted(() => {
      // Attach the mousemove event listener to the document
      document.addEventListener('mousemove', updateMousePosition);
    });

    onUnmounted(() => {
      // Remove the mousemove event listener when the component is unmounted
      document.removeEventListener('mousemove', updateMousePosition);
    });

    return {mouseX, mouseY, elementTop, elementLeft, grid, rows, gridSize };
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(16, 100px);
  grid-template-rows: repeat(16, 100px);
  gap: 2px;
}

.filled {
  background-color: blue;
}
</style>