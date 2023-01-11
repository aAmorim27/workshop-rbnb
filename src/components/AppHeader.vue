<template>
  <header class="fixed z-50 w-full py-4 bg-white border-b border-gray-300">
    <div class="container flex items-center mx-auto">
      <router-link class="flex items-end" to="/">
        <span class="mr-2 text-4xl font-bold text-red-main">R</span>

        <h1 class="font-bold text-red-main">Rbnb</h1>
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
