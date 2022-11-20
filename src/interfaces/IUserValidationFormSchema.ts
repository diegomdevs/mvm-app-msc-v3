import type TYupSchema from "@/types/TYupSchema";
import type IPersonFormValidationSchema from "./IPersonFormValidationSchema";

export default interface IUserValidationFormSchema
  extends IPersonFormValidationSchema {
  email: TYupSchema;
}
