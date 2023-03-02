<script setup lang="ts">
const props = defineProps(['title', 'description'])
</script>

<template>
  <section class="relative z-10 mt-40 pt-8">
    <div class="mx-auto max-w-[1040px]">
      <h2
        v-if="title"
        class="px-8 text-4xl text-gray-900 sm:px-4 lg:px-4 lg:text-4xl"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-8 px-8 text-lg text-gray-700 sm:w-3/4 sm:px-4"
        v-html="description"
      ></p>

      <slot />
    </div>
  </section>
</template>
