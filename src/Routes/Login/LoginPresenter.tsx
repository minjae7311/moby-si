/** @format */

import * as React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { MutationFunction } from "react-apollo";
import { TestMutation_TestMutation, TestMutation } from "../../types/api";

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFunction<TestMutation_TestMutation, TestMutation>;
  idValue: string;
  pwValue: string;
}

const LoginPresenter: React.SFC<IProps> = ({
  onChange,
  onSubmit,
  idValue,
  pwValue,
}) => (
  <LoginForm
    onChange={onChange}
    onSubmit={onSubmit}
    idValue={idValue}
    pwValue={pwValue}
  ></LoginForm>
);

export default LoginPresenter;
