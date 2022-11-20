<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
}>();
</script>
<template>
  <section class="navigation-option-container">
    <RouterLink class="navigation-option" :to="url">
      <p>
        {{ name }}
      </p>
    </RouterLink>
  </section>
</template>
<style scoped>
section.navigation-option-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  width: 200px;
  min-height: 40px;
  text-align: center;
  background-color: var(--primary-blue);
}
section.navigation-option-container > .navigation-option:only-child {
  color: var(--font-color-white);
}
</style>
