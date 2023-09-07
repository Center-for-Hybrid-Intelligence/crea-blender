<template>
  <div
      class="tile"
      :class="{ filled: filled}"
      ref="tile"
      :draggable="draggable"
      @dragstart="dragStart"
      @dragover.prevent
      @dragend="dragEnd"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @drop="drop"
      :style="{'height': tileSize + 'px', 'width': tileSize + 'px',
              'border' : devTile ? '1px solid black' : filled ? borderSize + 'rem solid #89f2f2' : null, 'border-radius': borderRadius + 'em'
       }"

  >
    <div v-if="devTile">{{ index }}</div>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "TileComponent",
  props: {
    filled: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
      default: 50,
    },
    borderRadius: {
      type: Number,
      required: true,
      default: 0.5,
    },
    borderSize: {
      type: Number,
      required: true,
      default: .3,
    },
    draggable: {
      type: Boolean,
      default: true,
    },
    devTile: {
      type: Boolean,
      default: false,
    },
    onDragStart: Function,
    onDrop: Function,
    onDragEnter: Function,
    onDragLeave: Function,
    onDragEnd: Function,
  },
  setup(props) {
    const tile = ref(null);

    const tileSize = computed(() => {
      return props.size;
    });

    function dragStart() {
      if (!props.draggable) {
        return;
      }
      props.onDragStart(props.index);
      setTimeout(() => tile.value.classList.add("hide"), 0);

    }

    function drop() {
      if (!props.draggable) {
        return;
      }
      tile.value.classList.remove("hide");
      props.onDrop(props.index);
    }

    function dragEnter() {
      if (!props.draggable) {
        return;
      }
      props.onDragEnter(props.index);
    }

    function dragLeave() {
      props.onDragLeave(props.index);
    }

    function dragEnd() {
      props.onDragEnd(props.index);
    }

    return {
      tile,
      dragStart,
      drop,
      dragEnter,
      dragLeave,
      dragEnd,
      tileSize,
    };
  },
};
</script>

<style scoped>
.tile {
  /*
  border: #3182ce solid 1px;
  */

}

.filled {
  background-color: #d5fff7;
  /*
  box-shadow: gray 0px 0px 5px 0px;
  */
}

.hide {
  opacity: 0;
}
</style>