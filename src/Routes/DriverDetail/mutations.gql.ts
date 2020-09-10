import { gql } from "@apollo/client";

export const GET_DRIVER_DETAIL = gql`
  query getDriverDetail($id: Int!) {
    GetDriverDetail(id: $id) {
      ok
      error
      driver {
        id
        lat
        lng
        isDriving
        workingOn
        rides {
          from {
            address
          }
          to {
            address
          }
          finalFee
          acceptedDate
          finishedDate
        }
        vehicle {
          id
          discount
          company
          carType
          carNumber
        }
        loginId
        loginPw
        privateTaxi
        company
        driveLicenseNumber
        taxiLicenseNumber
        fullName
        profilePhotoUrl
        phoneNumber
        verifiedPhoneNumber
        gender
        accepted
        birthDate
      }
    }
  }
`;
