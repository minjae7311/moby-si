/** @format */

import * as React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { MutationFunction } from "react-apollo";
import { adminLoginVariables, adminLogin } from "../../types/api";

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onSubmit: MutationFunction<adminLogin, adminLoginVariables>;
  onClick: MutationFunction<adminLogin, adminLoginVariables>;
  idValue: string;
  pwValue: string;
}

const LoginPresenter: React.SFC<IProps> = ({
  onChange,
  // onSubmit,
  onClick,
  idValue,
  pwValue,
}) => (
  <LoginForm
    onChange={onChange}
    // onSubmit={onSubmit}
    onClick={onClick}
    idValue={idValue}
    pwValue={pwValue}
  ></LoginForm>
);

export default LoginPresenter;
