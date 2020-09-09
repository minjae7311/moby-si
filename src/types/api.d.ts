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

export interface getAnsweredSurveyListVariables {
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

export interface getUserDetail_GetUserDetail_user_verification {
  __typename: "Verification";
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  expired: boolean;
  createdAt: string;
  updatedAt: string | null;
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
  verification: getUserDetail_GetUserDetail_user_verification | null;
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
