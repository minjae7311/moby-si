import { gql } from "@apollo/client";

export const ANSWER_ENQUIRY = gql`
  mutation anwserEnquiry(
    $id: Int!
    $answerTitle: String!
    $answerContent: String!
  ) {
    AnswerEnquiry(
      id: $id
      answerTitle: $answerTitle
      answerContent: $answerContent
    ) {
      ok
      error
    }
  }
`;

export const GET_ENQUIRY_DETAIL = gql`
  query getEnquiryDetail($id: Int!) {
    GetEnquiryDetail(id: $id) {
      ok
      error
      enquiry {
        id
        user {
          id
          fullName
          pushToken
          profilePhotoUrl
          phoneNumber
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
