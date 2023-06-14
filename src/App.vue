<template>
    <div class="relative min-h-screen">
      <div id="gradient-container" class="absolute inset-0"></div>
      <div class="relative z-10">
        <Header/>
        <router-view/>
      </div>
    </div>

</template>

<style>

</style>
<script setup>
import Header from "@/components/Header.vue";
document.addEventListener('mousemove', function(event) {
  const gradientContainer = document.getElementById('gradient-container');
  const xPos = event.clientX / window.innerWidth * 5 - 1;
  const yPos = event.clientY / window.innerHeight * 5 - 1;
  gradientContainer.style.background = `radial-gradient(ellipse at ${xPos * 10}% ${yPos * 10}%, #A65F5A, #4165A1)`;
});
</script>