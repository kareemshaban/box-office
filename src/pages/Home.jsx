import { useReducer, useState } from 'react';
import { getActors, getShows } from '../api/shows';
import SerachForm from '../components/SearchForm';
import ShowGrid from '../components/Shows/ShowGrid';
import ActorGrid from '../components/Actors/ActorGrid';
import { useQuery } from 'react-query';

const Home = () => {
  const [fillter, setFillter] = useState(null);
  const { data: apiData, error: showsError } = useQuery({
    queryKey: ['search', fillter],
    queryFn: () => {
      return fillter.searchOption === 'shows'
        ? getShows(fillter.q)
        : getActors(fillter.q);
    },
    enabled: !!fillter,
  });

  async function search(searchOption, searchStr) {
    if (searchOption === 'shows') {
      setFillter({
        searchOption: searchOption,
        q: `search/shows?q=${searchStr}`,
      });
    } else {
      setFillter({
        searchOption: searchOption,
        q: `search/people?q=${searchStr}`,
      });
    }
  }
  function renderMovies() {
    if (showsError) {
      return <div>Error Eccured : ${showsError.message}</div>;
    }
    if (apiData) {
      if (apiData.length > 0) {
        return apiData[0].show ? (
          <ShowGrid shows={apiData} />
        ) : (
          <ActorGrid actors={apiData} />
        );
      }
      return <div>No Result Found</div>;
    }
    return null;
  }

  return (
    <div>
      <SerachForm search={search} />
      {renderMovies()}
    </div>
  );
};
export default Home;
