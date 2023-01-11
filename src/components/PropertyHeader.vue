<template>
  <h1 class="text-3xl font-semibold"><!-- Home title --></h1>
  <div class="flex flex-row mt-1 mb-6">
    <StarIcon class="w-5 h-5 text-yellow-400" />
    <span class="ml-1 mr-2 font-semibold"><!-- Home review value --></span>
    &middot;
    <span class="mx-2 font-medium underline"
      ><!-- Home review count -->
      reviews</span
    >
    &middot;
    <span class="mx-2 font-medium underline">
      <!-- Home location - format: city, state, country -->
    </span>
  </div>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped></style>
