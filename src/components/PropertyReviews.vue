<template>
  <div class="py-12 border-b border-slate-200">
    <div class="flex flex-row items-center">
      <StarIcon class="w-5 h-5 mr-1 text-yellow-400" />
      <span class="text-2xl font-semibold"
        >{{ reviewValue }}
        &middot;
        {{ reviewCount }}
        reviews</span
      >
    </div>
    <div class="grid grid-cols-2 gap-6 my-6">
      <property-review
        v-for="review in reviews"
        :key="review.id"
        :comment="review.comment"
        :date="review.date"
        :reviewer-name="review.reviewer.name"
        :reviewer-image="review.reviewer.image"
      />
    </div>
    <button
      class="px-6 py-4 font-semibold border border-black rounded-lg hover:bg-gray-50"
    >
      Show all
      {{ reviewCount }}
      reviews
    </button>
  </div>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid';
  import PropertyReview from '@/components/PropertyReview.vue';
  import { Review } from '@/types/reviews-api.interfaces';
  interface PropertyReviewProps {
    reviewValue: number;
    reviewCount: number;
    reviews?: Review[];
  }
  const props = defineProps<PropertyReviewProps>();
</script>

<style scoped></style>
