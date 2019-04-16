import React from 'react';
import App from '../App';

const Search = ({ setFilter, formHandler }) => {
  return (
    <form>
      <input
        type="text"
        onChange={event => setFilter('name', event.target.value)}
      />
      <input type="button" onClick={formHandler} value="Search" />
    </form>
  );
};

export default Search;
