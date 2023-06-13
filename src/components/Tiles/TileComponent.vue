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
      :style="{'height': tileSize + 'px', 'width': tileSize + 'px' }"

  ></div>
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
    draggable: {
      type: Boolean,
      default: true,
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
      console.log(props.size)
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
  /*border: #3182ce solid 1px;*/
}

.filled {
  background-color: blue;
  box-shadow: gray 0px 0px 5px 0px;
}
.preview {
  border: #3182ce 5px solid;
}
.hide {
  opacity: 0;
}
</style>