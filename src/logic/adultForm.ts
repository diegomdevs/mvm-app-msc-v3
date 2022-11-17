import * as Yup from "yup";
import type IAdultFormValidationSchema from "@/interfaces/IAdultFormValidationSchema";
import type IFormFieldSchema from "@/interfaces/IFormFieldSchema";
import {
  customerFieldFormSchema,
  customerValidationFormSchema,
} from "./customerForm";
export const adultFormFieldSchema: IFormFieldSchema[] = [
  ...customerFieldFormSchema,
  { name: "address", as: "input", label: "Dirrección" },
  { name: "phoneNumber", as: "input", label: "Número telefónico" },
  { name: "job", as: "input", label: "Oficio" },
];
export const adultFormValidationSchema: IAdultFormValidationSchema = {
  ...customerValidationFormSchema,
  address: Yup.string(),
  phoneNumber: Yup.string().min(11).max(11),
  job: Yup.string(),
};
