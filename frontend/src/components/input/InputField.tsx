import React, { ChangeEventHandler } from "react";
import "./InputField.scss";

interface InputFieldProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, onChange }) => {
  return (
    <div className="inputField">
      <div className="title">{label}</div>
      <input type="text" name={name} onChange={onChange} />
    </div>
  );
};

export default InputField;
