<template>
  <div>
    <div
        class="w-screen pt-20 px-12"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LSection",
  props: {
    useMargin: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped></style>
