<template>
  <div class="relative mt-1 mb-2 rounded-md shadow-sm">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <MagnifyingGlassIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
    </div>
    <input
      type="text"
      placeholder="Search by location"
      class="block w-full pl-10 border-gray-300 rounded-md focus:ring-red-main focus:border-red-main sm:text-sm"
    />
  </div>
</template>

<script setup lang="ts">
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped></style>
