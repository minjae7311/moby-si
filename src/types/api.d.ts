/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllInterest
// ====================================================

export interface GetAllInterest_GetAllInterests_interests {
  __typename: "Interests";
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetAllInterest_GetAllInterests {
  __typename: "GetAllInterestsResponse";
  ok: boolean;
  error: string | null;
  interests: (GetAllInterest_GetAllInterests_interests | null)[] | null;
}

export interface GetAllInterest {
  GetAllInterests: GetAllInterest_GetAllInterests;
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
