/** @format */

import { gql } from "@apollo/client";

export const GET_RIDE_DETAIL = gql`
	query GetRideDetail($id: Int!) {
		GetRideDetail(id: $id) {
			ok
			error
			ride {
				id
				from {
					address
				}
				to {
					address
				}
				finalFee
				passenger {
					id
					phoneNumber
					fullName
					profilePhotoUrl
				}
				driver {
					id
					fullName
					phoneNumber
					profilePhotoUrl
				}
				status
				requestedDate
				acceptedDate
				finishedDate
				cancelledDate
				surveyCompleted
				vehicle {
					id
					carType
					carNumber
					company
					discount
				}
				distanceBetween
				createdAt
				updatedAt
			}
		}
	}
`;
