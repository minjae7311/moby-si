/** @format */

import * as React from "react";
import LoginInput from "../../Components/LoginInput/LoginInput";
import styled from "../../typed-components";

const Container = styled.div``;

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginPresenter: React.SFC<IProps> = ({ onChange }) => (
  <Container>
    <LoginInput placeholder={"ID"} onChange={onChange}></LoginInput>
    <LoginInput placeholder={"PW"} onChange={onChange}></LoginInput>
  </Container>
);

export default LoginPresenter;
