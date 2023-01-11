<template>
  <app-header />
  <div class="container pt-20 mx-auto">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <div>
            <component :is="Component" />
          </div>
          <template #fallback> Loading... </template>
        </Suspense>
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue';
</script>

<style></style>
