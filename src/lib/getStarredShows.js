import { useQuery } from 'react-query';
import { usePresistedReducer } from './usePresistedReducerShow';
import { getShowsByIds } from '../api/shows';

export const useGetStarredShows = () => {
  const [starred] = usePresistedReducer();
  const result = useQuery({
    queryKey: 'starred',
    queryFn: async () => {
      return getShowsByIds(starred);
    },
  });

  console.log(result.data);

  return result.data;
};
