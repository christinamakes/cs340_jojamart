// CITATION
// DATE: 08/2022
// ADAPTED FROM
// https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/

import React, { useState, useEffect } from 'react';
import EmployeesList from './EmployeesList';
import PropTypes from 'prop-types';

function EmployeeSearch({ onDelete, onEdit }) {
  EmployeeSearch.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
  }

  const [searchField, setSearchField] = useState("");
  const [setFilteredResults] = useState([]);
  const [SQLData, setSQLData] = useState([])

  const URL = 'https://joja-server.herokuapp.com'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/employees/search/?q=${searchField}`, { method: 'GET' });
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
    else {
      setFilteredResults(SQLData)
    }
  }

  function searchList() {
    return (
      <EmployeesList employees={SQLData} onDelete={onDelete} onEdit={onEdit} />
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label htmlFor='empSearch'>Search by Employee name, email, or phone number:</label>
        <input
          id='empSearch'
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

export default EmployeeSearch;