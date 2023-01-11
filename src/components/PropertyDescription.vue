<template>
  <div class="pt-8 pb-12 border-b border-slate-200">
    <p>{{ description }}</p>
  </div>
  <div class="py-12">
    <h2 class="mb-4 text-2xl font-semibold">What this place offers</h2>
    <div
      v-for="(feature, idx) in features"
      :key="idx"
      class="inline-flex p-2 mb-2 mr-2 border border-gray-300 rounded-lg"
    >
      {{ feature }}
    </div>
  </div>
</template>

<script setup lang="ts">
  interface PropertyDescriptionProps {
    description: string;
    features: string[];
  }
  const props = defineProps<PropertyDescriptionProps>();
</script>

<style scoped></style>
