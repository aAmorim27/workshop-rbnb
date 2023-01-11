<template>
  <div>
    <div class="flex items-center">
      <img class="w-16 mr-4 rounded-full" :src="reviewerImage" />
      <div class="flex flex-col">
        <p class="font-semibold">{{ reviewerName }}</p>
        <p class="text-gray-600">{{ shortDate(date) }}</p>
      </div>
    </div>
    <p class="review-card__description">{{ comment }}</p>
  </div>
</template>

<script setup lang="ts">
  import { shortDate } from '@/utils/date';

  interface PropertyReviewProps {
    reviewerImage: string;
    reviewerName: string;
    date: string;
    comment: string;
  }
  const props = defineProps<PropertyReviewProps>();
</script>

<style scoped></style>
