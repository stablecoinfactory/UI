<template>
  <div class="shadow-lg rounded-2xl p-4 bg-white">
    <div class="flex items-center">
      <span
        class="p-2 h-4 w-4 rounded-full relative"
        v-bind:class="color"
      ></span>
      <p class="font-semibold text-xl text-gray-700 ml-2">
        {{ title }}
      </p>
    </div>
    <div class="flex flex-col justify-start">
      <p class="text-gray-800 text-4xl text-left font-bold my-4">
        {{ value }}
      </p>
      <div class="relative h-2 bg-gray-200 rounded">
        <div
          class="absolute top-0 h-2 left-0 rounded w-full"
          v-bind:class="color"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ["title", "value", "color"],
};
</script>
