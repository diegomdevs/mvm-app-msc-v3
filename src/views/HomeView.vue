<script setup lang="ts">
import HomeMenu from "@/components/HomeMenu.vue";
import type INavigationOptionProps from "@/interfaces/INavigationOptionProps";
const menuOptionSchema: INavigationOptionProps[] = [
  { name: "Registrar", url: "/test" },
];
</script>
<template>
  <HomeMenu :menu-option-schema="menuOptionSchema" />
</template>
