<template>
  <section class="container mx-auto max-w-7xl px-5 py-24">
    <h2 class="text-5xl font-extrabold leading-9 text-center pb-20">
      Frequently Asked Questions
    </h2>

    <div v-for="item in faqs" :key="item.id">
      <div class="py-2">
        <h2>
          <button
            type="button"
            class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-900 rounded-t-xl border border-b-0 border-gray-200 border-gray-700 text-white bg-gray-700 hover:bg-gray-900"
            @click="toggleAccordion(item.id)"
          >
            <span>{{ item.title }}</span>
          </button>
        </h2>
        <div v-bind:class="isOpen[item.id] ? '' : 'hidden'">
          <div class="shadow-xs p-4 border rounded-b-xl bg-white">
            <p class="mb-2 text-gray-700">
              <span v-html="item.desc"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: {
        1: true,
      },
      faqs: [
        {
          id: 1,
          title: "What is STABLE COIN FACTORY?",
          desc: `STABLE COIN FACTORY is an Algorithmic saving protocol that will help individuals to grow their portfolios. The Token is $SCF.`,
        },
        {
          id: 2,
          title: "How to Invest?",
          desc: `You can Invest in 3 Easy Steps:</br>
          1. Connect our App with any Web3 wallet.</br>
          2. Enter the amount in USDC or USDT.</br>
          3. Mint $SCF token.`,
        },
        {
          id: 3,
          title: "What chain is STABLE COIN FACTORY launched on??",
          desc: `STABLE COIN FACTORY is deployed on the Polygon chain, we will continue to spread it in more chains in the future.`,
        },
        {
          id: 4,
          title: "How is the value of STABLE COIN FACTORY Determined?",
          desc: `Its Value depends on various Factors:</br>
          1. Number of Holders</br>
          2. Interest that we are getting from Aave</br>
          3. Total Value Locked (TVL)`,
        },
        {
          id: 5,
          title: "Governance?",
          desc: `$SCF is the governance token of STABLE COIN FACTORY. The governance depends on the community holding the $SCF tokens.`,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(id) {
      this.isOpen[id] = !this.isOpen[id] || false;
    },
  },
};
</script>
