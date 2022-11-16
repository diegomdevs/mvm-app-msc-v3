import type TYupSchema from "@/types/TYupSchema";
import type IValidationSchema from "./IValidationSchema";

export default interface IPersonFormValidationSchema extends IValidationSchema {
  middleName: TYupSchema;
  surname: TYupSchema;
  lastName: TYupSchema;
  sex: TYupSchema;
}
