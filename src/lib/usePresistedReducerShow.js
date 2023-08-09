import { useEffect, useReducer } from 'react';

const usePresistedReducerShow = (reducer, intialState, localStoragekey) => {
  const [state, dispatch] = useReducer(reducer, intialState, intial => {
    const value = localStorage.getItem(localStoragekey);
    return value ? JSON.parse(value) : intial;
  });
  useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(state));
  }, [state, localStoragekey]);

  return [state, dispatch];
};
const starReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(item => item !== action.showId);
    default:
      return currentStarred;
  }
};

export const usePresistedReducer = () => {
  return usePresistedReducerShow(starReducer, [], 'StarredShows');
};
