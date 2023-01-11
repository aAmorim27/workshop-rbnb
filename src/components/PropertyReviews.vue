<template>
  <div class="py-12 border-b border-slate-200">
    <div class="flex flex-row items-center">
      <StarIcon class="w-5 h-5 mr-1 text-yellow-400" />
      <span class="text-2xl font-semibold"
        ><!--Home review value -->
        &middot;
        <!--Home review count -->
        reviews</span
      >
    </div>
    <div class="grid grid-cols-2 gap-6 my-6">
      <!--Loop through reviews -->
      <property-review />
    </div>
    <button
      class="px-6 py-4 font-semibold border border-black rounded-lg hover:bg-gray-50"
    >
      Show all
      <!-- Home review count  -->
      reviews
    </button>
  </div>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid';
  import PropertyReview from '@/components/PropertyReview.vue';
</script>

<style scoped></style>
