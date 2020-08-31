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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
