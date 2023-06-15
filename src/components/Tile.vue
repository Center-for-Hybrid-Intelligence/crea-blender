<template>
<div class="w-full h-full border" @mousedown="mouseDown" @mouseup="mouseUp" :class="{'bg-blue-700': isOn, 'draggable': isOn && isMovable && !isDragged}" >{{location}}</div>

</template>

<script>
import { ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tile",
  props: {
    isOn: {
      type: Boolean,
    },
    isMovable: {
      type: Boolean,
    },
    isDroppable: {
      type: Boolean,
    },
    location: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const isDragged = ref(false);
    const mouseDown = () => {
      if (props.isMovable && props.isOn) {
        // Moving logic
        isDragged.value = true;
        console.log("dragging", props.location)
      }
    }
    const mouseUp = () => {
      if (props.isDroppable) {
        // Dropping logic

        emit("drop", props.location);
      }
      isDragged.value = false;
    }
    return {
      mouseDown,
      isDragged,
      mouseUp
    }
  }
}

</script>

<style scoped>

</style>