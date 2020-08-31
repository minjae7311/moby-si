/** @format */

import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";

const onComplete = (data) => {
  const { AdminLogin } = data;

  if (AdminLogin.ok) {
    const { token } = AdminLogin;

    /**
     * @todo do something with token
     */
    console.log(token);
  } else {
    console.error("Login error:", AdminLogin.error);
  }
};

const onError = (error) => {
  console.error(error);
};

export const AdminLogin: React.SFC = () => {
  return <LoginForm onComplete={onComplete} onError={onError}></LoginForm>;
};
