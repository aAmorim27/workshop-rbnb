<template>
  <router-link to="/">
    <div class="home-card">
      <div class="home-card__picture">
        <!-- Home picture -->
      </div>
      <div class="home-card__informations">
        <div class="home-card__header">
          <span class="home-card__location"><!-- Home title--></span>
          <div class="home-card__rating">
            <span class="home-card__rating__value"
              ><!-- Home review value --></span
            >
            <StarIcon class="home-card__rating__star" />
          </div>
        </div>
        <p class="home-card__sub-info">
          <!-- Home location format - city, country -->
        </p>
        <p class="home-card__sub-info"><!-- Home host--></p>
        <span class="home-card__pricing"
          ><!-- Home price per night -->
          €</span
        >
        <span> / night</span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { StarIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped></style>
