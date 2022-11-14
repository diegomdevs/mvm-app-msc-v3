import type IFieldChildren from "./IFormFieldChildren";

export default interface IFormField {
  label: string;
  name: string;
  as: string;
  rules: any;
  type?: string;
  children?: IFieldChildren[];
}
