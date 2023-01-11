<template>
  <div class="flex flex-row justify-between pb-6 border-b border-slate-200">
    <div>
      <h2 class="text-2xl font-semibold">Hosted by {{ hostName }}</h2>
      <div class="app-property-details-footer">
        {{ pluralize(guests, 'guest') }}
        &middot;
        {{ pluralize(bedrooms, 'room') }}
        &middot;
        {{ pluralize(beds, 'bed') }}
        &middot;
        {{ pluralize(bathrooms, 'bath') }}
      </div>
      <div>
        {{ location.address }} {{ location.city }} {{ location.state }}
        {{ location.country }}
      </div>
    </div>
    <!-- Home host image -->
    <img class="w-16 h-16 rounded-full" :src="hostImage" />
  </div>
</template>

<script setup lang="ts">
  import { HomeLocation } from '@/types/home-api.interfaces';

  interface PropertyDetailsProps {
    hostName: string;
    hostImage: string;
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    location: HomeLocation;
  }

  const props = defineProps<PropertyDetailsProps>();

  const pluralize = (value: number, word: string) => {
    const text = `${value} ${word}`;
    return value === 1 ? text : text + 's';
  };
</script>

<style scoped></style>
