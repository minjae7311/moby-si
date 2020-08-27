/**
 * @format
 */

import { gql } from "apollo-boost";

export const LOGIN_MUTATION = gql`
  mutation adminLogin($loginId: String!, $loginPw: String!) {
    AdminLogin(loginId: $loginId, loginPw: $loginPw) {
      ok
      error
    }
  }
`;
