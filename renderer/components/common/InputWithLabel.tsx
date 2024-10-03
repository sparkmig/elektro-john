import React, { InputHTMLAttributes } from "react";

type Props = React.HTMLProps<HTMLInputElement> & {
  label: string;
};

function InputWithLabel({ label, ...rest }: Props) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input {...rest}></input>
    </div>
  );
}

export default InputWithLabel;
