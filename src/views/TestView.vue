<script setup lang="ts">
import DynamicForm from "@/components/DynamicForm.vue";
import {
  studentValidationFormSchema,
  studentFormFieldSchema,
} from "@/logic/studentForm";

function onSubmit(values: any) {
  console.log(JSON.stringify(values, null, 2));
}
</script>
<template>
  <main>
    <DynamicForm
      :field-schema="studentFormFieldSchema"
      :validation-schema="studentValidationFormSchema"
      :submit="(values) => onSubmit(values)"
    />
  </main>
</template>
