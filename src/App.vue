<template>
  <app-header />
  <div class="container pt-20 mx-auto">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue';
</script>

<style></style>
