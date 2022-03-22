<template>
  <div>
    <div class="container mx-auto max-w-7xl px-5">
      <div class="py-10">
        <div class="flex md:flex-row flex-col items-center">
          <div class="md:w-1/2 p-5">
            <h1
              class="text-dark font-extrabold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[60px] leading-snug mb-3"
            >
              Get Higher APY with
              <span class="text-blue-800">Stable Coin Factory.</span>
            </h1>
            <p class="mb-8 text-body-color max-w-[480px] text-lg">
              With TailGrids, business and students thrive together. Business
              can perfectly match their staffing to changing demand throughout
              the dayed.
            </p>

             <div class="clients pt-8">
              <div class="flex justify-center">
                <a
                  class="w-1/2 py-3 mr-4"
                  href="https://polygonscan.com/address/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
                  target="_blank"
                >
                  <img src="/img/polyscan.png" alt="ayroui" />
                </a>
              </div>
              <div class="flex items-center">
                <a
                  class="w-full py-3 mr-4"
                  href="https://matcha.xyz/markets/137/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
                  target="_blank"
                >
                  <img src="/img/matcha.png" alt="ayroui" />
                </a>
                <a
                  class="w-full py-3 mr-4"
                  href="https://info.uniswap.org/#/polygon/tokens/0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a"
                  target="_blank"
                >
                  <img src="/img/uniswap.png" alt="uideck" />
                </a>
              </div>
            </div>


          </div>

          <div class="md:w-1/2 p-5">
            <lottie-player
              class="object-cover object-center"
              autoplay=""
              loop=""
              mode="normal"
              src="
              https://assets9.lottiefiles.com/private_files/lf30_sbi9rz2o.json"
              background="transparent"
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>

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
