<template>

<div class="flex flex-col h-screen justify-center items-center gap-16">
  <UserInfo/>

  <div class="flex justify-between z-50 absolute top-0 right-0 p-8">
    <div class="flex gap-4">
      <img src="../assets/danish.jpg" alt="Home"
           class="h-8 cursor-pointer  object-contain  hover"
      />
      <img src="../assets/english.jpg" alt="Home"
           class=" h-8 cursor-pointer object-contain hover"
      />
    </div>
  </div>
  <h1 class="font-extrabold text-7xl ">
    Crea. Games
  </h1>
<div class="flex gap-24">
  <div class=" w-64 h-96 rounded-xl cursor-pointer object-contain hover ">
  <router-link to="/tiles">
    <img src="../../src/assets/tiles.jpg" alt="Science at home"
         class=" h-full w-full object-cover rounded-xl absolute top-0 left-0 z-0">
    <p class="text-5xl font-bold text-white z-10 absolute top-4 left-4">
      Crea.
    </p>
    <p class="text-5xl font-bold text-white z-10 absolute bottom-4 left-4">
      Tiles
    </p>
  </router-link>
  </div>
  <div class="w-64 h-96 rounded-xl cursor-pointer object-contain hover ">
  <router-link to="/blender">
    <img src="../../src/assets/blending.jpg" alt="Science at home"
         class=" h-full w-full object-cover rounded-xl absolute top-0 left-0 z-0">
    <p class="text-5xl font-bold text-white z-10 absolute top-4 left-4">
      Crea.
    </p>
    <p class="text-5xl font-bold text-white z-10 absolute bottom-4 left-4">
      Blender
    </p>
  </router-link>
  </div>
</div>
</div>
  <div class="absolute bottom-0 right-0 p-8">
    <router-link to="/about">
      <img src="../../src/assets/ScienceAtHome.png" alt="Science at home"
           class="h-16 cursor-pointer object-contain hover">
    </router-link>

    <router-view></router-view>

  </div>
</template>

<script>
import router from "@/router";
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: 'HomeView',
  methods: {
    router() {
      return router
    }
  },
  components: {
    UserInfo
  }

}
</script>
