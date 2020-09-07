/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRideList
// ====================================================

export interface GetRideList_GetRideList_rides_from {
  __typename: "Place";
  address: string;
}

export interface GetRideList_GetRideList_rides_to {
  __typename: "Place";
  address: string;
}

export interface GetRideList_GetRideList_rides_passenger {
  __typename: "User";
  id: number;
}

export interface GetRideList_GetRideList_rides_driver {
  __typename: "Driver";
  id: number;
}

export interface GetRideList_GetRideList_rides_vehicle {
  __typename: "Vehicle";
  company: string | null;
}

export interface GetRideList_GetRideList_rides {
  __typename: "Ride";
  id: number;
  from: GetRideList_GetRideList_rides_from | null;
  to: GetRideList_GetRideList_rides_to | null;
  finalFee: number | null;
  passenger: GetRideList_GetRideList_rides_passenger;
  driver: GetRideList_GetRideList_rides_driver | null;
  status: string;
  requestedDate: string | null;
  acceptedDate: string | null;
  finishedDate: string | null;
  cancelledDate: string | null;
  surveyCompleted: boolean;
  vehicle: GetRideList_GetRideList_rides_vehicle | null;
  distanceBetween: number | null;
  /**
   * findingDistance: Float
   */
  createdAt: string;
  updatedAt: string | null;
}

export interface GetRideList_GetRideList {
  __typename: "GetRideListResponse";
  ok: boolean;
  error: string | null;
  rides: (GetRideList_GetRideList_rides | null)[] | null;
}

export interface GetRideList {
  GetRideList: GetRideList_GetRideList;
}

export interface GetRideListVariables {
  take: number;
  page: number;
  order?: string | null;
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
