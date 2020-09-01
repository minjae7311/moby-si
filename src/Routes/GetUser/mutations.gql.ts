/** @format */

import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetAllUsers{
    GetAllUsers{
      ok
      error
      users{
        id
        bankAccount
        birthDate
        deviceId
        fullName
        gender
        isRiding
        job
        phoneNumber
        verifiedPhoneNumber
        pushToken
        createdAt
        updatedAt
      }
    }
  }
`;