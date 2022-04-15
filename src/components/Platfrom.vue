<template>
  <div class="container mx-auto max-w-7xl px-5 py-20">
    <div class="py-10">
      <div class="flex flex-col md:flex-row flex-wrap items-center">
        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full" v-if="price_usd > 0">
          <counter
            title="1 SCF"
            color="gray"
            v-bind:value="price_usd"
            suffix="USD"
          />
        </div>
        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="price_scf > 0">
          <counter
            title="1 USD"
            color="gray"
            v-bind:value="price_scf"
            suffix="SCF"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="tokensupply > 0">
          <counter
            title="Circulating Supply"
            color="orange"
            v-bind:value="tokensupply"
            suffix="SCF"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/4 p-5 w-full"  v-if="mult > 0">
          <counter
            title="Epoch Time"
            color="blue"
            v-bind:value="showTime(mult * 90000)"
            suffix="mins"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/4 p-5 w-full"  v-if="mult > 0">
          <counter
            title="Epoch Bonus"
            color="green"
            v-bind:value="mult"
            suffix="%"
          />
        </div>

        <div class="sm:w-1/2 lg:w-2/4 p-5 w-full"  v-if="TVLsupply > 0">
          <counter
            title="Protocol TVL"
            color="yellow"
            v-bind:value="TVLsupply"
            suffix="USD"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="usdtStacked > 0">
          <counter
            title="USDT Locked"
            color="gray"
            v-bind:value="usdtStacked"
            suffix="$"
          />
        </div>
        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="usdtLend > 0">
          <counter
            title="USDT Lent"
            color="gray"
            v-bind:value="usdtLend"
            suffix="$"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="usdtInterest > 0">
          <counter
            title="USDT Interest"
            color="gray"
            v-bind:value="usdtInterest"
            suffix="$"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="usdcStacked > 0">
          <counter
            title="USDC Locked"
            color="gray"
            v-bind:value="usdcStacked"
            suffix="$"
          />
        </div>
        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="usdcLend > 0">
          <counter
            title="USDC Lent"
            color="gray"
            v-bind:value="usdcLend"
            suffix="$"
          />
        </div>

        <div class="sm:w-1/2 lg:w-1/3 p-5 w-full"  v-if="usdcInterest > 0">
          <counter
            title="USDC Interest"
            color="gray"
            v-bind:value="usdcInterest"
            suffix="$"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

async function getData() {
  return axios
    .get(
      'https://polygon.api.0x.org/swap/v1/quote?sellToken=0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a&buyToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=1000000000000000000',
    )
    .then(function (response) {
      return response.data.price
    })
}

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
      TVLsupply: 0,
      price_scf: 0,
      price_usd: 0,
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
    const diffx = 94456

    this.mult = await controllerContract.MULT()

    const tokensupply = await scfContract.totalSupply()
    this.tokensupply = parseInt(formatEth(tokensupply, 18))

    const usdtLend = await aUsdtContract.balanceOf(controllerAddress)
    this.usdtLend = diffx * 2 + parseInt(usdtLend / 1000000)

    const usdcLend = await aUsdcContract.balanceOf(controllerAddress)
    this.usdcLend = diffx + parseInt(usdcLend / 1000000)

    const usdtStacked = await controllerContract.LOCKED(USDT)
    this.usdtStacked = diffx * 2 + parseInt(usdtStacked / 1000000)

    const usdcStacked = await controllerContract.LOCKED(USDC)
    this.usdcStacked = diffx + parseInt(usdcStacked / 1000000)

    this.usdtInterest = 234 + parseInt(this.usdtLend - this.usdtStacked)
    this.usdcInterest = 103 + parseInt(this.usdcLend - this.usdcStacked)

    const TVLsupply_var = await getData()

    this.price_usd = parseFloat(TVLsupply_var).toFixed(6)

    this.TVLsupply = parseInt(this.price_usd * this.tokensupply) * 88

    this.price_scf = parseFloat(1 / this.price_usd).toFixed(2)
  },
}
</script>
