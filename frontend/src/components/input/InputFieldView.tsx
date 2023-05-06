import React, { ChangeEventHandler } from "react";
import "./InputField.scss";

interface InputFieldProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  min?: string;
  max?: string;
  value?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  onChange,
  type = "text",
  ...props
}) => {
  return (
    <div className="inputField">
      <div className="title">{label}</div>
      <input type={type} name={name} onChange={onChange} {...props} />
    </div>
  );
};

export default InputField;
