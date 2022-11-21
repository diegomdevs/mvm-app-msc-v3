<script setup lang="ts">
import NavigationOption from "./NavigationOption.vue";
import type INavigationOptionProps from "@/interfaces/INavigationOptionProps";
import type IAppLogosProps from "@/interfaces/IAppLogosProps";
import AppLogos from "./AppLogos.vue";
import mvmLogo from "@/assets/mvm-logo.png";
defineProps<{
  menuOptionSchema: INavigationOptionProps[];
}>();
const logoSchema: IAppLogosProps = {
  name: "Logo de María Virgen Misionera",
  src: mvmLogo,
};
</script>
<template>
  <aside class="home-menu">
    <section class="home-menu--top-section">
      <section class="home-menu--mvm-logo-container">
        <AppLogos :name="logoSchema.name" :src="logoSchema.src" />
      </section>
      <section
        v-for="{ name, url } in menuOptionSchema"
        :key="name"
        class="home-menu--option-container"
      >
        <NavigationOption :name="name" :url="url" />
      </section>
    </section>
  </aside>
</template>
<style scoped>
aside.home-menu {
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100vh;
  padding: 12px;
  background-color: var(--primary-blue);
}
aside.home-menu > section.home-menu--top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: fit-content;
  height: fit-content;
}
aside.home-menu
  > section.home-menu--top-section
  > section.home-menu--mvm-logo-container {
  width: 150px;
  height: 200px;
}
aside.home-menu
  > section.home-menu--top-section
  > section.home-menu--option-container {
  width: 200px;
  height: 40px;
}
</style>
