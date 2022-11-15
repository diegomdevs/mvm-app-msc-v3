<script setup lang="ts">
import {
  Field,
  Form,
  ErrorMessage,
  type SubmissionHandler,
} from "vee-validate";
import type IFormSchema from "@/interfaces/IFormSchema";
import type IValidationSchema from "@/interfaces/IValidationSchema";

defineProps<{
  fieldSchema: IFormSchema;
  validationSchema: IValidationSchema;
  submit?: SubmissionHandler;
}>();
</script>

<template>
  <Form @submit="submit" :validation-schema="validationSchema">
    <div
      v-for="{ as, name, label, children, ...attrs } in fieldSchema.fields"
      :key="name"
    >
      <label :for="name"> {{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" />
    </div>
    <button>Submit</button>
  </Form>
</template>
