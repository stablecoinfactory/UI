<template>
  <section class="container mx-auto max-w-7xl px-5 py-24">
    <h2 class="mb-16 text-xl font-extrabold md:text-4xl text-center">
      How it works
    </h2>

    <section class="grid lg:grid-cols-3 grid-cols-1 gap-10 antialiased">
      <article
        class="flex flex-col border-2 border-orange-200 mx-auto max-w-sm bg-orange-100 py-8 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-100 rounded-xl"
      >
        <div class="h-32 pb-8">
          <img class="mx-auto h-50" src="/img/deposit.png" alt="" />
        </div>
        <h1 class="font-extrabold text-6xl mt-36 mb-4 text-orange-600">01.</h1>
        <h2 class="font-bold mb-5 text-gray-800 text-xl">Deposit USD</h2>
        <p class="text-sm leading-relaxed text-gray-700">
          Mint $SCF token using our protocol, the amount minted by USD stable
          coin is lent to a lending reserve.
        </p>
      </article>

      <article
        class="flex flex-col border-2 border-green-200 mx-auto max-w-sm bg-green-100 py-8 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-100 rounded-xl"
      >
        <div class="h-32 pb-8">
          <img class="mx-auto h-50" src="/img/lock.png" alt="" />
        </div>
        <h1 class="font-extrabold text-6xl mt-36 mb-4 text-green-600">02.</h1>
        <h2 class="font-bold mb-5 text-gray-800 text-xl">Lock Funds</h2>
        <p class="text-sm leading-relaxed text-gray-700">
          The interest generated is collected in interest reserves which are
          then used to do token buybacks and burns.
        </p>
      </article>

      <article
        class="flex flex-col border-2 border-blue-200 mx-auto max-w-sm bg-blue-100 py-8 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-100 rounded-xl"
      >
        <div class="h-32 pb-8">
          <img class="mx-auto h-50" src="/img/claim.png" alt="" />
        </div>
        <h1 class="font-extrabold text-6xl mt-36 mb-4 text-blue-600">03.</h1>
        <h2 class="font-bold mb-5 text-gray-800 text-xl">Claim Rewards</h2>
        <p class="text-sm leading-relaxed text-gray-700">
          Depending on the market condition, the lockup time and rewards are
          adjusted which keeps protocol in positive cash flow.
        </p>
      </article>
    </section>
    <section class="mt-24 rounded-xl overflow-hidden shadow-lg bg-white">
      <video controls autoplay>
        <source src="lasthd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  </section>
</template>
