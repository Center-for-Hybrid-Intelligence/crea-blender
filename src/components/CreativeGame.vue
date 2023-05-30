<template>
  <div class=" absolute w-screen h-screen flex justify-center items-center">
      <div class="flex flex-col w-full p-12 k1:p-0 k1:w-4/5 gap-12 ">
        <div class="flex justify-center ">
          <div class="flex relative group">

          <img src="../../src/assets/placeholder.png" alt="Placeholder Image" class="object-contain bg-slate-300 h-80 h-60 group-hover:border-8 border-8 border-transparent group-hover:transition-all group-hover:duration-200 group-hover:border-black border-grey border-dashed cursor-pointer">
            <div class="absolute -bottom-10 -right-10 w-20 h-20 group-hover:-bottom-12 group-hover:-right-12 group-hover:w-24 group-hover:h-24 bg-white rounded-lg p-4 shadow-2xl shadow-zinc-950 group-hover:p-3 group-hover:transition-all group-hover:duration-200 cursor-pointer">
              <img src="../../src/assets/camera.png" alt="Camera" class="object-contain">

            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <ImageWithSlider @change="handleSlider1Change"/>
          <ImageWithSlider @change="handleSlider2Change"/>
          <ImageWithSlider @change="handleSlider3Change"/>
          <ImageWithSlider @change="handleSlider4Change"/>
          <ImageWithSlider @change="handleSlider5Change"/>
        </div>
      </div>
      <div class=" flex flex-col absolute right-12">
        <Button @click="end" class="buttonSecondary m-auto mt-4 ">Finish</Button>
      </div>
</div>
  <img @click="toggleGallery"  class="absolute top-1/4 left-2/3 cursor-pointer hover:animate-wiggle" src="photo-gallery-icon.svg" alt="Open gallery">

  <Gallery @close="toggleGallery" :visible="showGallery"/>
</template>

<script>
import ImageWithSlider from "@/components/ImageWithSlider.vue";
import {ref} from "vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "CreativeGame",
  components: {ImageWithSlider, Gallery },
  setup(props,{emit}){
    const slider1 = ref(50);
    const slider2 = ref(50);
    const slider3 = ref(50);
    const slider4 = ref(50);
    const slider5 = ref(50);
    const showGallery = ref(false);

    const toggleGallery = () => {
      showGallery.value = !showGallery.value;
    }

    const handleSlider1Change = (value) => {
      slider1.value = parseInt(value)
    };
    const handleSlider2Change = (value) => {
      slider2.value = parseInt(value)
    };
    const handleSlider3Change = (value) => {
      slider3.value = parseInt(value)
    };
    const handleSlider4Change = (value) => {
      slider4.value = parseInt(value)
    };
    const handleSlider5Change = (value) => {
      slider5.value = parseInt(value)
    };

    const end = () => {
      console.log(end, "asd")
      emit("end");
    }
    return{
      end,
      slider1,
      slider2,
      slider3,
      slider4,
      slider5,
      handleSlider1Change,
      handleSlider2Change,
      handleSlider3Change,
      handleSlider4Change,
      handleSlider5Change,
      showGallery,
      toggleGallery
    }

  }
}
</script>

<style scoped>

</style>