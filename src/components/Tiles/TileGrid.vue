<template>
  <div ref="gridContainer" class="grid-container relative"
         :style="{
            'grid-template-columns': 'repeat(' + gridSizeTemplate + ', ' + tileSizeTemplate + 'px)',
            'grid-template-rows': 'repeat(' + gridSizeTemplate + ', ' + tileSizeTemplate + 'px)',
            'gap': gapTemplate + 'px',
              }"
    >
      <tile
          v-for="(tile, index) in grid"
          :key="index"
          :filled="tile.filled"
          :index="index"
          :on-drag-start="dragStart"
          :on-drop="drop"
          :on-drag-enter="dragEnter"
          :on-drag-leave="dragLeave"
          :on-drag-end="dragEnd"
          :size="tileSize"
          :draggable="editable"
          @save-chain="saveChain"
          :devTile="devMode"
      />
      <div class="center-marker" ref="centerMarker"
      :style="{
  'visibility': devMode ? 'visible' : 'hidden',}"
      ></div>

    </div>

</template>
<script>
import Tile from "@/components/Tiles/TileComponent.vue";
import {ref} from "vue";
import {onMounted} from "vue";
import mp3File from '@/assets/audio/placeTile.mp3'; // Replace 'file.mp3' with your actual file path


export default {
  components: {
    Tile,
  },
  name: "tileGrid",
  emits: ["save-chain"],
  props: {
    gridSize: {
      type: Number,
      default: 16,
    },
    tileSize: {
      type: Number,
      default: 50,
    },
    filledCount: {
      type: Number,
      default: 10,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    chain: {
      type: Array,
    },
    gap: {
      type: Number,
      default: 10,
    },
    devMode: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, {emit}) {

    const grid = ref(createGrid(props.gridSize, props.filledCount));
    let draggedTileIndex = null;
    const tiles = ref([]);

    const gridContainer = ref(null);

    const centerMarker = ref(null);

    onMounted(() => {
      tiles.value = Array.from(document.querySelectorAll(".tile"));
      updateCenterMarker(); // Set the initial position of the center marker
    });
    function createGrid(size, filledCount) {
      if (props.chain) {
        console.log(props.chain, "found chain")
        return props.chain
      }

      const grid = Array.from({ length: size * size }, () => ({ filled: false }));


      const centerRow = Math.floor(size / 2);
      const centerCol = Math.floor(size / 2);
      const centerIndex = centerRow * size + centerCol;

      // Spawn the initial tile in the center
      grid[centerIndex].filled = true;

      let spawnedTiles = 1;
      while (spawnedTiles < filledCount) {
        const currentIndex = grid.findIndex((tile) => tile.filled);
        // console.log(currentIndex)
        // Generate a random direction to spawn the next tile
        const directions = [
          { rowOffset: -1, colOffset: 0 },
          { rowOffset: 1, colOffset: 0 },
          { rowOffset: 0, colOffset: -1 },
          { rowOffset: 0, colOffset: 1 },
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];

        const newRow = Math.floor(currentIndex / size) + randomDirection.rowOffset;
        const newCol = (currentIndex % size) + randomDirection.colOffset;

        // Check if the new position is inside the grid and not filled
        if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size && !grid[newRow * size + newCol].filled) {
          grid[newRow * size + newCol].filled = true;
          spawnedTiles++;
        }
      }
      return grid;
    }

    function dragStart(index) {
      draggedTileIndex = index;
      setTimeout(() => tiles.value[index].classList.add("hide"), 0);
    }

    function drop(index) {
      tiles.value[draggedTileIndex].classList.remove("hide");
      if (!tiles.value[index].classList.contains("filled") && isValidMove(draggedTileIndex, index)) {
        const audio = new Audio(mp3File);
        audio.play();
        grid.value[draggedTileIndex].filled = false;
        grid.value[index].filled = true;

        updateCenterMarker(); // Update the position of the center marker
      }
      draggedTileIndex = null;
    }



    function findChainCenter() {
      let sumX = 0;
      let sumY = 0;
      let filledTiles = 0;

      grid.value.forEach((tile, index) => {
        if (tile.filled) {
          sumY += Math.floor(index / props.gridSize);
          sumX += index % props.gridSize;
          filledTiles++;
        }
      });

      const centerX = (filledTiles > 0) ? sumX / filledTiles : 0;
      const centerY = (filledTiles > 0) ? sumY / filledTiles : 0;

      return {
        x: centerX,
        y: centerY,
      };
    }
    function isValidMove(from, to) {
      const simulatedGrid = JSON.parse(JSON.stringify(grid.value));
      simulatedGrid[from].filled = false;
      simulatedGrid[to].filled = true;

      const startRow = Math.floor(to / props.gridSize);
      const startCol = to % props.gridSize;
      const visited = Array.from({ length: props.gridSize }, () => Array(props.gridSize).fill(false));

      const filledTileCount = floodFill(simulatedGrid, startRow, startCol, visited);

      return filledTileCount === props.filledCount;
    }
    function isAdjacentIndex(index1, index2) {
      const colDiff = Math.abs((index1 % props.gridSize) - (index2 % props.gridSize));
      const rowDiff = Math.abs(Math.floor(index1 / props.gridSize) - Math.floor(index2 / props.gridSize));

      return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    }

    function isConnected(index) {
      const neighbors = [
        { rowOffset: -1, colOffset: 0 },
        { rowOffset: 1, colOffset: 0 },
        { rowOffset: 0, colOffset: -1 },
        { rowOffset: 0, colOffset: 1 },
      ];

      const row = Math.floor(index / props.gridSize);
      const col = index % props.gridSize;

      return neighbors.some(({ rowOffset, colOffset }) => {
        const newRow = row + rowOffset;
        const newCol = col + colOffset;
        const newIndex = newRow * props.gridSize + newCol;

        if (newRow >= 0 && newRow < props.gridSize && newCol >= 0 && newCol < props.gridSize) {
          return grid.value[newIndex].filled;
        }

        return false;
      });
    }

    function floodFill(grid, row, col, visited) {
      if (
          row < 0 ||
          row >= props.gridSize ||
          col < 0 ||
          col >= props.gridSize ||
          visited[row][col] ||
          !grid[row * props.gridSize + col].filled
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
    function dragEnd(index) {
      tiles.value[index].classList.remove("hide");
    }
    function updateCenterMarker() {
      const chainCenter = findChainCenter();

      const markerSize = 10; // Adjust the size of the marker as needed
      const gridContainerBoundingRect = gridContainer.value.getBoundingClientRect();
      const gridContainerCenterX = gridContainerBoundingRect.width / 2;
      const gridContainerCenterY = gridContainerBoundingRect.height / 2;

      const leftPosition =
          chainCenter.x * (props.tileSize + props.gap) + props.tileSize / 2 - markerSize / 2;
      const topPosition =
          chainCenter.y * (props.tileSize + props.gap) + props.tileSize / 2 - markerSize / 2;

      const gridOffsetX = gridContainerCenterX - leftPosition - markerSize / 2;
      const gridOffsetY = gridContainerCenterY - topPosition - markerSize / 2;

      centerMarker.value.style.left = `${leftPosition}px`;
      centerMarker.value.style.top = `${topPosition}px`;

      gridContainer.value.style.left = `${gridOffsetX}px`;
      gridContainer.value.style.top = `${gridOffsetY}px`;
    }
    function saveChain() {
      // Emit the save-chain event with the current grid as its payload
      emit("save-chain", grid.value);
    }

    return {
      dragEnd,
      grid,
      tiles,
      dragStart,
      drop,
      isValidMove,
      isAdjacentIndex,
      isConnected,
      floodFill,
      dragEnter,
      dragLeave,
      updateCenterMarker,
      findChainCenter,
      centerMarker,
      gridContainer,
      gridSizeTemplate: props.gridSize,
      tileSizeTemplate: props.tileSize,
      gapTemplate: props.gap,
      saveChain,
    };
  },
};
</script>

<style scoped>

.grid-container {
  display: grid;
  transition: left 0.5s , top 0.5s ;

}
.center-marker {

  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  z-index: 10;
}
.preview {
  border: #3182ce 5px solid;
}
</style>