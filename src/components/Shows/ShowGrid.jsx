import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePresistedReducer = (reducer, intialState, localStoragekey) => {
  const [state, dispatch] = useReducer(reducer, intialState, intial => {
    const value = localStorage.getItem(localStoragekey);
    return value ? JSON.parse(value) : intial;
  });
  useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(state));
  }, [state, localStoragekey]);

  return [state, dispatch];
};

const ShowGrid = ({ shows }) => {
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
  const [starred, starDispatch] = usePresistedReducer(
    starReducer,
    [],
    'StarredShows'
  );

  console.log(starred);
  /**
   * arguemnts  => showId :int ,
   *  return  => array of shows
   *  objective => fetch data from api and arrang it into an array
   */
  const starMeOnClick = showId => {
    //actions
    const isStarred = starred.includes(showId);
    if (!isStarred) {
      starDispatch({ type: 'STAR', showId: showId });
    } else {
      starDispatch({ type: 'UNSTAR', showId: showId });
    }
  };
  return (
    <div>
      {shows.map(data => {
        return (
          <ShowCard
            key={data.show.id}
            name={data.show.name}
            id={data.show.id}
            img={
              data.show.image
                ? data.show.image.medium
                : 'https://placehold.co/600x400'
            }
            summary={data.show.summary}
            starMeOnClick={starMeOnClick}
          />
        );
      })}
    </div>
  );
};
export default ShowGrid;
