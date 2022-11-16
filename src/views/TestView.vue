<script setup lang="ts">
import DynamicForm from "@/components/DynamicForm.vue";
import {
  personFormFieldSchema,
  personFormValidationSchema,
} from "@/logic/personForm";
function submit(values: any) {
  console.log(JSON.stringify(values, null, 2));
}
</script>
<template>
  <main>
    <DynamicForm
      :field-schema="personFormFieldSchema"
      :validation-schema="personFormValidationSchema"
      :submit="(values) => submit(values)"
    />
  </main>
</template>
