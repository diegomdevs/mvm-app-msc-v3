<script setup lang="ts">
import { reactive } from "vue";
import * as Yup from "yup";
import type { SubmissionHandler } from "vee-validate";
import type IFormSchema from "@/interfaces/IFormSchema";
import DynamicForm from "./DynamicForm.vue";
const emits = defineEmits<{
  (event: "emitFormData", formData: object): void;
}>();

const submit: SubmissionHandler = (values) => {
  console.log(values);
  emits("emitFormData", values);
};
// Thing form fields schema
const thingFormFieldSchema: IFormSchema = reactive({
  fields: [
    {
      name: "name",
      as: "input",
      label: "Name",
      rules: Yup.string().required(),
    },
  ],
});
</script>
<template>
  <DynamicForm :schema="thingFormFieldSchema" :submit="submit" />
</template>
