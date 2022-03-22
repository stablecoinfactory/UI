<template>
  <div>
    <section class="py-16 px-2 pt-32 bg-white md:px-0">
      <div
        class="container items-center max-w-4xl px-5 mx-auto space-y-6 text-center"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center"
        >
          <span class="block uppercase">
            Stable Coin
            <span class="block mt-1 text-purple-500 lg:inline lg:mt-0">
              Factory
            </span>
          </span>
        </h1>
        <p
          class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center"
        >
          algorithmic approach to lend your assets to AAVE & Uniswap, giving
          high returns without farming.
        </p>
        <div
          class="relative flex flex-col justify-center md:flex-row md:space-x-4"
        >
          <a
            href="https://app.uniswap.org/#/swap?chain=polygon&outputCurrency=0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
            class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto"
          >
            UNISWAP
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            href="https://info.uniswap.org/#/polygon/tokens/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
            class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
          >
            Uniswap Chart
          </a>
        </div>
      </div>
    </section>

    <Price />

    <Platfrom />

    <Howitworks />
  </div>
</template>

<script>
import Platfrom from '../components/Platfrom.vue'

import Howitworks from '../components/howitworks.vue'

import Price from '../components/price.vue'

export default {
  name: 'Home',
  data() {
    return {
      metamask: false,
      address: '',
      showuserpanel: false,
    }
  },
  components: {
    Platfrom,
    Howitworks,
    Price,
  },
}
</script>
