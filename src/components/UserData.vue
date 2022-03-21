<template>
  <div>
    <div class="container mx-auto max-w-7xl px-5">
      <div class="py-8">
        <price />
        <div
          class="p-6 bg-white rounded-xl shadow-xl hover:shadow-xl transform hover:scale-105 transition duration-500 max-w-4xl mx-auto"
        >
          <div class="flex items-start space-x-6">
            <div class="flex bg-gray-100 p-4 space-x-4 rounded-lg w-3/6">
              <img src="/img/dollar.png" class="w-8 h-8" />
              <input
                class="bg-gray-100 outline-none w-full text-xl font-semibold text-gray-700"
                type="number"
                placeholder="Amount of USD"
                v-model="depositAmount"
              />
            </div>

            <div
              v-if="!showusdselect"
              @click="showselect()"
              class="bg-gray-700 py-5 px-5 text-center text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer w-3/6"
            >
              <span>MINT SCF</span>
            </div>

            <div
              v-if="showusdselect && !showusdtapproval"
              @click="mintSCFUsingUsdt()"
              class="bg-blue-600 py-5 px-5 text-center text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>MINT USING USDT</span>
            </div>

            <div
              v-if="showusdtapproval"
              @click="approveUsdt()"
              class="bg-green-600 py-5 px-5 text-center text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>Approve USDT</span>
            </div>

            <div
              v-if="showusdselect && !showusdcapproval"
              @click="mintSCFUsingUsdc()"
              class="bg-blue-600 py-5 px-5 text-center text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>MINT USING USDC</span>
            </div>

            <div
              v-if="showusdcapproval"
              @click="approveUsdc()"
              class="bg-green-600 py-5 px-5 text-center text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>Approve USDC</span>
            </div>
          </div>

          <div
            class="flex justify-center space-x-8 mt-4 p-2 text-sm text-green-700 rounded-lg"
            role="alert"
          >
            <div>
              <span class="font-medium">{{ usdtBalance }}</span> USDT
            </div>
            <div>
              <span class="font-medium">{{ usdcBalance }}</span> USDC
            </div>
            <div>
              <span class="font-medium">{{ scfBalance }}</span> SCF
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto max-w-7xl px-5">
      <div class="py-10">
        <div class="flex md:flex-row flex-col items-center">
          <div class="md:w-1/3 p-5 w-full">
            <counter
              title="SCF Balance"
              color="bg-red-600"
              v-bind:value="scfBalance"
            />
          </div>
          <div class="md:w-1/3 p-5 w-full">
            <counter
              title="SCF Pending"
              color="bg-blue-600"
              v-bind:value="pendingBal"
            />
          </div>

          <div class="md:w-1/3 p-5 w-full" v-if="pendingTime - timex > 0">
            <counter
              title="Unlocking Time"
              color="bg-green-600"
              v-bind:value="showTime(pendingTime)"
            />
          </div>

          <div
            class="md:w-1/3 p-5 w-full"
            v-if="pendingTime - timex < 0 && pendingBal > 0"
            @click="claimSCF()"
          >
            <button
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
              <svg
                class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="ethereum"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                ></path>
              </svg>
              Claim SCF Token
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import {
  controllerContract,
  controllerAddress,
  scfContract,
  formatEth,
  setContract,
  MAX_ALLOWANCE,
  checkApproval,
} from "../func.js";

import { format } from "timeago.js";

import counter from "./counter.vue";
import price from "./price.vue";

export default {
  name: "UserData",
  props: {
    address: String,
  },
  components: {
    counter,
    price,
  },
  data() {
    return {
      timex: 0,
      pendingBal: 0,
      pendingTime: 0,
      depositAmount: 0,
      showusdselect: false,
      showusdtapproval: false,
      showusdcapproval: false,
      showUSD: "Fetching..",
      usdtBalance: 0,
      usdcBalance: 0,
      scfBalance: 0,
    };
  },
  methods: {
    showselect: function () {
      this.showusdselect = true;
    },
    showTime: function (time) {
      return format(time * 1000);
    },
    async mintSCFUsingUsdt() {
      const { usdtApproval } = await checkApproval(this.address);

      const { controllerContract } = await setContract();

      if (usdtApproval) {
        const amount = ethers.utils.parseUnits(
          this.depositAmount.toString(),
          6
        );
        const done = await controllerContract.runUSDT(amount, {
          gasLimit: 700000,
        });

        console.log(done);
      } else {
        this.showusdtapproval = true;
      }
    },

    async approveUsdt() {
      const { usdtContract } = await setContract();

      const approved = await usdtContract.approve(
        controllerAddress,
        MAX_ALLOWANCE
      );

      console.log(approved);

      this.showusdtapproval = false;
    },

    async mintSCFUsingUsdc() {
      const { usdcApproval } = await checkApproval(this.address);

      const { controllerContractSet } = await setContract();

      if (usdcApproval) {
        const amount = ethers.utils.parseUnits(
          this.depositAmount.toString(),
          6
        );
        const done = await controllerContractSet.runUSDC(amount, {
          gasLimit: 700000,
        });

        console.log(done);
      } else {
        this.showusdcapproval = true;
      }
    },

    async approveUsdc() {
      const { usdcContract } = await setContract();

      const approved = await usdcContract.approve(
        controllerAddress,
        MAX_ALLOWANCE
      );

      console.log(approved);

      this.showusdcapproval = false;
    },

    async claimSCF() {
      const { controllerContract } = await setContract();

      const claimed = await controllerContract.claim({
        gasLimit: 700000,
      });

      console.log(claimed);
    },
  },
  async mounted() {
    const addr = this.address;

    const unixTime = Math.round(new Date().getTime() / 1000);
    this.timex = unixTime;

    const pendingBal = await controllerContract.pendingBal(addr);
    this.pendingBal = parseFloat(formatEth(pendingBal, 18)).toFixed(4);

    const pendingTime = await controllerContract.pendingTime(addr);
    this.pendingTime = pendingTime;

    const { usdtContract, usdcContract } = await setContract();
    const usdtBalance = await usdtContract.balanceOf(addr);
    const usdcBalance = await usdcContract.balanceOf(addr);
    const scfBalance = await scfContract.balanceOf(addr);

    this.usdtBalance = parseFloat(formatEth(usdtBalance, 6)).toFixed(4);
    this.usdcBalance = parseFloat(formatEth(usdcBalance, 6)).toFixed(4);
    this.scfBalance = parseFloat(formatEth(scfBalance, 18)).toFixed(4);
  },
};
</script>
