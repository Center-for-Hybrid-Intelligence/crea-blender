<template>
  <div class="relative min-h-screen max-w-screen overflow-x-hidden">
    <div id="gradient-container" class="absolute inset-0"></div>
    <div class="relative z-10 ">
      <Header/>
      <router-view v-slot="{Component}" >
          <component :is="Component"/>
      </router-view>
    </div>
  </div>

</template>

<style>

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

</style>
<script setup>
import Header from "@/components/Header.vue";

document.addEventListener('mousemove', function (event) {
  const gradientContainer = document.getElementById('gradient-container');
  const xPos = event.clientX / window.innerWidth * 5 - 1;
  const yPos = event.clientY / window.innerHeight * 5 - 1;
  gradientContainer.style.background = `radial-gradient(ellipse at ${xPos * 10}% ${yPos * 10}%, #A65F5A, #4165A1)`;
});
</script>