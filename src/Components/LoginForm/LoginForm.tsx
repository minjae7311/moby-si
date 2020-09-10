/** @format */

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { adminLogin_AdminLogin, adminLoginVariables } from "../../types/api";
import { ADMIN_LOGIN } from "../../Routes/Login/mutation.gql";

interface loginFormInterface {
  onComplete: any;
  onError: any;
}

const LoginForm: React.SFC<loginFormInterface> = ({ onComplete, onError }) => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
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
          variables: { loginId, loginPw },
        });
      }}
      
    >
      <input
        type="text"
        name="loginId"
        onChange={(e) => setLoginId(e.target.value)}
        placeholder="ID"
      />
      <input
        type="password"
        name="loginPw"
        onChange={(e) => setLoginPw(e.target.value)}
        placeholder="PW"
      />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default LoginForm;
