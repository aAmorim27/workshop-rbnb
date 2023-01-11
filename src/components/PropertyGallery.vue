<template>
  <div class="property-gallery">
    <!-- loop through images and add image url as background-image-->
    <div
      v-for="(image, idx) in images"
      :key="idx"
      :style="`background-image: url(${image})`"
    ></div>
  </div>
</template>

<script setup lang="ts">
  interface PropertyGalleryBlockProps {
    images: string[];
  }
  const props = defineProps<PropertyGalleryBlockProps>();
</script>

<style scoped></style>
