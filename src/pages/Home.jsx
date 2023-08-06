import { useState } from 'react';
import { getActors, getShows } from '../api/shows';
import SerachForm from '../components/SearchForm';
import ShowGrid from '../components/Shows/ShowGrid';
import ActorGrid from '../components/Actors/ActorGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [showsError, setShowError] = useState(null);

  async function search(searchOption, searchStr) {
    try {
      setShowError(null);
      if (searchOption === 'shows') {
        const body = await getShows(`shows?q=${searchStr}`);
        setApiData(body);
      } else {
        const body = await getActors(`people?q=${searchStr}`);
        setApiData(body);
      }
    } catch (error) {
      setShowError(error.message);
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
