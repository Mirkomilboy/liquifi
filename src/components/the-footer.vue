<script setup lang="ts">
import { useStore } from '../store'
const store = useStore()
</script>

<template>
  <!-- footer-container -->
  <footer class="border-grey-lighter border-t-2">
    <div class="mx-auto w-3/4 max-w-4xl py-16">
      <div class="text-grey-dark mb-2 text-center text-xs">
        Liquifi &copy; 2022 Venture360
      </div>
      <div class="flex gap-4 justify-center text-[13px] text-grey-darker text-center">
        <a
          href="http://localhost:3000/docs/liquifi_privacy_policy.pdf"
          class="text-link underline hover:text-[#20504f]"
          target="_blank"
          >Privacy Policy</a
        >
        <a
          href="http://localhost:3000/docs/liquifi_terms_of_service.pdf"
          class="text-link underline hover:text-[#20504f]"
          target="_blank"
          >Terms of Service</a
        >
      </div>
    </div>
  </footer>
</template>
