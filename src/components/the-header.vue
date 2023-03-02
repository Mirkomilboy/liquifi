<script setup lang="ts">
import { computed, ref } from 'vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { useStore } from '../store'

const store = useStore()

const props = defineProps([ ])

const links = ref([
  {
    title: 'Markets',
    href: '#markets',
  },
  {
    title: new DOMParser().parseFromString(`Compliance &amp; Regulation`, 'text/html').body.textContent,
    href: '#compliance-regulation'
  },
  {
    title: 'About',
    href: '#about-us',
  },
  {
    title: 'Solutions',
    href: '#solutions'
  },
  {
    title: 'FAQ',
    href: '#faq',
  },
  {
    title: 'Blog',
    href: 'https://medium.com/@liquifimarket',
  }
])

</script>

<template>
  <header class="mb-32 flex items-center justify-between md:mb-40">
    <!-- logo -->
    <div>
      <a href="index.html">
        <img
          class="inline-block w-32"
          src="@/assets/svgs/logo.svg"
          alt="Liquifi swooshy white"
        />
      </a>
    </div>
    <!-- ./ logo -->
    <!-- navigation -->
    <nav class="space-x-6">
      <a v-for="(link, index) in links" :key="index" :class="(link.title === 'FAQ' || link.title === 'Blog') ? 'inline-block' : 'hidden md:inline-block'"
        class="text-grey-light hover:text-blue font-extralight no-underline"
        :href="link.href">
        {{ link.title }}
      </a>
    </nav>
    <!-- ./ navigation -->
  </header>
</template>