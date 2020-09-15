import { gql } from "@apollo/client";

export const ADD_INTEREST = gql`
	mutation addInterest($name: String!) {
		AddInterest(name: $name) {
			ok
			error
		}
	}
`;
