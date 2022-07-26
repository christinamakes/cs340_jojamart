import React, { useState } from 'react';
import AchievementsList from './AchievementsList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filtered = details.filter(
    data => {
      return (
        data
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .criteria
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <AchievementsList achievements={filtered}/>
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label for='achSearch'>Search by achievement title or criteria:</label>
        <input 
          id='achSearch'
          className="search"
          type = "search" 
          placeholder = "Search" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;