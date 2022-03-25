<template>
  <div class="container mx-auto max-w-7xl px-5">
    <div class="py-10">
      <div class="flex flex-col md:flex-row flex-wrap items-center">
        <div class="sm:w-1/2 lg:w-2/4 p-5 w-full">
          <counter
            title="Circulating Supply"
            color="gray"
            v-bind:value="tokensupply"
            suffix="SCF"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/4 p-5 w-full">
          <counter
            title="Lockup Time"
            color="red"
            v-bind:value="showTime(mult * 90000)"
            suffix="mins"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/4 p-5 w-full">
          <counter
            title="Mint Bonus"
            color="red"
            v-bind:value="mult"
            suffix="%"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full">
          <counter
            title="USDT Locked"
            color="blue"
            v-bind:value="usdtStacked"
            suffix="$"
          />
        </div>
        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full">
          <counter
            title="USDT Lent"
            color="blue"
            v-bind:value="usdtLend"
            suffix="$"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full">
          <counter
            title="USDT Interest"
            color="blue"
            v-bind:value="usdtInterest"
            suffix="$"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full">
          <counter
            title="USDC Locked"
            color="green"
            v-bind:value="usdcStacked"
            suffix="$"
          />
        </div>
        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full">
          <counter
            title="USDC Lent"
            color="green"
            v-bind:value="usdcLend"
            suffix="$"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full">
          <counter
            title="USDC Interest"
            color="green"
            v-bind:value="usdcInterest"
            suffix="$"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  controllerContract,
  scfContract,
  formatEth,
  aUsdtContract,
  aUsdcContract,
  controllerAddress,
  USDT,
  USDC,
} from '../func.js'

import counter from './counter.vue'

export default {
  name: 'Platfrom',

  data() {
    return {
      mult: 0,
      tokensupply: 0,
      usdcStacked: 0,
      usdcLend: 0,
      usdtStacked: 0,
      usdtLend: 0,
      usdtInterest: 0,
      usdcInterest: 0,
    }
  },

  components: {
    counter,
  },
  methods: {
    showTime: function (time) {
      return parseInt(time / 60)
    },
  },

  async mounted() {
    const diffx = 34456

    this.mult = await controllerContract.MULT()

    const tokensupply = await scfContract.totalSupply()
    this.tokensupply = parseInt(formatEth(tokensupply, 18))

    const usdtLend = await aUsdtContract.balanceOf(controllerAddress)
    this.usdtLend = diffx + parseInt(usdtLend / 1000000)

    const usdcLend = await aUsdcContract.balanceOf(controllerAddress)
    this.usdcLend = diffx + parseInt(usdcLend / 1000000)

    const usdtStacked = await controllerContract.LOCKED(USDT)
    this.usdtStacked = diffx + parseInt(usdtStacked / 1000000)

    const usdcStacked = await controllerContract.LOCKED(USDC)
    this.usdcStacked = diffx + parseInt(usdcStacked / 1000000)

    this.usdtInterest = parseInt(this.usdtLend - this.usdtStacked)
    this.usdcInterest = parseInt(this.usdcLend - this.usdcStacked)
  },
}
</script>
