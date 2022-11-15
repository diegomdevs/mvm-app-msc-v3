import type TYupSchema from "@/types/TYupSchema";
import type IValidationSchema from "./IValidationSchema";

export default interface IThingFormValidationSchema extends IValidationSchema {
  name: TYupSchema;
}
