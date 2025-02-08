import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

export const useCharacters = (page: number, search: string) => {
	const { data, loading, error } = useQuery(GET_CHARACTERS, {
		variables: { page, name: search },
	});

	return { data, loading, error };
};
