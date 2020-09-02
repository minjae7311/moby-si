/** @format */

import { gql } from "@apollo/client";

export const GET_INTEREST = gql`
  query GetAllInterest($page: Int!){
    GetAllInterest(page: $page){
      ok
      error
      interests{
        id
        name
        createdAt
        updatedAt
      }
      number
    }
  }
`;