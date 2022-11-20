import * as Yup from "yup";
import type IFormField from "@/interfaces/IFormFieldSchema";
import type IStudentFormValidationSchema from "@/interfaces/IStudentFormValidationSchema";
import {
  customerFieldFormSchema,
  customerFormValidationSchema,
} from "@/logic/customerForm";
export const studentFormFieldSchema: IFormField[] = [
  ...customerFieldFormSchema,
  {
    as: "input",
    label: "Fecha de nacimiento",
    name: "birthday",
    type: "date",
  },
  {
    as: "input",
    label: "Lugar de nacimiento",
    name: "birthplace",
  },
  {
    as: "input",
    label: "Municipio",
    name: "municipality",
  },
  {
    as: "input",
    label: "Entidad federal",
    name: "state",
  },
  {
    as: "input",
    label: "Edad",
    name: "age",
  },
  {
    as: "input",
    label: "Vive Con",
    name: "liveWith",
  },
  {
    as: "select",
    label: "Exoneración",
    name: "exoneration",
    children: [
      {
        tag: "option",
        text: "2",
        value: 2,
      },
      {
        tag: "option",
        text: "5",
        value: 5,
      },
      { tag: "option", text: "10", value: 10 },
    ],
  },
];
export const studentFormValidationSchema: IStudentFormValidationSchema = {
  ...customerFormValidationSchema,
  age: Yup.string().max(2),
  birthday: Yup.date(),
  birthplace: Yup.string(),
  exoneration: Yup.number().min(2).max(10),
  liveWith: Yup.string(),
  municipality: Yup.string(),
  state: Yup.string(),
};
