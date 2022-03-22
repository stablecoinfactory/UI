<template>
  <div>
    <div class="container mx-auto max-w-7xl px-5">
      <div class="py-10">
        <div class="flex md:flex-row flex-col items-center">
          <div class="md:w-1/2 p-5">
            <p class="text-3xl font-bold uppercase">
              Get Higher APY with
            </p>
            <p class="text-7xl font-bold uppercase text-red-400">
              Stable Coin Factory
            </p>
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
