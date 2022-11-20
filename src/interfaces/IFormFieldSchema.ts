import type TFieldModelValue from "@/types/TFieldModelValue";
import type IFieldChildren from "./IFormFieldChildrenSchema";

export default interface IFormFieldSchema {
  label: string;
  name: string;
  as: string;
  modelValue?: TFieldModelValue;
  type?: string;
  children?: IFieldChildren[];
}
