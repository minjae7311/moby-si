/** @format */

import * as React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
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
