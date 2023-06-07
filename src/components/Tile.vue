<template>
<div class="w-full h-full " :class="{'bg-blue-700': isOn}" ></div>
</template>

<script>
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
    draggableLocation: {
      type: Array,
    },
    droppableLocation: {
      type: Array,
    },
  },
  setup(props, {emit}) {
    const mouseDown = () => {
      if (props.isMovable) {
        // Moving logic
        emit("move");
      }
    }
    // const mouseUp = () => {
    //   if (props.isDroppable) {
    //     // Dropping logic
    //     emit("drop", props.droppableLocation);
    //   }
    // }
    return {
      mouseDown
    }
  }
}

</script>

<style scoped>

</style>