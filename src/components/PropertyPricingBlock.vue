<template>
  <div class="col-span-1 p-6 border rounded-lg shadow-md border-slate-300">
    <div class="flex flex-row justify-between mb-6">
      <div>
        <!-- Home price per night -->
        <span class="text-2xl font-semibold">{{ price }}€</span>
        <span> night</span>
      </div>
      <div class="flex flex-row items-center font-semibold">
        <StarIcon class="w-4 h-4 mr-1 text-yellow-400" />
        <!-- Home review value -->
        <span>{{ reviewValue }} &middot;</span>&nbsp;
        <!-- Home review count -->
        <span class="text-gray-600 underline">{{ reviewCount }} reviews</span>
      </div>
    </div>

    <button class="w-full px-6 py-4 text-white rounded-lg bg-red-main">
      Reserve
    </button>
  </div>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid';
  interface PropertyPricingBlockProps {
    price: number;
    reviewValue: number;
    reviewCount: number;
  }
  const props = defineProps<PropertyPricingBlockProps>();
</script>

<style scoped></style>
