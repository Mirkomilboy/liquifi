<template>
    <section id="about-us" class="bg-grey-lighter">
      <div class="py-16 md:mx-auto md:flex md:max-w-6xl px-6 sm:px-8 lg:px-4">
        <div class="md:mr-20 lg:mr-32 md:w-1/2 lg:w-2/5">
          <heading preTitle="We already have a proven track record of success." title="We already have a proven track record of success."
            subtitle="
            We built Venture360–an investment management application for VCs, Angel groups, accelerators, and family offices. Organizations from all around the globe rely on Venture360 daily to track their investments.
            "/>
          <div>
            <a class="text-grey-darker border border-grey-light bg-white px-4 py-2" href="https://venture360.co"
              >Visit Venture360</a
            >
          </div>
        </div>
        <div class="flex pt-8 pr-6 md:w-1/2 lg:w-3/5">
          <div class="mb-8 mt-4 lg:w-3/5">
            <div class="wow fadeInUp mb-0 flex-none" data-wow-delay="0.0s">
              <div class="flex">
                <div class="mr-4 flex-none">
                  <div
                    class="bg-blue-lighter z-50 flex h-12 w-12 items-center justify-center rounded text-center"
                  >
                   <SparklesIcon class="text-white/75 w-6"/>
                  </div>
                  <div
                    class="wow fadeIn z-10 flex flex-col content-center items-center justify-center py-3"
                    data-wow-delay="0.4s"
                  >
                    <div class="bg-grey-light mb-2 h-4 w-1 rounded-full"></div>
                    <div class="bg-grey mb-1 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey mb-1 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey mb-2 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey-light h-4 w-1 rounded-full"></div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="text-blue mb-2 text-xs font-bold uppercase">
                    2014 – Founded
                  </div>
                  <div class="rounded overflow-hidden bg-white py-6 px-16 shadow-sm">
                    <img
                      src="@/assets/svgs/logo-venture360.svg"
                      alt="Venture360 dark"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="wow fadeInUp mb-0 flex-none" data-wow-delay="0.2s">
              <div class="flex">
                <div class="mr-4 flex-none">
                  <div
                    class="bg-blue-light z-50 flex h-12 w-12 items-center justify-center rounded text-center"
                  >
                    <PaperAirplaneIcon class="text-white/75 w-6"/>
                  </div>
                  <div
                    class="wow fadeIn z-10 flex flex-col content-center items-center justify-center py-3"
                    data-wow-delay="0.6s"
                  >
                    <div class="bg-grey-light mb-2 h-4 w-1 rounded-full"></div>
                    <div class="bg-grey mb-1 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey mb-1 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey mb-2 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey-light h-4 w-1 rounded-full"></div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="text-blue mb-2 text-xs font-bold uppercase">
                    2015 – Launch
                  </div>
                  <div class="text-grey-darkest text-sm leading-4">
                    Venture360 introduced a suite of portfolio management
                    products to help track the investment process for VCs,
                    Angels, Accelerators, and family offices all over the world.
                  </div>
                </div>
              </div>
            </div>

            <div class="wow fadeInUp mb-0 flex-none" data-wow-delay="0.4s">
              <div class="flex">
                <div class="mr-4 flex-none">
                  <div
                    class="bg-blue z-50 flex h-12 w-12 items-center justify-center rounded text-center"
                  >
                    <BriefcaseIcon class="text-white/75 w-6"/>
                  </div>
                  <div
                    class="wow fadeIn z-10 flex flex-col content-center items-center justify-center py-3"
                    data-wow-delay="0.8s"
                  >
                    <div class="bg-grey-light mb-2 h-4 w-1 rounded-full"></div>
                    <div class="bg-grey mb-1 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey mb-1 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey mb-2 h-1 w-1 rounded-full"></div>
                    <div class="bg-grey-light h-4 w-1 rounded-full"></div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="text-blue mb-2 text-xs font-bold uppercase">
                    2017 – Companies
                  </div>
                  <div class="text-grey-darkest text-sm leading-4">
                    Expanded tools to manage the capital raising process from
                    deal rooms to cap tables.
                  </div>
                </div>
              </div>
            </div>

            <div class="wow fadeInUp mb-0 flex-none" data-wow-delay="0.6s">
              <div class="flex">
                <div class="mr-4 flex-none">
                  <div
                    class="bg-blue-dark z-50 flex h-12 w-12 items-center justify-center rounded text-center"
                  >
                    <LightningBoltIcon class="text-white/75 w-6"/>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="text-blue mb-2 text-xs font-bold uppercase">
                    2019 – Version 2.0
                    <span class="italic">(coming&nbsp;soon)</span>
                  </div>
                  <div class="text-grey-darkest text-sm leading-4">
                    Rebuilt from scratch, we&#39;ve streamlined the entire
                    investment process, simplified the user interface, and
                    significantly increased performance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import heading from '@/components/heading.vue'
import { SparklesIcon, PaperAirplaneIcon, LightningBoltIcon, BriefcaseIcon } from '@heroicons/vue/outline';

export default defineComponent({
    components: { BriefcaseIcon, PaperAirplaneIcon, SparklesIcon, LightningBoltIcon, heading },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>