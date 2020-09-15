import { gql } from "@apollo/client";

export const ADD_DRIVER = gql`
	mutation addDriver(
		$lat: Int
		$lng: Int
		$loginId: String
		$loginPw: String
		$privateTaxi: Boolean
		$company: String
		$driveLicenseNumber: String
		$taxiLicenseNumber: String
		$fullName: String
		$profilePhotoUrl: String
		$phoneNumber: String
		$gender: String
		$accepted: Boolean
		$birthDate: String
	) {
		AddDriver(
			lat: $lat
			lng: $lng
			loginId: $loginId
			loginPw: $loginPw
			privateTaxi: $privateTaxi
			company: $company
			driveLicenseNumber: $driveLicenseNumber
			taxiLicenseNumber: $taxiLicenseNumber
			fullName: $fullName
			profilePhotoUrl: $profilePhotoUrl
			phoneNumber: $phoneNumber
			gender: $gender
			accepted: $accepted
			birthDate: $birthDate
		) {
			ok
			error
			driver {
				id
			}
		}
	}
`;
