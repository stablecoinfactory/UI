<template>
  <div>
    <Header :address="address" />
    <Banner />
    <NoUserData v-if="!showuserpanel" />

    <UserData v-bind:address="address" v-if="showuserpanel" />

    <Platfrom />

    <Howitworks />
    <FAQs />
    <Footer />
  </div>
</template>

<script>
import NoUserData from "./components/NoUserData.vue";
import UserData from "./components/UserData.vue";
import Platfrom from "./components/Platfrom.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Howitworks from "./components/howitworks.vue";
import Banner from "./components/banner.vue";
import FAQs from "./components/faqs.vue";

import detectEthereumProvider from "@metamask/detect-provider";

export default {
  name: "App",
  data() {
    return {
      metamask: false,
      address: "",
      showuserpanel: false,
    };
  },
  components: {
    NoUserData,
    UserData,
    Platfrom,
    Footer,
    Header,
    Howitworks,
    Banner,
    FAQs,
  },

  async mounted() {
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
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  font-family: "Work Sans", sans-serif;
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
  font-family: "Merriweather", serif;
}
</style>
