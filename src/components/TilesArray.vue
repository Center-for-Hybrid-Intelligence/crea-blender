<template>
  <div class="grid-container">
    <div
        v-for="(tile, index) in grid"
        :key="index"
        :class="['tile', { 'filled': tile.filled }]"
        ref="tiles"
        draggable="true"
        @dragstart="dragStart(index)"
        @dragover.prevent
        @dragenter.prevent
        @drop="drop(index)"
    ></div>
  </div>
  <div class="h-screen w-screen">

<!--    <div class="absolute bg-red-500 p-4 rounded-md" :style="{ top: elementTop, left: elementLeft }"-->
<!--    ></div>-->
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted, computed} from 'vue';

export default {
  name: "TilesArray",
  components: {},
  setup() {
    const grid = ref(createGrid(16, 12));

    const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]); // Array of tiles
    const mouseX = ref(0); // Current mouse X position
    const mouseY = ref(0); // Current mouse Y position

    const elementTop = computed(() => mouseY.value + "px"); // Set the top position based on the mouse Y position
    const elementLeft = computed(() => mouseX.value + "px"); // Set the left position based on the mouse X position

    const tiles = ref([]);
    let draggedTileIndex = null;

    onMounted(() => {
      tiles.value = Array.from(document.querySelectorAll(".tile"));
    });

    function dragStart(index) {
      draggedTileIndex = index;
    }

    function drop(index) {
      if (!tiles.value[index].classList.contains("filled") && isValidMove(draggedTileIndex, index)) {
        grid.value[draggedTileIndex].filled = false;
        grid.value[index].filled = true;
      }
      draggedTileIndex = null;
    }

    function isValidMove(from, to) {
      const isAdjacent = isAdjacentIndex(from, to);
      const willConnectToChain = isConnected(to);

      return !isAdjacent && willConnectToChain;
    }

    function isAdjacentIndex(index1, index2) {
      const colDiff = Math.abs((index1 % 16) - (index2 % 16));
      const rowDiff = Math.abs(Math.floor(index1 / 16) - Math.floor(index2 / 16));

      return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    }

    function isConnected(index) {
      const neighbors = [
        { rowOffset: -1, colOffset: 0 },
        { rowOffset: 1, colOffset: 0 },
        { rowOffset: 0, colOffset: -1 },
        { rowOffset: 0, colOffset: 1 },
      ];

      const row = Math.floor(index / 16);
      const col = index % 16;

      return neighbors.some(({ rowOffset, colOffset }) => {
        const newRow = row + rowOffset;
        const newCol = col + colOffset;
        const newIndex = newRow * 16 + newCol;

        if (newRow >= 0 && newRow < 16 && newCol >= 0 && newCol < 16) {
          return grid.value[newIndex].filled;
        }

        return false;
      });
    }


    function createGrid(size, filledCount) {
      return Array.from({length: size * size}, (_, index) => ({
        filled: index < filledCount,
      }));
    }

    const updateMousePosition = (event) => {
      // Update the mouse position based on the event coordinates
      mouseX.value = event.pageX;
      mouseY.value = event.pageY;
      console.log(elementLeft, elementTop)
    };

    onMounted(() => {
      // Attach the mousemove event listener to the document
      document.addEventListener('mousemove', updateMousePosition);
    });

    onUnmounted(() => {
      // Remove the mousemove event listener when the component is unmounted
      document.removeEventListener('mousemove', updateMousePosition);
    });

    return {mouseX, mouseY, elementTop, elementLeft, array, grid, dragStart, drop };
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(16, 50px);
  grid-template-rows: repeat(16, 50px);
  gap: 1px;
}

.tile {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
}

.filled {
  background-color: blue;
}
</style>