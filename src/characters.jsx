import { gql } from "@apollo/client";

export const GET_DATA = gql`
	query {
		charactersByIds(
			ids: [1, 2, 3, 4, 5, 94, 180, 47, 826, 372, 244, 118, 242, 331, 265]
		) {
			id
			name
			image
		}
	}
`;

export default GET_DATA;
