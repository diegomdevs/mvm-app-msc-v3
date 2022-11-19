import * as Yup from "yup";
import type IFormField from "@/interfaces/IFormFieldSchema";
import type IRepresentativeFormValidationSchema from "@/interfaces/IRepresentativeFormValidationSchema";
import { parentFormValidationSchema } from "./parentForm";

export const representativeFormFieldSchema: IFormField[] = [
  {
    as: "input",
    label: "Cédula de identidad",
    name: "ci",
  },
];
export const representativeValidationFormSchema: IRepresentativeFormValidationSchema =
  {
    ci: parentFormValidationSchema.ci,
  };
