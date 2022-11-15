<script setup lang="ts">
import { reactive } from "vue";
import * as Yup from "yup";
import type { SubmissionHandler } from "vee-validate";
import type IFormSchema from "@/interfaces/IFormSchema";
import type IThingFormValidationSchema from "@/interfaces/IThingFormValidationSchema";
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
    },
  ],
});
const thingFormValidationSchema: IThingFormValidationSchema = {
  name: Yup.string().min(2).required(),
};
</script>
<template>
  <DynamicForm
    :field-schema="thingFormFieldSchema"
    :submit="submit"
    :validation-schema="thingFormValidationSchema"
  />
</template>
