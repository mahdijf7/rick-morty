import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
	query GetCharacters($page: Int, $name: String) {
		characters(page: $page, filter: { name: $name }) {
			results {
				id
				name
				image
				status
				species
			}
		}
	}
`;

export const useCharacters = (page: number, search: string) => {
	const { data, loading, error } = useQuery(GET_CHARACTERS, {
		variables: { page, name: search },
	});

	return { data, loading, error };
};
