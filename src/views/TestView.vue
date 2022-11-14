<script setup lang="ts">
import DynamicForm from "@/components/DynamicForm.vue";
import * as Yup from "yup";
import type IFormSchema from "@/interfaces/IFormSchema";
const formSchema: IFormSchema = {
  fields: [
    {
      label: "Name",
      name: "name",
      as: "input",
      rules: Yup.string().required(),
    },
  ],
};
function submit(values: any) {
  console.log(JSON.stringify(values, null, 2));
}
</script>
<template>
  <main>
    <DynamicForm :submit="submit" :schema="formSchema" />
  </main>
</template>
