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

// ====================================================
// GraphQL mutation operation: aminResolverTest
// ====================================================

export interface aminResolverTest_AdminResolverTest {
  __typename: "AdminResolverTestResponse";
  ok: boolean;
  error: string | null;
}

export interface aminResolverTest {
  AdminResolverTest: aminResolverTest_AdminResolverTest;
  // GraphQL query operation: GetAllInterest
  // ====================================================
}

export interface GetAllInterest_GetAllInterest_interests {
  __typename: "Interests";
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetAllInterest_GetAllInterest {
  __typename: "GetAllInterestResponse";
  ok: boolean;
  error: string | null;
  interests: (GetAllInterest_GetAllInterest_interests | null)[] | null;
  number: number | null;
}

export interface GetAllInterest {
  GetAllInterest: GetAllInterest_GetAllInterest;
}

export interface GetAllInterestVariables {
  page: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllUsers
// ====================================================

export interface GetAllUsers_GetAllUsers_users {
  __typename: "User";
  id: number;
  bankAccount: string | null;
  birthDate: string | null;
  deviceId: string;
  fullName: string | null;
  gender: string | null;
  isRiding: boolean | null;
  job: string | null;
  phoneNumber: string;
  verifiedPhoneNumber: boolean;
  pushToken: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetAllUsers_GetAllUsers {
  __typename: "GetAllUsersResponse";
  ok: boolean;
  error: string | null;
  users: (GetAllUsers_GetAllUsers_users | null)[] | null;
}

export interface GetAllUsers {
  GetAllUsers: GetAllUsers_GetAllUsers;
}

export interface GetAllUsersVariables {
  page: number;
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
