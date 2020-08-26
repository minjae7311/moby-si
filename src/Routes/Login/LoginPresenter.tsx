/** @format */

import * as React from "react";
import LoginInput from "../../Components/LoginInput/LoginInput";
import LoginButton from "../../Components/LoginButton/LoginButton";
import styled from "../../typed-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

const LoginPresenter: React.SFC<IProps> = ({ onChange, onClick }) => (
  <Container>
    <LoginInput placeholder={"ID"} onChange={onChange}></LoginInput>
    <LoginInput placeholder={"PW"} onChange={onChange}></LoginInput>
    <LoginButton onClick={onClick}></LoginButton>
  </Container>
);

export default LoginPresenter;
