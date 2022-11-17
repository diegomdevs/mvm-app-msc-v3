import type TYupSchema from "@/types/TYupSchema";
import type ICustomerFormValidationSchema from "./ICustomerFormValidationSchema";

export default interface IAdultFormValidationSchema
  extends ICustomerFormValidationSchema {
  address: TYupSchema;
  phoneNumber: TYupSchema;
  job: TYupSchema;
}
