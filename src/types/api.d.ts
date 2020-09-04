/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEnquries
// ====================================================

export interface getEnquries_GetEnquries_enquries_user {
  __typename: "User";
  fullName: string | null;
  phoneNumber: string;
  pushToken: string | null;
}

export interface getEnquries_GetEnquries_enquries {
  __typename: "Enquiry";
  id: number;
  user: getEnquries_GetEnquries_enquries_user;
  questionTitle: string;
  questionContent: string;
  answerTitle: string | null;
  answerContent: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getEnquries_GetEnquries {
  __typename: "GetEnquriesResponse";
  ok: boolean;
  error: string | null;
  enquries: (getEnquries_GetEnquries_enquries | null)[] | null;
}

export interface getEnquries {
  GetEnquries: getEnquries_GetEnquries;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserList
// ====================================================

export interface getUserList_GetUserList_users {
  __typename: "User";
  id: number;
  bankAccount: string | null;
  fullName: string | null;
  profilePhotoUrl: string | null;
  phoneNumber: string;
  verifiedPhoneNumber: boolean;
  gender: string | null;
  pushToken: string | null;
  birthDate: string | null;
  job: string | null;
  deviceId: string;
  isRiding: boolean | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getUserList_GetUserList {
  __typename: "GetUserListResponse";
  ok: boolean;
  error: string | null;
  users: (getUserList_GetUserList_users | null)[] | null;
}

export interface getUserList {
  GetUserList: getUserList_GetUserList;
}

export interface getUserListVariables {
  take: number;
  page: number;
}

/* tslint:disable */
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
