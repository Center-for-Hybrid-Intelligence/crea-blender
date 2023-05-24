<template>
  <div>
    <div
        class="w-screen pt-12 px-24"
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
