<template>
  <div
    class="border-2 rounded-xl p-4"
    v-bind:class="'bg-' + color + '-100' + ' border-' + color + '-200'"
  >
    <div class="flex items-center">
      <span
        class="h-4 w-4 rounded-full relative"
        v-bind:class="'bg-' + color + '-500'"
      ></span>
      <p class="text-lg text-gray-700 ml-3 font-semibold">
        {{ title }}
      </p>
    </div>
    <div class="flex flex-col justify-start">
      <p
        class="text-4xl text-left font-bold my-4"
        v-bind:class="'text-' + color + '-700'"
      >
        {{ value }}
        <span class="text-2xl">{{ suffix }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ["title", "value", "color", "suffix"],
};
</script>
