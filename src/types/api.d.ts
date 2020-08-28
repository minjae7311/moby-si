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
// GraphQL query operation: GetUserProfiles
// ====================================================

export interface GetUserProfiles_GetUserProfile_user {
  __typename: "User";
  id: number;
  fullName: string | null;
  job: string | null;
  deviceId: string;
  profilePhotoUrl: string | null;
  birthDate: string | null;
  gender: string | null;
}

export interface GetUserProfiles_GetUserProfile {
  __typename: "GetUserProfileResponse";
  ok: boolean;
  error: string | null;
  user: GetUserProfiles_GetUserProfile_user | null;
}

export interface GetUserProfiles {
  GetUserProfile: GetUserProfiles_GetUserProfile;
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
