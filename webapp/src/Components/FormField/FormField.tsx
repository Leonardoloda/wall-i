import React from "react";
import { FormFieldInput } from "./FormField.types";

import "./FormField.css";

const FormField: React.FC<FormFieldInput> = (props: FormFieldInput) => {
  return (
    <div className="field">
      <label htmlFor={props.identifier} className="field__label">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.identifier}
        id={props.identifier}
        required
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="field__input"
      />
    </div>
  );
};

export { FormField };
