<template>
  <div class="grid grid-cols-2 gap-6 py-12">
    <div>
      <div class="flex flex-row mb-4">
        <!-- Home host image -->
        <img class="w-16 h-16 mr-4 rounded-full" />
        <div>
          <p class="text-2xl font-semibold">
            Hosted by
            <!-- Home host name -->
          </p>

          <span class="text-gray-600"
            >Joined in
            <!-- Home host joined date (use shortDate) --></span
          >
          &middot;
          <span class="underline"> <!-- Home host type --> </span>
        </div>
      </div>
      <div class="flex flex-row items-center mb-2">
        <StarIcon class="w-5 h-5 mr-1 text-yellow-400" />
        <!-- Home host review count -->
        <span class="mt-1"> Reviews</span>
      </div>
      <p><!-- Home host description --></p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid';
  import { shortDate } from '@/utils/date';
</script>

<style scoped></style>
