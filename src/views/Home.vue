<template>
  <div>
    <div class="container mx-auto xl:px-32 text-center lg:text-left">
      <div class="grid lg:grid-cols-2 flex items-center">
        <div class="mb-12 lg:mb-0">
          <div
            class="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
            style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
              z-index: 1;
            "
          >
            <h2 class="text-3xl font-bold mb-4 display-5">
              STABLE COIN FACTORY
            </h2>
            <p class="text-gray-500 text-xl mb-4">
              Automated algorithmic collateralization platform built for stable
              dollar cryptocurrencies. Governed by users and market conditions,
              powered by AAVE & Uniswap.
            </p>
          </div>
          <div
            class="relative flex flex-col justify-center md:flex-row md:space-x-4 font-semibold py-8 px-5"
          >
            <a
              href="https://app.stablecoinfactory.com/"
              class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-700 rounded-md md:mb-0 hover:bg-gray-800 md:w-auto"
            >
              APP
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
              href="https://app.uniswap.org/#/swap?chain=polygon&outputCurrency=0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
              class="flex items-center px-6 py-3 text-gray-500 bg-gray-50 rounded-md hover:bg-gray-100 hover:text-gray-600"
            >
              UNISWAP
            </a>
          </div>
        </div>

        <div>
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_rmizwv6a.json"
            background="transparent"
            speed="1"
            class="w-full hidden md:block"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>

    <Platfrom />

    <div class="container my-24 px-6 mx-auto max-w-7xl">
      <section class="mb-32 text-gray-800 text-center md:text-left">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="mb-6 md:mb-0">
            <h2 class="text-3xl font-bold mb-6">
              FIND US ON
            </h2>
            <p class="text-gray-500 mb-6">
              Keep in touch with what’s happening!
            </p>

            <a
              class="inline-block px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href="https://t.me/scftg"
              role="button"
            >
              Join Telegram
            </a>
            <a
              class="inline-block px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href="https://stablecoinfactory.medium.com/"
              role="button"
            >
              Read Medium
            </a>
          </div>

          <div class="mb-6 md:mb-0">
            <div class="grid grid-cols-2 gap-6">
              <div class="mb-12">
                <a
                  href="https://info.uniswap.org/#/polygon/tokens/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
                >
                  <img src="img/uniswap.png" class="px-6" alt="Uniswap" />
                </a>
              </div>
              <div class="mb-12">
                <a
                  href="https://matcha.xyz/markets/137/0x7075f7b8d36998c4429fc43d20ce41f2a3c7ef9a/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                >
                  <img src="img/matcha.png" class="px-6" alt="Uniswap" />
                </a>
              </div>
              <div class="mb-12">
                <a
                  href="https://polygonscan.com/token/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
                >
                  <img src="img/polyscan.png" class="px-6" alt="Uniswap" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Platfrom from '../components/Platfrom.vue'

export default {
  name: 'Home',
  components: {
    Platfrom,
  },
}
</script>
