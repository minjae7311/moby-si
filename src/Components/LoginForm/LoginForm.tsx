/** @format */

import React from "react";
import { useMutation } from "@apollo/client";
import { adminLogin_AdminLogin, adminLoginVariables } from "../../types/api";
import { ADMIN_LOGIN } from "../../Routes/Login/mutation.gql";

let loginId, loginPw;

interface loginFormInterface {
  onComplete: any;
  onError: any;
}

const LoginForm: React.SFC<loginFormInterface> = ({ onComplete, onError }) => {
  const [adminLogin] = useMutation<adminLogin_AdminLogin, adminLoginVariables>(
    ADMIN_LOGIN,
    {
      variables: { loginId, loginPw },
      onCompleted: onComplete,
      onError: onError,
    }
  );

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        await adminLogin({
          variables: { loginId: loginId.value, loginPw: loginPw.value },
        });
      }}
    >
      <input
        ref={(node) => (loginId = node)}
        type="text"
        name="loginId"
        placeholder="ID"
      />
      <input
        ref={(node) => (loginPw = node)}
        type="password"
        name="loginPw"
        placeholder="PW"
      />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default LoginForm;
