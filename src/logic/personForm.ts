import * as Yup from "yup";
import type IFormFieldSchema from "@/interfaces/IFormFieldSchema";
import type IPersonFormValidationSchema from "@/interfaces/IPersonFormValidationSchema";
import { thingFormFieldSchema, thingFormValidationSchema } from "./thingForm";
export const personFormFieldSchema: IFormFieldSchema[] = [
  ...thingFormFieldSchema,
  {
    name: "middleName",
    as: "input",
    label: "Segundo nombre",
  },
  {
    name: "surname",
    as: "input",
    label: "Primer apellido",
  },
  {
    name: "lastName",
    as: "input",
    label: "Segundo apellido",
  },
  {
    name: "sex",
    as: "input",
    label: "Sexo",
  },
];
export const personFormValidationSchema: IPersonFormValidationSchema = {
  ...thingFormValidationSchema,
  middleName: Yup.string().required(),
  surname: Yup.string().required(),
  lastName: Yup.string().required(),
  sex: Yup.string().required(),
};
