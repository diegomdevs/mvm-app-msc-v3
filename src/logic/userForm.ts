import * as Yup from "yup";
import type IFormField from "@/interfaces/IFormFieldSchema";
import type IUserValidationFormSchema from "@/interfaces/IUserValidationFormSchema";
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
export const userValidationFormSchema: IUserValidationFormSchema = {
  ...personFormValidationSchema,
  email: Yup.string().email().required(),
};
