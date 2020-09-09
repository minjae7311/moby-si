import { gql } from "@apollo/client";

export const GET_ENQUIRIES = gql`
  query getEnquiries($take: Int!, $page: Int!) {
    GetEnquiries(take: $take, page: $page) {
      ok
      error
      enquiries {
        id
        user {
          fullName
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
