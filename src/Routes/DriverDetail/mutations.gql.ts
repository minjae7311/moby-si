import { gql } from "@apollo/client";

export const UPDATE_VEHICLE = gql`
	mutation updateVehicle($data: JSON) {
		UpdateVehicle(data: $data) {
			ok
			error
		}
	}
`;

export const UPDATE_DRIVER_DATA = gql`
	mutation updateDriverData($data: JSON) {
		UpdateDriverData(data: $data) {
			ok
			error
		}
	}
`;

export const APPROVE_DRIVER = gql`
	mutation approveDriver($driverId: Int!) {
		ApproveDriver(driverId: $driverId) {
			ok
			error
		}
	}
`;

export const DELTE_DRIVER = gql`
	mutation deleteDriver($driverId: Int!) {
		DeleteDriver(driverId: $driverId) {
			ok
			error
		}
	}
`;

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
				loginId
				# loginPw
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

				vehicle {
					id
					discount
					company
					carType
					carNumber
				}

				rides {
					id
					from {
						address
					}
					to {
						address
					}
					finalFee
					acceptedDate
					finishedDate
					status
				}
			}
		}
	}
`;
