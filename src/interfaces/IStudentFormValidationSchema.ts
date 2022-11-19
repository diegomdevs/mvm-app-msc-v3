import type TYupSchema from "@/types/TYupSchema";
import type ICustomerFormValidationSchema from "./ICustomerFormValidationSchema";

export default interface IStudentFormValidationSchema
  extends ICustomerFormValidationSchema {
  birthday: TYupSchema;
  birthplace: TYupSchema;
  municipality: TYupSchema;
  state: TYupSchema;
  age: TYupSchema;
  liveWith: TYupSchema;
  exoneration: TYupSchema;
}
