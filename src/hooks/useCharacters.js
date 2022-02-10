import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../queries/gqlQueries';
export const useCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER,{fetchPolicy: "no-cache"}, {
    variables: {
      id,
    },
  });
  console.log('Hitting the api................');
  return {
    data,
    error,
    loading,
  };
};
