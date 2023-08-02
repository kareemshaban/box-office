import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  function inpValChange(ev) {
    setSearchStr(ev.target.value);
  }
  async function search(ev) {
    ev.preventDefault();
    var res = (
      await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
    ).json();
    res.then(response => {
      console.log(response);
    });
  }

  return (
    <div>
      <h2>Home page</h2>
      <form onSubmit={search}>
        <input type="text" value={searchStr} onChange={inpValChange} />{' '}
        <button type="submit">ٍSearch</button>
      </form>
    </div>
  );
};
export default Home;
