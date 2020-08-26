/** @format */

import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  border: 1px solid gray;
  width: 30vw;
  height: 40px;
  margin-bottom: 20px;
`;

interface IProps {
  placeholder?: string;
  onChange: any;
}

const LoginInput: React.SFC<IProps> = ({ placeholder = "", onChange }) => (
  <Container onChange={onChange} placeholder={placeholder} />
);

export default LoginInput;
