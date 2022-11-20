import type TYupSchema from "@/types/TYupSchema";
import type IFormValidationSchema from "./IFormValidationSchema";

export default interface IThingFormValidationSchema
  extends IFormValidationSchema {
  name?: TYupSchema;
}
