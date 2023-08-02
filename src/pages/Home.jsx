import { useState } from 'react';
import get_api from '../api/shows';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [movies, setMovies] = useState(null);
  const [showsError, setShowError] = useState(null);

  //console.log(movies);
  function inpValChange(ev) {
    setSearchStr(ev.target.value);
  }
  async function search(ev) {
    ev.preventDefault();

    try {
      setShowError(null);
      const body = await get_api(`${searchStr}`);

      setMovies(body);
    } catch (error) {
      setShowError(error.message);
    }
  }
  function renderMovies() {
    if (showsError) {
      return <div>Error Eccured : ${showsError.message}</div>;
    }
    if (movies) {
      return movies.map(movie => {
        return <div key={movie.show.id}>{movie.show.name}</div>;
      });
    }
    return null;
  }

  return (
    <div>
      <h2>Home page</h2>
      <form onSubmit={search}>
        <input type="text" value={searchStr} onChange={inpValChange} />{' '}
        <button type="submit">ٍSearch</button>
      </form>
      {renderMovies()}
    </div>
  );
};
export default Home;
