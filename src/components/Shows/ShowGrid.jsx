import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';
import { usePresistedReducer } from '../../lib/usePresistedReducerShow';

const ShowGrid = ({ shows }) => {
  const [starred, starDispatch] = usePresistedReducer();

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
            isStarred={starred.includes(data.show.id)}
          />
        );
      })}
    </div>
  );
};
export default ShowGrid;
