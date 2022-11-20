<script setup lang="ts">
import DynamicForm from "@/components/DynamicForm.vue";
import {
  userFormFieldSchema,
  userValidationFormSchema,
} from "@/logic/userForm";

function onSubmit(values: any) {
  console.log(JSON.stringify(values, null, 2));
}
</script>
<template>
  <main>
    <DynamicForm
      :field-schema="userFormFieldSchema"
      :validation-schema="userValidationFormSchema"
      :submit="(values) => onSubmit(values)"
    />
  </main>
</template>
