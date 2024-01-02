import { gql } from "@apollo/client";

export const GET_DATA = gql`
	query {
		charactersByIds(ids: [1, 2, 3, 4, 196, 180, 47, 826, 242, 331]) {
			name
			image
		}
	}
`;

export default GET_DATA;
