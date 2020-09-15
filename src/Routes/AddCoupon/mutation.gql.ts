import { gql } from "@apollo/client";

export const ADD_COUPON = gql`
	mutation addCoupon($code: String, $expiry: String) {
		AddCoupon(code: $code, expiry: $expiry) {
			ok
			error
		}
	}
`;
