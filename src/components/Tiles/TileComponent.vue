<template>
  <div
      class="tile"
      :class="{ filled: filled }"
      ref="tile"
      draggable="true"
      @dragstart="dragStart"
      @dragover.prevent
      @dragend="dragEnd"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @drop="drop"
  ></div>
</template>

<script>
import { ref } from "vue";
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
    onDragStart: Function,
    onDrop: Function,
    onDragEnter: Function,
    onDragLeave: Function,
    onDragEnd: Function,
  },
  setup(props) {
    const tile = ref(null);

    function dragStart() {
      props.onDragStart(props.index);
      setTimeout(() => tile.value.classList.add("hide"), 0);
    }

    function drop() {
      tile.value.classList.remove("hide");
      props.onDrop(props.index);
    }

    function dragEnter() {
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
    };
  },
};
</script>

<style scoped>
.tile {
  width: 100px;
  height: 100px;
  border: #3182ce solid 1px;
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