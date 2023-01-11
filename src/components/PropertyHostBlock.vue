<template>
  <div class="grid grid-cols-2 gap-6 py-12">
    <div>
      <div class="flex flex-row mb-4">
        <!-- Home host image -->
        <img class="w-16 h-16 mr-4 rounded-full" :src="image" />
        <div>
          <!-- Home host name -->
          <p class="text-2xl font-semibold">Hosted by {{ name }}</p>
          <!-- Home host joined date (use shortDate) -->
          <span class="text-gray-600"
            >Joined in {{ shortDate(joinedDate) }}</span
          >
          &middot;
          <!-- Home host type -->
          <span class="underline">{{ type }}</span>
        </div>
      </div>
      <div class="flex flex-row items-center mb-2">
        <StarIcon class="w-5 h-5 mr-1 text-yellow-400" />
        <!-- Home host review count -->
        <span class="mt-1">{{ reviewCount }} Reviews</span>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid';
  import { shortDate } from '@/utils/date';
  interface PropertyHostBlockProps {
    image: string;
    name: string;
    joinedDate: string;
    type: string;
    reviewCount: number;
    description: string;
  }
  const props = defineProps<PropertyHostBlockProps>();
</script>

<style scoped></style>
