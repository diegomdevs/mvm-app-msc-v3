import * as Yup from "yup";
import type IFormFieldSchema from "@/interfaces/IFormFieldSchema";
import { adultFormFieldSchema, adultFormValidationSchema } from "./adultForm";
import type IParentFormValidationSchema from "@/interfaces/IParentFormValidationSchema";

export const parentFormFieldSchema: IFormFieldSchema[] = [
  ...adultFormFieldSchema,
  {
    name: "isAlive",
    as: "input",
    label: "¿Vive?",
    type: "checkbox",
    modelValue: true,
  },
];
export const parentFormValidationSchema: IParentFormValidationSchema = {
  ...adultFormValidationSchema,
  isAlive: Yup.boolean(),
};
