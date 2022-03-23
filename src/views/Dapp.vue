<template>
  <div class="container mx-auto max-w-3xl my-24 px-4 md:px-0">
    <div class="flex flex-col">
      <h2 class="mb-8 text-xl font-extrabold md:text-4xl text-center">
        Recent Deposits
      </h2>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden rounded-lg shadow-md">
            <table class="min-w-full text-center">
              <thead class="border-b bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Stable Coin
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Deposited By
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b"
                  v-for="item of deposits"
                  :key="item.id"
                >
                  <td
                    class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.tokenName }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.address }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.amount }} SCF
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { formatEther } from "@ethersproject/units";
import { USDT, USDC } from "../func";

export default {
  data: () => ({
    deposits: [],
  }),
  async mounted() {
    const depositsRes = await axios({
      url: "https://api.thegraph.com/subgraphs/name/stablecoinfactory/scf-graph",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        query: `{
          deposits(first: 10, orderDirection: desc) {
            id
            token
            address
            amount
          }
        }`,
      }),
    });

    const depositsData = depositsRes.data.data.deposits.map((item) => {
      if (item.token.toLowerCase() === USDT.toLowerCase()) {
        item.tokenName = "USDT";
      }

      if (item.token.toLowerCase() === USDC.toLowerCase()) {
        item.tokenName = "USDC";
      }
      item.amount = parseFloat(formatEther(item.amount)).toFixed(4);
      return item;
    });

    this.deposits = depositsData;
  },
};
</script>
