<template>
  <div
    class="container mx-auto flex flex-col flex-wrap items-center justify-between py-10 md:flex-row"
  >
    <div class="relative flex flex-col md:flex-row">
      <a
        href="#/"
        aria-current="page"
        class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0 router-link-exact-active router-link-active"
      >
        <img class="h-10 pr-4" src="/img/logo.png" />

        <h3
          class="mx-auto text-2xl leading-none text-gray-800 select-none font-black"
        >
          STABLE COIN FACTORY
        </h3></a
      >
    </div>
    <div
      class="inline-flex items-center ml-5 space-x-6 lg:justify-end hidden md:block"
    >
      <div
        class="inline-flex items-center leading-none ${props.textColor} rounded-full p-2 text-teal text-sm"
      >
        <span
          class="inline-flex bg-gray-700 text-white rounded-full h-6 px-3 justify-center items-center"
        >
          Polygon
        </span>
        <span v-if="address" class="inline-flex px-2 text-gray-700">
          {{ address }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["address"],
};
</script>
