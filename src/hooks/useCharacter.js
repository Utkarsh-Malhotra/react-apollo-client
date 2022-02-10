import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/gqlQueries';
export const useCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return {
    loading,
    error,
    data,
  };
};
