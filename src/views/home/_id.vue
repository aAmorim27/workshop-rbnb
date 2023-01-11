<template>
  <div class="mt-6" v-if="home">
    <property-header />
    <property-gallery />
    <div
      class="grid items-start grid-cols-3 gap-6 pt-12 border-b border-slate-200"
    >
      <div class="col-span-2">
        <property-details />
        <property-description />
      </div>
      <property-pricing-block />
    </div>
    <property-reviews />
    <property-host-block />
  </div>
</template>

<script setup lang="ts">
  import PropertyHeader from '@/components/PropertyHeader.vue';
  import PropertyGallery from '@/components/PropertyGallery.vue';
  import PropertyDetails from '@/components/PropertyDetails.vue';
  import PropertyDescription from '@/components/PropertyDescription.vue';
  import PropertyPricingBlock from '@/components/PropertyPricingBlock.vue';
  import PropertyReviews from '@/components/PropertyReviews.vue';
  import PropertyHostBlock from '@/components/PropertyHostBlock.vue';
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';

  const { params } = useRoute();

  const home = ref();

  const reviews = ref();
</script>

<style scoped></style>
