<template>
<!--select or drop single or multiple files form using tailwindcss and compositionAPI-->
  <div class="flex items-center justify-center h-screen w-screen">
    <div class=" justify-center">
      <label class="block text-sm font-medium text-gray-700" for="files">
        Select files
      </label>
      <input type="file"
             id="files"
             name="files"
             accept="image/*"
             class="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             v-on:change="onFileChange"
             multiple>
    </div>
    <div class="w-full">
      <div v-for="(file, index) in files" :key="index">
        <div class="flex flex-col my-2">
          <img :src="file" class="w-40 h-40 object-contain"/>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteFile(index)">Delete</button>
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
      deleteFile
    }
  }
}
</script>

<style scoped>

</style>
