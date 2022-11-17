import type TYupSchema from "@/types/TYupSchema";
import type IPersonFormValidationSchema from "./IPersonFormValidationSchema";

export default interface ICustomerFormValidationSchema
  extends IPersonFormValidationSchema {
  ci: TYupSchema;
  degreeOfInstruction: TYupSchema;
}
