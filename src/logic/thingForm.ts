import * as Yup from "yup";
import type IFormFieldSchema from "@/interfaces/IFormFieldSchema";
import type IThingFormValidationSchema from "@/interfaces/IThingFormValidationSchema";

import { reactive } from "vue";

export const thingFormFieldSchema: IFormFieldSchema[] = [
  {
    name: "name",
    as: "input",
    label: "Name",
  },
];

export const thingFormValidationSchema: IThingFormValidationSchema = {
  name: Yup.string().min(2).required(),
};
