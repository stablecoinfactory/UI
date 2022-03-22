<template>
  <div id="app">
    <div
      class="container mx-auto flex flex-col flex-wrap items-center justify-between py-5 md:flex-row uppercase text-3xl"
    >
      <div class="relative flex flex-col md:flex-row">
        <router-link
          to="/"
          class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
        >
          <span
            class="mx-auto font-black leading-none text-gray-900 select-none"
          >
            STABLE COIN FACTORY
          </span>
        </router-link>
      </div>

      <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <nav class="flex flex-wrap items-center mb-5 text-base">
          <router-link
            to="/faq"
            class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            FAQ
          </router-link>
          <router-link
            to="/contact"
            class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            CONTACT
          </router-link>
        </nav>
      </div>

      <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <nav class="flex flex-wrap items-center mb-5 text-base">
          <div
            v-if="isDapp"
            class="inline-flex items-center leading-none ${props.textColor} rounded-full p-2 text-teal text-sm hidden md:block"
          >
            <span
              class="inline-flex bg-gray-700 text-white rounded-full h-6 px-3 justify-center items-center"
            >
              POLYGON
            </span>
            <span v-if="address" class="inline-flex px-2 text-gray-700">
              {{ address }}
            </span>
          </div>

          <router-link
            v-if="!isDapp"
            to="dapp"
            class="flex items-center w-full px-6 py-3 mb-3 text-xl text-white bg-gray-600 rounded-md md:mb-0 hover:bg-red-500 md:w-auto"
          >
            DAPP
          </router-link>
        </nav>
      </div>
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
import detectEthereumProvider from '@metamask/detect-provider'
import UserData from '@/components/UserData.vue'

export default {
  data() {
    return {
      address: '',
      showuserpanel: false,
    }
  },
  computed: {
    isDapp() {
      return this.$route.name === 'Dapp'
    },
  },
  components: {
    UserData,
  },
  async mounted() {
    try {
      const provider = await detectEthereumProvider()
      if (provider) {
        this.metamask = true
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        this.address = accounts[0]
        this.showuserpanel = true
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  font-family: 'Work Sans', sans-serif;
  background-color: #ffffff;
  opacity: 1;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #ffffff 10px
    ),
    repeating-linear-gradient(#f7f7f755, #f7f7f7);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Merriweather', serif;
}
</style>
