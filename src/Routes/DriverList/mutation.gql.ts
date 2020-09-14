import { gql } from "@apollo/client";

export const GET_DRIVER_LIST = gql`
	query getDriverList($take: Int!, $page: Int!) {
		GetDriverList(take: $take, page: $page) {
			ok
			error
			drivers {
				id
				# lat
				# lng
				isDriving
				workingOn
				loginId
				privateTaxi
				company
				driveLicenseNumber
				fullName
				phoneNumber
				accepted
				createdAt
				updatedAt
			}
		}
	}
`;
