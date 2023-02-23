import React from "react";

import { StyledInput, ErrorSpan } from "./styles";

type InputT = {
  defaultValue?: string;
  placeholder: string;
  error?: string;
  width?: string;
  type?: React.HTMLInputTypeAttribute;
};

const Input = React.forwardRef<HTMLInputElement, InputT>((props, ref) => (
  <>
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      ref={ref}
      defaultValue={props.defaultValue}
      hasError={Boolean(props.error)}
      width={props.width}
    />
    {props.error && <ErrorSpan>{props.error}</ErrorSpan>}
  </>
));

Input.displayName = "Input";

export default Input;
