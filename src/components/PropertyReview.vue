<template>
  <div>
    <div class="flex items-center">
      <!-- Reviewer image -->
      <img class="w-16 mr-4 rounded-full" />
      <div class="flex flex-col">
        <p class="font-semibold"><!-- Reviewer name --></p>
        <p class="text-gray-600"><!-- Review date --></p>
      </div>
    </div>
    <p class="review-card__description"><!-- Review comment --></p>
  </div>
</template>

<script setup lang="ts">
  import { shortDate } from '@/utils/date';
</script>

<style scoped></style>
