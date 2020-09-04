/** @format */

import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query getUserList($take: Int!, $page: Int!) {
    GetUserList(take: $take, page: $page) {
      ok
      error
      users {
        id
        bankAccount
        fullName
        profilePhotoUrl
        phoneNumber
        verifiedPhoneNumber
        gender
        pushToken
        birthDate
        job
        deviceId
        isRiding
        createdAt
        updatedAt
        # interests
        # credit
        # verification {
        #   id
        #   target
        #   payload
        #   key
        #   verified
        #   expired
        #   createdAt
        #   updatedAt
        # }
      }
    }
  }
`;

// export const GET_RIDE_LIST = gql`
//   mutation getRideList($take: Int!, $page: Int!, $order: String) {
//     GetRideList(take: $take, page: $page) {
//       ok
//       error
//       rides
//     }
//   }
// `;

// export const GET_PAYMENT_LIST = gql`
//   mutation getPaymentList($take: Int!, $page: Int!, $order: String) {
//     GetPaymentList(take: $take, page: $page) {
//       ok
//       error
//       payments
//     }
//   }
// `;

// export const GET_DRIVER_LIST = gql`
//   mutation getDriverList($take: Int!, $page: Int!, $order: String) {
//     GetDriverList(take: $take, page: $page) {
//       ok
//       error
//       drivers
//     }
//   }
// `;
