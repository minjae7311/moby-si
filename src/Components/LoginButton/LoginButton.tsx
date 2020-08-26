/** @format */

import React from "react";
import styled from "../../typed-components";

const Container = styled.button`
  width: 30vw;
  height: 40px;
  margin-bottom: 20px;
  border: 0;
  background-color: black;
`;

interface IProps {
  onClick: any;
}

const LoginInput: React.SFC<IProps> = ({ onClick }) => (
  <Container onClick={onClick} />
);

export default LoginInput;
