<template>
  <p
    @mouseenter="fetcher()"
    class="py-20 max-w-4xl mx-auto text-gray-800 text-6xl font-bold text-center transform hover:scale-150 transition duration-1000"
  >
    1 SCF = {{ showUSD }}
  </p>
</template>

<script>
import { controllerContract, USDT, USDC, formatEth } from "../func.js";

export default {
  name: "price",

  data() {
    return {
      usdt: 0,
      usdc: 0,
      changeCheck: false,
      showUSD: "..",
    };
  },
  methods: {
    async fetcher() {
      if (this.changeCheck) {
        this.showUSD = this.usdt;
        this.changeCheck = !this.changeCheck;
      } else {
        this.showUSD = this.usdc;
        this.changeCheck = !this.changeCheck;
      }
    },
  },
  async mounted() {
    const pendingUsdt = await controllerContract.STABLEFACT(USDT);
    const pendingUsdc = await controllerContract.STABLEFACT(USDC);

    const usdt = parseFloat(formatEth(pendingUsdt, 18)).toFixed(4) + " USDT";
    const usdc = parseFloat(formatEth(pendingUsdc, 18)).toFixed(4) + " USDC";

    this.usdt = usdt;
    this.usdc = usdc;
    this.showUSD = this.usdt;
  },
};
</script>
