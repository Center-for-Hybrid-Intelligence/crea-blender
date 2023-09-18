<template>
  <div @click="toggleGallery" draggable="false"
       class="fixed top-12 right-12 cursor-pointer transition-all hover:animate-wiggle z-30">
    <img draggable="false" class="w-14 h-14 k1:w-20 k1:h-20" src="@/assets/imageGallery.svg" alt="Open gallery">
    <div class="h-10 w-10 rounded-full bg-tilesBlue absolute -bottom-2 -right-2 justify-center align-middle flex">
      <h2 class="text-slate-600 text-3xl self-center">
        {{ myChains.length }}
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TileGalleryImage',
  props: {
    myChains: {},
    toggleGallery: {}
  }
}
</script>
