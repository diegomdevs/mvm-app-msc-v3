import * as Yup from "yup";
import type IFormField from "@/interfaces/IFormFieldSchema";
import {
  personFormFieldSchema,
  personFormValidationSchema,
} from "./personForm";
import type ICustomerFormValidationSchema from "@/interfaces/ICustomerFormValidationSchema";

export const customerFieldFormSchema: IFormField[] = [
  ...personFormFieldSchema,
  {
    name: "ci",
    as: "input",
    label: "Cédula de identidad",
  },
  {
    name: "degreeOfInstruction",
    as: "input",
    label: "Grado de instrucción",
  },
];
export const customerFormValidationSchema: ICustomerFormValidationSchema = {
  ...personFormValidationSchema,
  ci: Yup.string().min(7),
  degreeOfInstruction: Yup.string(),
};
