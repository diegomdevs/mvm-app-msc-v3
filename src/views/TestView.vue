<script setup lang="ts">
import DynamicForm from "@/components/DynamicForm.vue";
import {
  parentFormFieldSchema,
  parentFormValidationSchema,
} from "@/logic/parentForm";
function onSubmit(values: any) {
  console.log(JSON.stringify(values, null, 2));
}
</script>
<template>
  <main>
    <DynamicForm
      :field-schema="parentFormFieldSchema"
      :validation-schema="parentFormValidationSchema"
      :submit="(values) => onSubmit(values)"
    />
  </main>
</template>
