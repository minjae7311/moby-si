/**
 * @format
 */

import { gql } from "apollo-boost";

export const GET_PROFILE = gql`
  query GetUserProfiles{
    GetUserProfile{
      ok
      error
      user{
          id
          fullName
          job
          deviceId
          profilePhotoUrl
          birthDate
          gender
      }
    }
  }
`;