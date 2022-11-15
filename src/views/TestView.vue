<script setup lang="ts">
import ThingForm from "@/components/ThingForm.vue";
import { ref } from "vue";
const thingFormData = ref({});
function lol(value: any) {
  thingFormData.value = value;
}
</script>
<template>
  <main>
    <ThingForm
      @emit-form-data="
        (formData) => {
          lol(formData);
        }
      "
    />
  </main>
  {{ thingFormData }}
</template>
