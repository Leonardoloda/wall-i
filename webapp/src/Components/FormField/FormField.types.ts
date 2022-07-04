export type Types = "text" | "number";

export interface FormFieldInput {
  identifier: string;
  label: string;
  value: string | number;
  setValue: (value: string | number) => void;
  type: Types;
}
