<template>
  <!--select or drop single or multiple files form using tailwindcss and compositionAPI-->
  <div class="flex flex-col items-center justify-center h-screen w-screen"
  >


    <div class="flex flex-col gap-8   items-center ">

      <label class="block text-7xl font-bold text-gray-700" for="files">
        Upload PDF File
      </label>

      <div
          class="flex gap-4 flex-col justify-center transition-all border-4 border-transparent p-8 bg-white rounded-xl shadow-gray-300 shadow-2xl w-4/5"
          @dragenter="handleDragEnter"
          @dragover="handleDragOver"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
          :class="{ 'border-blue-500 bg-blue-100 border-4 border-dashed border-gray-400 rounded-lg p-8': isDragging }"
      >
        <div
            class="flex  flex-col justify-center"
            :class="{ 'opacity-50': isDragging }"
        >
          <label class="flex gap-4 flex-col justify-center items-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke=" #bfbfbf"
                 class="w-12 h-12 opacity-60">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
            </svg>
            <span
                class="flex m-4 gap-2 bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white justify-center font-extrabold text-lg p-4 px-12 rounded-full color cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0"
               stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/> </svg>
          Upload PDF

        </span>
            <input type="file"
                   id="files"
                   name="files"
                   accept="pdf/*"
                   class="hidden"
                   v-on:change="onFileChange"
                   multiple>
          </label>

          <div class="flex justify-center">


            <div v-if="isDragging">
              Drop the PDF file here
            </div>
            <div v-else>
              Or drop a PDF file
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="">
      <div v-for="(file, index) in files" :key="index">
        <div class="flex flex-col my-2">
          <img :src="file" class="w-40 h-40 object-contain"/>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteFile(index)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "FileUpload",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    const files = ref(props.value);
    const isDragging = ref(false);

    const handleDragEnter = (e) => {
      e.preventDefault();
      isDragging.value = true;
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      isDragging.value = true;
    };

    const handleDragLeave = () => {
      isDragging.value = false;
    };

    const handleDrop = (e) => {
      e.preventDefault();
      isDragging.value = false;

      const files = e.dataTransfer.files;
      const file = files[0];

      // Perform further processing with the dropped file (e.g., upload or read the PDF file)
      console.log('Dropped file:', file);
    };

    const onFileChange = (e) => {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      createImage(files);
    }

    const createImage = (file) => {
      let reader = new FileReader();
      reader.onload = (e) => {
        files.value.push(e.target.result);
      };
      reader.readAsDataURL(file[0]);
      emit("update:modelValue", files.value);
    }

    const deleteFile = (index) => {
      files.value.splice(index, 1);
      emit("update:modelValue", files.value);
    }

    return {
      files,
      onFileChange,
      deleteFile,
      isDragging,
      handleDragEnter,
      handleDragOver,
      handleDragLeave,
      handleDrop 
    }
  }
}
</script>

<style scoped>

</style>
