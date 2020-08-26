/** @format */

import * as React from "react";
import LoginInput from "../../Components/LoginInput/LoginInput";
import styled from "../../typed-components";

const Container = styled.div``;

const Login: React.FC = () => {
  return (
    <Container>
      <LoginInput placeholder={"ID"}></LoginInput>
      <LoginInput placeholder={"PW"}></LoginInput>
    </Container>
  );
};

export default Login;
