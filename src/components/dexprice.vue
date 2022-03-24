<template>
  <div>
    <p
      @mouseenter="fetcher()"
      class="py-20 max-w-4xl mx-auto text-gray-800 text-6xl font-bold text-center transform hover:scale-150 transition duration-1000"
    >
      1 SCF = {{ showPrice }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

async function getData(var1) {
  return axios
    .get(
      'https://polygon.api.0x.org/swap/v1/quote?sellToken=0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a&buyToken=' +
        var1 +
        '&sellAmount=1000000000000000000',
    )
    .then(function (response) {
      return parseFloat(response.data.price).toFixed(8)
    })
}

export default {
  data() {
    return {
      changeCheck: false,
      showPrice: '..',
    }
  },
  methods: {
    async fetcher() {
      var USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
      var USDC = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
      var MATIC = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
      var ETH = '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'

      const rand = Math.floor(Math.random() * 4)
      console.log(rand)

      if (rand == 0) {
        const data = await getData(USDT)
        this.showPrice = data + ' USDT'
      }

      if (rand == 1) {
        const data = await getData(USDC)
        this.showPrice = data + ' USDC'
      }

      if (rand == 2) {
        const data = await getData(MATIC)
        this.showPrice = data + ' MATIC'
      }

      if (rand == 3) {
        const data = await getData(ETH)
        this.showPrice = data + ' ETH'
      }
    },
  },
  async mounted() {
    this.fetcher()
  },
}
</script>
