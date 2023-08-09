import { useQuery } from 'react-query';
import { usePresistedReducer } from './usePresistedReducerShow';
import { getShowsByIds } from '../api/shows';
import { json } from 'react-router-dom';

export const useGetStarredShows = () => {
  const [starred] = usePresistedReducer();
  const result = useQuery({
    queryKey: 'starred',
    queryFn: async () => {
      return getShowsByIds(starred);
    },
  });

  return result.data;
};
