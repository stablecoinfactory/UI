<template>
  <div>
    <section class="py-16 px-2 pt-32 md:px-0">
      <div
        class="container items-center max-w-4xl px-5 mx-auto space-y-6 text-center"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center"
        >
          <span class="block uppercase text-gray-700">
            Stable Coin
            <span class="block mt-1 text-blue-700 lg:inline lg:mt-0">
              Factory
            </span>
          </span>
        </h1>
        <p
          class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center"
        >
          Automated algorithmic lending collateralization platform built for
          stable dollar cryptocurrencies. Governed by users and market
          conditions, rewarding users with exponential gains.
        </p>
        <div
          class="relative flex flex-col justify-center md:flex-row md:space-x-4 font-semibold py-8"
        >
          <router-link
            to="dapp"
            class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-700 rounded-md md:mb-0 hover:bg-blue-800 md:w-auto"
          >
            DAPP
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
          </router-link>
          <a
            href="https://app.uniswap.org/#/swap?chain=polygon&outputCurrency=0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
            class="flex items-center px-6 py-3 text-blue-500 bg-gray-50 rounded-md hover:bg-gray-100 hover:text-blue-600"
          >
            UNISWAP
          </a>
        </div>
      </div>
    </section>

    <section class="bg-white p-10">
      <div class="container px-8 mx-auto">
        <div class="flex grid items-center justify-center grid-cols-12 gap-y-8">
          <div
            class="flex items-center justify-center col-span-6 md:col-span-3"
          >
           
           <a href="https://matcha.xyz/markets/137/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"> <img src="img/matcha.png" class="block object-contain h-14" /></a>
          </div>
          <div
            class="flex items-center justify-center col-span-6 md:col-span-3"
          >
           <a href="https://info.uniswap.org/#/polygon/tokens/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"> <img src="img/uniswap.png" class="block object-contain h-12" /></a>
          </div>
          <div
            class="flex items-center justify-center col-span-6 md:col-span-3"
          >
        <a href="https://polygonscan.com/token/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a">    <img src="img/polyscan.png" class="block object-contain h-10" /> </a>
          </div>
          <div
            class="flex items-center justify-center col-span-6 md:col-span-3"
          ></div>    
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

import Price from '../components/dexprice.vue'

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
