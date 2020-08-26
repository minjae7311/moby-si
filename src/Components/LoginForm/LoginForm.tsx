/** @format */

import React from "react";
import styled from "../../typed-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Input = styled.input`
  border: 1px solid gray;
  width: 30vw;
  height: 40px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 30vw;
  height: 40px;
  margin-bottom: 20px;
  background-color: black;
  border: 0;
  color: white;
`;

interface IProps {
  onSubmit: any;
  onChange: any;
  idValue: string;
  pwValue: string;
}

const LoginForm: React.SFC<IProps> = ({
  onSubmit,
  onChange,
  idValue = "",
  pwValue = "",
}) => (
  <Form onSubmit={onSubmit}>
    <Input name="inputId" value={idValue} onChange={onChange} placeholder={"ID"}></Input>
    <Input name="inputPw" value={pwValue} onChange={onChange} placeholder={"PASSWORD"}></Input>
    <Button type="submit"></Button>
  </Form>
);

export default LoginForm;
