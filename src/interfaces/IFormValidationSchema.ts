import type TYupSchema from "@/types/TYupSchema";

export default interface IFormValidationSchema {
  [key: string]: TYupSchema | undefined;
}
