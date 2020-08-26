/** @format */

import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  border: 1px solid gray;
  width: 30vw;
  height: 40px;
`;

interface IProps {
  placeholder?: string;
  //   type?: string;
  //   required?: boolean;
  //   value: string;
  //   name?: string;
  onChange: any;
}

const LoginInput: React.SFC<IProps> = ({
  placeholder = "",
  //   type = "text",
  //   required = true,
  //   value,
  //   name = "",
  onChange,
}) => (
  <Container
    onChange={onChange}
    // name={name}
    // type={type}
    // required={required}
    // value={value}
    placeholder={placeholder}
  />
);

export default LoginInput;
