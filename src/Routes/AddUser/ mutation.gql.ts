import { gql } from "@apollo/client";

export const ADD_USER = gql`
	mutation addUser($bankAccount: String, $fullName: String, $profilePhotoUrl: String, $phoneNumber: String, $gender: String, $pushToken: String, $birthDate: String, $job: String, $deviceId: String) {
		AddUser(
			bankAccount: $bankAccount
			fullName: $fullName
			profilePhotoUrl: $profilePhotoUrl
			phoneNumber: $phoneNumber
			gender: $gender
			pushToken: $pushToken
			birthDate: $birthDate
			job: $job
			deviceId: $deviceId
		) {
			ok
			error
			user {
				id
			}
		}
	}
`;
