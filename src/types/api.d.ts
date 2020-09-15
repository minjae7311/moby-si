/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addUser
// ====================================================

export interface addUser_AddUser_user {
  __typename: "User";
  id: number;
}

export interface addUser_AddUser {
  __typename: "AddUserResponse";
  ok: boolean;
  error: string | null;
  user: addUser_AddUser_user | null;
}

export interface addUser {
  AddUser: addUser_AddUser;
}

export interface addUserVariables {
  bankAccount?: string | null;
  fullName?: string | null;
  profilePhotoUrl?: string | null;
  phoneNumber?: string | null;
  gender?: string | null;
  pushToken?: string | null;
  birthDate?: string | null;
  job?: string | null;
  deviceId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: paybackSurvey
// ====================================================

export interface paybackSurvey_PaybackSurvey {
  __typename: "PaybackSurveyResponse";
  ok: boolean;
  error: string | null;
}

export interface paybackSurvey {
  PaybackSurvey: paybackSurvey_PaybackSurvey;
}

export interface paybackSurveyVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAnsweredSurveyList
// ====================================================

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_user {
  __typename: "User";
  id: number;
  bankAccount: string | null;
  fullName: string | null;
  phoneNumber: string;
  gender: string | null;
  pushToken: string | null;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_from {
  __typename: "Place";
  address: string;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_to {
  __typename: "Place";
  address: string;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_payment {
  __typename: "Payment";
  price: number;
  status: string | null;
  imp_uid: string | null;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_vehicle {
  __typename: "Vehicle";
  id: number;
  discount: number | null;
  company: string | null;
  carType: string;
  carNumber: string;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride {
  __typename: "Ride";
  id: number;
  from: getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_from | null;
  to: getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_to | null;
  payment: (getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_payment | null)[] | null;
  finalFee: number | null;
  vehicle: getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride_vehicle | null;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_surveyForm {
  __typename: "SurveyForm";
  id: number;
  contentsJson: any;
  formTitle: string | null;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey {
  __typename: "SurveyAnswered";
  id: number;
  user: getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_user;
  ride: getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_ride;
  surveyForm: getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey_surveyForm;
  answeredJson: any;
  paybacked: boolean | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getAnsweredSurveyList_GetAnsweredSurveyList {
  __typename: "GetAnsweredSurveyListResponse";
  ok: boolean;
  error: string | null;
  answeredSurvey: (getAnsweredSurveyList_GetAnsweredSurveyList_answeredSurvey | null)[] | null;
}

export interface getAnsweredSurveyList {
  GetAnsweredSurveyList: getAnsweredSurveyList_GetAnsweredSurveyList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateVehicle
// ====================================================

export interface updateVehicle_UpdateVehicle {
  __typename: "UpdateVehicleResponse";
  ok: boolean;
  error: string | null;
}

export interface updateVehicle {
  UpdateVehicle: updateVehicle_UpdateVehicle;
}

export interface updateVehicleVariables {
  data?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateDriverData
// ====================================================

export interface updateDriverData_UpdateDriverData {
  __typename: "UpdateDriverDataResponse";
  ok: boolean;
  error: string | null;
}

export interface updateDriverData {
  UpdateDriverData: updateDriverData_UpdateDriverData;
}

export interface updateDriverDataVariables {
  data?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: approveDriver
// ====================================================

export interface approveDriver_ApproveDriver {
  __typename: "ApproveDriverResponse";
  ok: boolean | null;
  error: string | null;
}

export interface approveDriver {
  ApproveDriver: approveDriver_ApproveDriver;
}

export interface approveDriverVariables {
  driverId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteDriver
// ====================================================

export interface deleteDriver_DeleteDriver {
  __typename: "DeleteDriverResponse";
  ok: boolean;
  error: string | null;
}

export interface deleteDriver {
  DeleteDriver: deleteDriver_DeleteDriver;
}

export interface deleteDriverVariables {
  driverId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDriverDetail
// ====================================================

export interface getDriverDetail_GetDriverDetail_driver_vehicle {
  __typename: "Vehicle";
  id: number;
  discount: number | null;
  company: string | null;
  carType: string;
  carNumber: string;
}

export interface getDriverDetail_GetDriverDetail_driver_rides_from {
  __typename: "Place";
  address: string;
}

export interface getDriverDetail_GetDriverDetail_driver_rides_to {
  __typename: "Place";
  address: string;
}

export interface getDriverDetail_GetDriverDetail_driver_rides {
  __typename: "Ride";
  id: number;
  from: getDriverDetail_GetDriverDetail_driver_rides_from | null;
  to: getDriverDetail_GetDriverDetail_driver_rides_to | null;
  finalFee: number | null;
  acceptedDate: string | null;
  finishedDate: string | null;
  status: string;
}

export interface getDriverDetail_GetDriverDetail_driver {
  __typename: "Driver";
  id: number;
  lat: number | null;
  lng: number | null;
  isDriving: boolean;
  workingOn: boolean;
  loginId: string;
  privateTaxi: boolean;
  company: string | null;
  driveLicenseNumber: string;
  taxiLicenseNumber: string;
  fullName: string;
  profilePhotoUrl: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean | null;
  gender: boolean | null;
  accepted: boolean | null;
  birthDate: string | null;
  vehicle: getDriverDetail_GetDriverDetail_driver_vehicle | null;
  rides: (getDriverDetail_GetDriverDetail_driver_rides | null)[] | null;
}

export interface getDriverDetail_GetDriverDetail {
  __typename: "GetDriverDetailResponse";
  ok: boolean;
  error: string | null;
  driver: getDriverDetail_GetDriverDetail_driver | null;
}

export interface getDriverDetail {
  GetDriverDetail: getDriverDetail_GetDriverDetail;
}

export interface getDriverDetailVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDriverList
// ====================================================

export interface getDriverList_GetDriverList_drivers {
  __typename: "Driver";
  id: number;
  isDriving: boolean;
  workingOn: boolean;
  loginId: string;
  privateTaxi: boolean;
  company: string | null;
  driveLicenseNumber: string;
  fullName: string;
  phoneNumber: string | null;
  accepted: boolean | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getDriverList_GetDriverList {
  __typename: "GetDriverListResponse";
  ok: boolean;
  error: string | null;
  drivers: (getDriverList_GetDriverList_drivers | null)[] | null;
}

export interface getDriverList {
  GetDriverList: getDriverList_GetDriverList;
}

export interface getDriverListVariables {
  take: number;
  page: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: anwserEnquiry
// ====================================================

export interface anwserEnquiry_AnswerEnquiry {
  __typename: "AnswerEnquiryResponse";
  ok: boolean;
  error: string | null;
}

export interface anwserEnquiry {
  AnswerEnquiry: anwserEnquiry_AnswerEnquiry;
}

export interface anwserEnquiryVariables {
  id: number;
  answerTitle: string;
  answerContent: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEnquiryDetail
// ====================================================

export interface getEnquiryDetail_GetEnquiryDetail_enquiry_user {
  __typename: "User";
  id: number;
  fullName: string | null;
  pushToken: string | null;
  profilePhotoUrl: string | null;
  phoneNumber: string;
}

export interface getEnquiryDetail_GetEnquiryDetail_enquiry {
  __typename: "Enquiry";
  id: number;
  user: getEnquiryDetail_GetEnquiryDetail_enquiry_user;
  questionTitle: string;
  questionContent: string;
  answerTitle: string | null;
  answerContent: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getEnquiryDetail_GetEnquiryDetail {
  __typename: "GetEnquiryDetailResponse";
  ok: boolean;
  error: string | null;
  enquiry: getEnquiryDetail_GetEnquiryDetail_enquiry | null;
}

export interface getEnquiryDetail {
  GetEnquiryDetail: getEnquiryDetail_GetEnquiryDetail;
}

export interface getEnquiryDetailVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEnquiries
// ====================================================

export interface getEnquiries_GetEnquiries_enquiries_user {
  __typename: "User";
  fullName: string | null;
  gender: string | null;
  phoneNumber: string;
}

export interface getEnquiries_GetEnquiries_enquiries {
  __typename: "Enquiry";
  id: number;
  user: getEnquiries_GetEnquiries_enquiries_user;
  questionTitle: string;
  questionContent: string;
  answerTitle: string | null;
  answerContent: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getEnquiries_GetEnquiries {
  __typename: "GetEnquiriesResponse";
  ok: boolean;
  error: string | null;
  enquiries: (getEnquiries_GetEnquiries_enquiries | null)[] | null;
}

export interface getEnquiries {
  GetEnquiries: getEnquiries_GetEnquiries;
}

export interface getEnquiriesVariables {
  take: number;
  page: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteRide
// ====================================================

export interface deleteRide_DeleteRide {
  __typename: "DeleteRideResponse";
  ok: boolean;
  error: string | null;
}

export interface deleteRide {
  DeleteRide: deleteRide_DeleteRide;
}

export interface deleteRideVariables {
  rideId: number;
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
  profilePhotoUrl: string | null;
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
  fullName: string | null;
}

export interface GetRideList_GetRideList_rides_driver {
  __typename: "Driver";
  id: number;
  fullName: string;
}

export interface GetRideList_GetRideList_rides_vehicle {
  __typename: "Vehicle";
  company: string | null;
  carNumber: string;
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

// ====================================================
// GraphQL mutation operation: deleteUser
// ====================================================

export interface deleteUser_DeleteUser {
  __typename: "DeleteUserResponse";
  ok: boolean;
  error: string | null;
}

export interface deleteUser {
  DeleteUser: deleteUser_DeleteUser;
}

export interface deleteUserVariables {
  userId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateUserData
// ====================================================

export interface updateUserData_UpdateUserData {
  __typename: "UpdateUserDataResponse";
  ok: boolean;
  error: string | null;
}

export interface updateUserData {
  UpdateUserData: updateUserData_UpdateUserData;
}

export interface updateUserDataVariables {
  data?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserDetail
// ====================================================

export interface getUserDetail_GetUserDetail_user_interests {
  __typename: "Interests";
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface getUserDetail_GetUserDetail_user_credit {
  __typename: "Credit";
  id: number;
  nickname: string | null;
  card_name: string | null;
  card_number: string;
  expiry: string;
  isMain: boolean;
  createdAt: string;
  updatedAt: string | null;
  first4numbers: string | null;
}

export interface getUserDetail_GetUserDetail_user_rides_from {
  __typename: "Place";
  name: string | null;
  address: string;
}

export interface getUserDetail_GetUserDetail_user_rides_to {
  __typename: "Place";
  name: string | null;
  address: string;
}

export interface getUserDetail_GetUserDetail_user_rides {
  __typename: "Ride";
  id: number;
  from: getUserDetail_GetUserDetail_user_rides_from | null;
  to: getUserDetail_GetUserDetail_user_rides_to | null;
  finalFee: number | null;
  surveyCompleted: boolean;
  status: string;
  /**
   * findingDistance: Float
   */
  createdAt: string;
  updatedAt: string | null;
}

export interface getUserDetail_GetUserDetail_user {
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
  interests: (getUserDetail_GetUserDetail_user_interests | null)[] | null;
  credit: (getUserDetail_GetUserDetail_user_credit | null)[] | null;
  rides: (getUserDetail_GetUserDetail_user_rides | null)[] | null;
}

export interface getUserDetail_GetUserDetail {
  __typename: "GetUserDetailResponse";
  ok: boolean;
  error: string | null;
  user: getUserDetail_GetUserDetail_user | null;
}

export interface getUserDetail {
  GetUserDetail: getUserDetail_GetUserDetail;
}

export interface getUserDetailVariables {
  id: number;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
