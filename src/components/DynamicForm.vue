<script setup lang="ts">
import {
  Field,
  Form,
  ErrorMessage,
  type SubmissionHandler,
} from "vee-validate";
import type IFormFieldSchema from "@/interfaces/IFormFieldSchema";
import type IValidationSchema from "@/interfaces/IValidationSchema";

defineProps<{
  fieldSchema: IFormFieldSchema[];
  validationSchema: IValidationSchema;
  submit?: SubmissionHandler;
}>();
</script>

<template>
  <Form @submit="submit" :validation-schema="validationSchema">
    <slot />
    <div
      v-for="{ as, name, label, children, ...attrs } in fieldSchema"
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
