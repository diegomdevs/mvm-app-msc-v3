<script setup lang="ts">
defineProps<{ name: string; src: string }>();
</script>
<template>
  <picture class="logo-container">
    <img class="logo" :src="src" :alt="name" />
  </picture>
</template>
<style scoped>
picture.logo-container {
  width: inherit;
  height: inherit;
}
picture.logo-container > img.logo {
  width: 100%;
  height: 100%;
}
</style>
