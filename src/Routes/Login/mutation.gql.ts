/** @format */

import { gql } from "@apollo/client";

export const ADMIN_LOGIN = gql`
  mutation adminLogin($loginId: String!, $loginPw: String!) {
    AdminLogin(loginId: $loginId, loginPw: $loginPw) {
      ok
      error
      token
    }
  }
`;
