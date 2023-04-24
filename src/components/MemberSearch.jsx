// CITATION
// DATE: 08/2022
// ADAPTED FROM
// https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/

import React, { useState, useEffect } from 'react';
import MembersList from './MembersList';
import PropTypes from 'prop-types';

function MemberSearch({ onEdit }) {
  MemberSearch.propTypes = {
    onEdit: PropTypes.func
  }
  const [searchField, setSearchField] = useState("");
  const [setFilteredResults] = useState([]);
  const [SQLData, setSQLData] = useState([])

  const URL = 'https://cs340jojaserver-production.up.railway.app'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/members/search/?q=${searchField}`, { method: 'GET' });
      const json = await response.json();
      setSQLData(json)
    }
    fetchData();
  }, [searchField]);

  const onDelete = async (member_id) => {
    const response = await fetch(`${URL}/members/delete/${member_id}`, { method: 'DELETE' });
    if (response.status === 200) {
      const fetchData = async () => {
        const response = await fetch(`${URL}/members/`, { method: 'GET' });
        const json = await response.json();
        setSQLData(json)
      }
      fetchData();
    } else {
      alert(`Failed to delete member`)
    }
  }

  const searchItems = (searchValue) => {
    setSearchField(searchValue)
    if (searchField !== '') {
      const filteredData = SQLData
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(SQLData)
    }
  }

  function searchList() {
    return (
      <MembersList members={SQLData} onDelete={onDelete} onEdit={onEdit} />
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
          type="search"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default MemberSearch;