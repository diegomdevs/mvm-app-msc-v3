import type TYupSchema from "@/types/TYupSchema";
import type IPersonFormValidationSchema from "./IPersonFormValidationSchema";

export default interface IUserFormValidationSchema
  extends IPersonFormValidationSchema {
  email: TYupSchema;
}
