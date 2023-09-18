<template>

  <div class="flex flex-col  justify-center items-center gap-8">
    <!-- get user information here  -->
    <UserInfo v-if="userInfo"/>
    <div class="flex justify-between z-50 fixed top-4 right-4 k1:top-12 k1:right-12">
      <div class="flex gap-4">
        <img src="../assets/danish.jpg" alt="Home"
             class="k1:h-8 h-6 cursor-pointer  object-contain hover"
        />
        <img src="../assets/english.jpg" alt="Home"
             class=" k1:h-8 h-6 cursor-pointer object-contain hover"
        />
      </div>
    </div>
    <h1 class="font-extrabold k1:text-7xl text-5xl mt-16 k1:mt-24  justify-center text-white font-custom
">
      Crea. Games
    </h1>
    <div class="flex gap-20 flex-wrap m-12 justify-center font-custom
">
      <LGameCard
          :path="'/tiles'"
          :img="'tiles.jpg'"
          :color="'text-tilesBlue'"
      >
        <template #title1>
          Crea.
        </template>
        <template #title2>
          Tiles
        </template>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias.
        </template>
      </LGameCard>
      <LGameCard
          :path="'/blender'"
          :img="'blending.jpg'"
          :color="'text-blenderOrange'"
      >
        <template #title1>
            Crea.
        </template>
        <template #title2>
            Blender
        </template>
        <template #description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias.
        </template>
      </LGameCard>


    </div>
  </div>
  <div class="fixed  bottom-4 right-4 k1:bottom-12 k1:right-12">
    <router-link to="/about">
      <img src="../../src/assets/ScienceAtHome.png" alt="Science at home"
           class="k1:h-16 h-10 cursor-pointer object-contain hover bg-white">
    </router-link>

    <!--
        <router-view></router-view>
    -->

  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import {ref} from "vue";
import LGameCard from "@/components/layout/LGameCard.vue";

export default {
  name: 'HomeView',
  components: {LGameCard, UserInfo},
  setup() {
    const userInfo = ref(false);

    return {
      userInfo
    }
  }
}
</script>
