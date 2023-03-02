<template>
    <div>
        <div class="text-teal mb-2">{{ preTitle }}</div>
        <div class="text-grey-darkest mb-4 text-3xl font-semibold leading-tight">
            {{ title }}
        </div>
        <div class="text-grey-darker mb-6 leading-normal">
            {{ subtitle }}
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['preTitle', 'title', 'subtitle'])
</script>

<style scoped>

</style>