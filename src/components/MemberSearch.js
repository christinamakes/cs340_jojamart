import React, { useState, useEffect } from 'react';
import MembersList from './MembersList';

function MemberSearch({ details, onDelete, onEdit }) {

  const [searchField, setSearchField] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [SQLData, setSQLData] = useState([])

  const URL = 'https://joja-server.herokuapp.com'

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${URL}/members/search/?q=${searchField}`, {method: 'GET'});
        const json = await response.json();
        setSQLData(json)
      } 
    fetchData();
    }, [searchField]);


  const searchItems = (searchValue) => {
    setSearchField(searchValue)
    if (searchField !== '') {
        const filteredData = SQLData
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(details)
    }
}

  function searchList() {
    return (
        <MembersList members={filteredResults} onDelete={onDelete} onEdit={onEdit}/>
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label htmlFor='memSearch'>Search by Member name, address, email, or phone number:</label>
        <input 
          id='memSearch'
          className="search"
          type = "search" 
          placeholder = "Search" 
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default MemberSearch;