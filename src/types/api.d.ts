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
// GraphQL query operation: GetRideDetail
// ====================================================

export interface GetRideDetail_GetRideDetail_ride_from {
  __typename: "Place";
  address: string;
}

export interface GetRideDetail_GetRideDetail_ride_to {
  __typename: "Place";
  address: string;
}

export interface GetRideDetail_GetRideDetail_ride_passenger {
  __typename: "User";
  id: number;
  phoneNumber: string;
  fullName: string | null;
  profilePhotoUrl: string | null;
}

export interface GetRideDetail_GetRideDetail_ride_driver {
  __typename: "Driver";
  id: number;
  fullName: string;
  phoneNumber: string | null;
}

export interface GetRideDetail_GetRideDetail_ride_vehicle {
  __typename: "Vehicle";
  id: number;
  carType: string;
  carNumber: string;
  company: string | null;
  discount: number | null;
}

export interface GetRideDetail_GetRideDetail_ride {
  __typename: "Ride";
  id: number;
  from: GetRideDetail_GetRideDetail_ride_from | null;
  to: GetRideDetail_GetRideDetail_ride_to | null;
  finalFee: number | null;
  passenger: GetRideDetail_GetRideDetail_ride_passenger;
  driver: GetRideDetail_GetRideDetail_ride_driver | null;
  status: string;
  requestedDate: string | null;
  acceptedDate: string | null;
  finishedDate: string | null;
  cancelledDate: string | null;
  surveyCompleted: boolean;
  vehicle: GetRideDetail_GetRideDetail_ride_vehicle | null;
  distanceBetween: number | null;
  /**
   * findingDistance: Float
   */
  createdAt: string;
  updatedAt: string | null;
}

export interface GetRideDetail_GetRideDetail {
  __typename: "GetRideDetailResponse";
  ok: boolean;
  error: string | null;
  ride: GetRideDetail_GetRideDetail_ride | null;
}

export interface GetRideDetail {
  GetRideDetail: GetRideDetail_GetRideDetail;
}

export interface GetRideDetailVariables {
  id: number;
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
