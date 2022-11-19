import type TYupSchema from "@/types/TYupSchema";
import type IThingFormValidationSchema from "./IThingFormValidationSchema";

export default interface IPersonFormValidationSchema
  extends IThingFormValidationSchema {
  middleName?: TYupSchema;
  surname?: TYupSchema;
  lastName?: TYupSchema;
  sex?: TYupSchema;
}
