<script setup lang="ts">
import * as Yup from "yup";
import type IFormSchema from "@/interfaces/IFormSchema";
import DynamicForm from "./DynamicForm.vue";
const personFormSchema: IFormSchema = {
  fields: [
    {
      name: "middleName",
      as: "input",
      label: "Segundo Nombre",
    },
  ],
};
</script>
<template>
  <DynamicForm />
</template>
