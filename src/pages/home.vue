<script lang="ts">
  import Header from '@/components/the-header.vue'
  import Footer from '@/components/the-footer.vue'
  import SectionHero from '@/components/Sections/HomeHero.vue'
  import SectionMarkets from '@/components/Sections/HomeMarkets.vue'
  import SectionFeatures from '@/components/Sections/HomeFeatures.vue'
  import SectionAboutUs from '@/components/Sections/HomeAboutUs.vue'
  import SectionSolutions from '@/components/Sections/HomeSolutions.vue'
  import SectionFaq from '@/components/Sections/HomeFaq.vue'

  export default {
    components: { Header, SectionHero, SectionMarkets, SectionFeatures, SectionAboutUs, SectionSolutions, SectionFaq, Footer }
  }
</script>

<template>
  <main id="main">
    <div class="min-h-[650px] sm:min-h-[798px] bg-hero-grey bg-no-repeat bg-top-center bg-100">
      <div class="min-h-[650px] sm:min-h-[798px] bg-hero-bottom bg-no-repeat bg-bottom-center bg-100">
        <div class="max-w-6xl px-6 md:px-10 pt-8 md:mx-auto md:pt-16">
          <!-- header -->
          <Header />
          <!-- ./ header -->
          <!-- hero -->
          <SectionHero />
          <!-- ./ hero -->
        </div>
      </div>
    </div>
    <div class="bg-grey-lightest">
      <!-- markets -->
      <SectionMarkets />
      <!-- ./ markets -->
      <!-- features -->
      <SectionFeatures />
      <!-- ./ features -->
    </div>
    <!-- credibility -->
    <SectionAboutUs />
    <!-- ./ credibility -->
    <!-- solutions -->
    <SectionSolutions />
    <!-- ./ solutions -->
    <!-- faq -->
    <SectionFaq />
    <!-- ./ faq -->
  </main>
  <!-- footer -->
  <Footer />
  <!-- ./ footer -->
</template>
