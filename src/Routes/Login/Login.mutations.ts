/**
 * @format
 */

import { gql } from "apollo-boost";

export const LOGIN_MUTATION = gql`
  mutation adminLogin($loginId: String!, $loginPw: String!) {
    AdminLogin(loginId: $loginId, loginPw: $loginPw) {
      ok
      error
      token
    }
  }
`;

// export const LOG_USER_OUT = gql`
//   mutation logUserOut {
//     logUserOut @client
//   }
// `;
