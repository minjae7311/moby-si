/**
 * /* tslint:disable
 *
 * @format
 */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: adminLogin
// ====================================================

export interface adminLogin_AdminLogin {
  __typename: "AdminLoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface adminLogin {
  AdminLogin: adminLogin_AdminLogin;
}

export interface adminLoginVariables {
  loginId: string;
  loginPw: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
