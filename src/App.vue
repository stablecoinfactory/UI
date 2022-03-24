<template>
  <div id="app">
    <div
      class="max-w-8xl container mx-auto flex flex-col items-center justify-between pt-5 lg:flex-row h-30"
    >
      <nav
        class="flex flex-col lg:flex-row items-center mb-5 text-xl text-gray-600 hover:text-gray-900 text-gradient"
      >
        <router-link
          to="/"
          class="lg:mr-10 font-bold leading-6 text-3xl text-gray-900 text-center"
        >
          STABLE COIN FACTORY
        </router-link>
        <div class="mt-4 lg:mt-0">
          <router-link to="/faq" class="mr-5 font-medium leading-6 underline">
            FAQs
          </router-link>
          <router-link
            to="/contact"
            class="mr-5 font-medium leading-6 underline"
          >
            Contact
          </router-link>
        </div>
      </nav>

      <nav class="flex flex-wrap items-center mb-5">
        <div
          v-if="isDapp"
          class="flex flex-col lg:flex-row items-center leading-none rounded-full p-2 text-teal md:block"
        >
          <span
            class="text-xs lg:text-sm bg-gray-700 text-white rounded-full py-2 px-3 justify-center items-center"
          >
            POLYGON
          </span>
          <span v-if="address" class="p-2 text-gray-700 text-xs lg:text-sm">
            {{ address }}
          </span>
        </div>

        <router-link
          to="dapp"
          v-if="!isDapp"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-sm px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go to DApp
        </router-link>
        <a
          v-if="!isDapp"
          href="https://t.me/scftg"
          class="py-3 px-5 mr-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Telegram
        </a>
      </nav>
    </div>

    <UserData v-bind:address="address" v-if="isDapp && showuserpanel" />

    <div
      class="container mx-auto max-w-7xl px-5"
      v-if="isDapp && !showuserpanel"
    >
      <div class="py-8">
        <div class="flex md:flex-row flex-col items-center">
          <div
            class="text-center p-4 mb-4 text-md text-red-700 bg-red-200 rounded-lg w-full"
            role="alert"
          >
            Install WEB3 Wallet/Browser to display your status.
          </div>
        </div>
      </div>
    </div>

    <router-view />

    <footer>
      <div
        class="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between space-y-6 space-y-reverse px-4 py-10 text-md font-medium text-gray-500 sm:flex-row sm:items-start sm:space-y-0"
      >
        <div class="flex items-center space-x-4">
          <p>STABLE COIN FACTORY © 2022.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import detectEthereumProvider from "@metamask/detect-provider";
import UserData from "@/components/UserData.vue";

export default {
  data() {
    return {
      address: "",
      showuserpanel: false,
    };
  },
  computed: {
    isDapp() {
      return this.$route.name === "Dapp";
    },
  },
  components: {
    UserData,
  },
  watch: {
    $route: "listenRoute",
  },
  methods: {
    async listenRoute() {
      if (this.$route.name === "Dapp") {
        try {
          const provider = await detectEthereumProvider();
          if (provider) {
            this.metamask = true;
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            this.address = accounts[0];
            this.showuserpanel = true;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
