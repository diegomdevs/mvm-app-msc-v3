<script setup lang="ts">
import {
  Field,
  Form,
  ErrorMessage,
  type SubmissionHandler,
} from "vee-validate";
import type IFormSchema from "@/interfaces/IFormSchema";
interface IDynamicProps {
  schema: IFormSchema;
  submit?: SubmissionHandler;
}
defineProps<IDynamicProps>();
</script>

<template>
  <Form @submit="submit">
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
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
