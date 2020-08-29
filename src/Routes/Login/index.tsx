/** @format */

import React from "react";
import { useMutation } from "@apollo/client";
import { adminLoginVariables, adminLogin_AdminLogin } from "../../types/api";
import { ADMIN_LOGIN } from "./mutation.gql";

let loginId, loginPw;

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

export const AdminLogin = () => {
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
      onSubmit={async (e) => {
        e.preventDefault();
        await adminLogin({
          variables: { loginId: loginId.value, loginPw: loginPw.value },
        });
      }}
    >
      <input
        ref={(node) => {
          loginId = node;
        }}
        name="loginId"
        placeholder="ID"
      ></input>
      <input
        ref={(node) => {
          loginPw = node;
        }}
        name="loginPw"
        placeholder="Pw"
      ></input>
      <button>LOGIN</button>
    </form>
  );
};
