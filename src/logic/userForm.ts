import * as Yup from "yup";
import type IFormField from "@/interfaces/IFormFieldSchema";
import type IUserFormValidationFormSchema from "@/interfaces/IUserFormValidationFormSchema";
import {
  personFormFieldSchema,
  personFormValidationSchema,
} from "./personForm";

export const userFormFieldSchema: IFormField[] = [
  ...personFormFieldSchema,
  {
    as: "input",
    label: "Correo electrónico",
    name: "email",
    type: "email",
  },
];
export const userFormValidationSchema: IUserFormValidationFormSchema = {
  ...personFormValidationSchema,
  email: Yup.string().email().required(),
};
