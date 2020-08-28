/**
 * @format
 */

import { gql } from "apollo-boost";

export const GET_INTEREST = gql`
  query GetAllInterest{
    GetAllInterests{
      ok
      error
      interests{
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;