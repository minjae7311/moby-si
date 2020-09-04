/** @format */

import { gql } from "@apollo/client";

export const GET_ENQUIRY_LIST = gql`
  query getEnquries {
    GetEnquries {
      ok
      error
      enquries {
        id
        user {
          fullName
          phoneNumber
          pushToken
        }
        questionTitle
        questionContent
        answerTitle
        answerContent
        createdAt
        updatedAt
      }
    }
  }
`;
