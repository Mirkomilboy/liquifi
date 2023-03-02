<template>
    <section
      id="solutions"
      class="bg-bb-dark bg-dark-grey h-full md:flex bg-500"
    >
      <!-- or -->
      <!-- independent -->
      <div
        class="relative bg-white/[0.04] px-6 py-10 md:w-1/2 md:p-16 2xl:p-24"
      >
        <div class="mb-8 text-center md:mb-12">
          <div class="text-independent flex justify-center mb-4 text-4xl">
            <ColorSwatchIcon class="w-12"/>
          </div>
          <h3 class="mb-1 text-3xl font-thin text-white">Independent</h3>
          <div class="text-sm font-thin text-white/50">
            we supply the tools, you do the rest
          </div>
        </div>
        <div class="max-w-2xl mx-auto xl:px-9 text-grey-lighter/75 leading-tight whitespace-pre-line md:mb-12 mb-8">
          If you have consulted your legal representatives regarding your company’s individual compliance with the SEC regulations and are ready to power your own marketplace, then this option is for you!
          <br>
          <br>
          Liquifi’s support team is here to help if you have questions during set-up. You should be up and trading in just a few minutes!
        </div>
        <div class="text-center">
          <a
            class="inline-block rounded-3 border-independent bg-independent py-3 px-10 text-white"
            target="_blank"
            href="https://liquifi.typeform.com/to/qltuxL"
            >Create Market</a
          >
        </div>


        <div class="text-grey-dark text-[10px] flex h-8 w-8 items-center justify-center rounded-full bg-white text-center uppercase shadow-sm absolute left-1/2 md:left-full top-full md:top-1/2 -translate-x-1/2 -translate-y-1/2">
        or
        </div>
      </div>
      <!-- ./ independent -->
      <!-- enterprise -->
      <div class="px-6 py-10 md:w-1/2 md:p-16 2xl:p-24">
        <div class="mb-8 text-center md:mb-12">
          <div class="text-enterprise flex justify-center mb-4 text-4xl">
            <OfficeBuildingIcon class="w-12"/>
          </div>
          <h3 class="mb-1 text-3xl font-thin text-white">Enterprise</h3>
          <div class="text-sm font-thin text-white/50">
            custom designed and maintained for you
          </div>
        </div>
        <div class="max-w-2xl mx-auto xl:px-9 text-grey-lighter/75 leading-tight whitespace-pre-line md:mb-12 mb-8">
          If your organization requires a more custom or maintained solution, Liquifi will work closely with large enterprise clients to build specialized markets designed to perfectly fit any needs.
          <br>
          <br>
          Liquifi’s support team will create a custom market solution, such as trading employee stock options, a specific classes of stock, or anything else you have in mind. We will maintain all aspects of your market and help you scale over time.
          <br>
          <br>
          Whatever your conditions, we can build to suit.
        </div>
        <div class="text-center">
          <a
            class="inline-block rounded-3 border-enterprise bg-enterprise py-3 px-10 text-white"
            target="_blank"
            href="https://liquifi.typeform.com/to/flSfAq"
            >Request Proposal</a
          >
        </div>
      </div>
      <!-- ./ enterprise -->
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ColorSwatchIcon, OfficeBuildingIcon } from '@heroicons/vue/outline';

export default defineComponent({
    components: { ColorSwatchIcon, OfficeBuildingIcon },
    setup () {
      return {}
    }
})
</script>

<style scoped>

</style>