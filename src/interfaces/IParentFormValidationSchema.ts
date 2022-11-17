import type TYupSchema from "@/types/TYupSchema";
import type IAdultFormValidationSchema from "./IAdultFormValidationSchema";

export default interface IParentFormValidationSchema
  extends IAdultFormValidationSchema {
  isAlive: TYupSchema;
}
