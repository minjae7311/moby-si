/** @format */

import { gql } from "@apollo/client";

export const GET_RIDE = gql`
  query GetRideList($take: Int!, $page: Int!, $order: String){
    GetRideList(take: $take, page: $page, order: $order){
      ok
      error
      rides{
        id
        from{
          address
        }
        to{
          address
        }
        finalFee
        passenger{
          id
        }
        driver{
          id
        }
        status
        requestedDate
        acceptedDate
        finishedDate
        cancelledDate
        surveyCompleted
        vehicle{
          company
        }
        distanceBetween
        createdAt
        updatedAt
      }
    }
  }
`;