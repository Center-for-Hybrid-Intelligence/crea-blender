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
        @dragenter="dragEnter(index)"
        @dragleave="dragLeave(index)"
        @drop="drop(index)"
    ></div>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const grid = ref(createGrid(16, 12));
    const tiles = ref([]);
    let draggedTileIndex = null;

    onMounted(() => {
      tiles.value = Array.from(document.querySelectorAll(".tile"));
    });

    function createGrid(size, filledCount) {
      return Array.from({ length: size * size }, (_, index) => ({
        filled: index < filledCount,
      }));
    }

    function dragStart(index) {
      draggedTileIndex = index;
      setTimeout(() => tiles.value[index].classList.add("hide"), 0);
    }

    function drop(index) {
      tiles.value[draggedTileIndex].classList.remove("hide");
      if (!tiles.value[index].classList.contains("filled") && isValidMove(draggedTileIndex, index)) {
        grid.value[draggedTileIndex].filled = false;
        grid.value[index].filled = true;
      }
      draggedTileIndex = null;
    }

    function isValidMove(from, to) {
      const simulatedGrid = JSON.parse(JSON.stringify(grid.value));
      simulatedGrid[from].filled = false;
      simulatedGrid[to].filled = true;

      const startRow = Math.floor(to / 16);
      const startCol = to % 16;
      const visited = Array.from({ length: 16 }, () => Array(16).fill(false));

      const filledTileCount = floodFill(simulatedGrid, startRow, startCol, visited);

      return filledTileCount === 12;
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

    function floodFill(grid, row, col, visited) {
      if (
          row < 0 ||
          row >= 16 ||
          col < 0 ||
          col >= 16 ||
          visited[row][col] ||
          !grid[row * 16 + col].filled
      ) {
        return 0;
      }

      visited[row][col] = true;
      let count = 1;

      count += floodFill(grid, row - 1, col, visited);
      count += floodFill(grid, row + 1, col, visited);
      count += floodFill(grid, row, col - 1, visited);
      count += floodFill(grid, row, col + 1, visited);

      return count;
    }

    function dragEnter(index) {
      if (index !== draggedTileIndex && !tiles.value[index].classList.contains("filled")
          && isValidMove(draggedTileIndex, index)) {
        tiles.value[index].classList.add("preview");
      }
    }

    function dragLeave(index) {
      tiles.value[index].classList.remove("preview");
    }


    return { grid, tiles, dragStart, drop, isValidMove, isAdjacentIndex, isConnected, floodFill, dragEnter, dragLeave };
  },
};
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
.preview {
  background-color: rgba(0, 0, 255, 0.5);
}
.hide {
  opacity: 0;
}
</style>