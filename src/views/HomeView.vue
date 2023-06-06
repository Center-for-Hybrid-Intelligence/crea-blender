<template>
<div class="flex h-screen justify-center content-center">
  <router-link to="/blender">
    BLENDER
    <img src="../../src/assets/ScienceAtHome.png" alt="Science at home"
         class="h-16 cursor-pointer object-contain hover">
  </router-link>
  <router-link to="/tiles">
    Tiles
    <img src="../../src/assets/ScienceAtHome.png" alt="Science at home"
         class="h-16 cursor-pointer object-contain hover">
  </router-link>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: 'HomeView',
  methods: {
    router() {
      return router
    }
  },
  components: {
  }
}
</script>
