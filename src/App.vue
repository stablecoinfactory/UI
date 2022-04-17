<template>
  <div id="app">
    <header class="border-b border-gray-100">
      <div
        class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
      >
        <div class="flex items-center">
          <router-link to="/">
            STABLE COIN FACTORY
          </router-link>
        </div>

        <div class="flex items-center justify-end flex-1">
          <nav
            class="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
          >
            <router-link
              to="/guide"
              class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              Guide
            </router-link>
            <router-link
              to="/faq"
              class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              FAQ
            </router-link>
            <router-link
              to="/contact"
              class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              CONTACT
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <router-view />

    <footer>
      <div
        class="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between space-y-6 space-y-reverse px-4 py-10 text-md font-medium text-gray-500 sm:flex-row sm:items-start sm:space-y-0"
      >
        <div class="mx-auto">
          <p>STABLE COIN FACTORY © 2022.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
