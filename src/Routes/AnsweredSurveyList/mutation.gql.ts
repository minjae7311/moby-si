import { gql } from "@apollo/client";

export const GET_ANSWERED_SURVEY = gql`
  query getAnsweredSurveyList($take: Int!, $page: Int!) {
    GetAnsweredSurveyList(take: $take, page: $page) {
      ok
      error
      answeredSurvey {
        id
        user {
          id
          bankAccount
          fullName
          phoneNumber
          gender
          pushToken
        }
        ride {
          id
          from {
            address
          }
          to {
            address
          }
          payment {
            price
            status
            imp_uid
          }
          finalFee
          vehicle {
            id
            discount
            company
            carType
            carNumber
          }
        }
        surveyForm {
          id
          contentsJson
          formTitle
        }
        answeredJson
        paybacked
        createdAt
        updatedAt
      }
    }
  }
`;
