import { gql } from "@apollo/client";

export const DELETE_USER = gql`
	mutation deleteUser($userId: Int!) {
		DeleteUser(userId: $userId) {
			ok
			error
		}
	}
`;

export const UPDATE_USER_DATA = gql`
	mutation updateUserData($data: JSON) {
		UpdateUserData(data: $data) {
			ok
			error
		}
	}
`;

export const GET_USER_DETAIL = gql`
	query getUserDetail($id: Int!) {
		GetUserDetail(id: $id) {
			ok
			error
			user {
				bankAccount
				fullName
				profilePhotoUrl
				phoneNumber
				verifiedPhoneNumber
				gender
				pushToken
				birthDate
				job
				deviceId
				isRiding
				createdAt
				updatedAt
				interests {
					id
					name
					createdAt
					updatedAt
				}
				credit {
					id
					nickname
					card_name
					card_number
					expiry
					isMain
					createdAt
					updatedAt
					first4numbers
				}
				# verification {
				#   id
				#   target
				#   payload
				#   key
				#   verified
				#   expired
				#   createdAt
				#   updatedAt
				# }
				rides {
					id
					from {
						name
						address
					}
					to {
						name
						address
					}
					finalFee
					surveyCompleted
					status
					createdAt
					updatedAt
				}
			}
		}
	}
`;
