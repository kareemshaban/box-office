import { useState } from 'react';

const SerachForm = ({ search }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  function inpValChange(ev) {
    setSearchStr(ev.target.value);
  }
  function onRadioChange(ev) {
    //setApiData(null);
    setSearchOption(ev.target.value);
  }
  const onSubmit = ev => {
    ev.preventDefault();
    search(searchOption, searchStr);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={inpValChange} />
      <label>
        Shows
        <input
          type="radio"
          value="shows"
          name="searchOption"
          onChange={onRadioChange}
          checked={searchOption === 'shows'}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          value="actors"
          name="searchOption"
          onChange={onRadioChange}
          checked={searchOption === 'actors'}
        />
      </label>
      <button type="submit">ٍSearch</button>
    </form>
  );
};

export default SerachForm;
