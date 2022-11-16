import type TFieldModelValue from "@/types/TFieldModelValue";
import type IFieldChildren from "./IFormFieldChildren";

export default interface IFormField {
  label: string;
  name: string;
  as: string;
  modelValue?: TFieldModelValue;
  type?: string;
  children?: IFieldChildren[];
}
