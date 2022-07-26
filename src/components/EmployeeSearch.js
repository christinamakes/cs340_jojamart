import React, { useState } from 'react';
import EmployeesList from './EmployeesList';

function EmployeeSearch({ details }) {

  const [searchField, setSearchField] = useState("");

  const filtered = details.filter(
    data => {
      return (
        data
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .phone
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
        <EmployeesList employees={filtered}/>
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label for='empSearch'>Search by Employee name, email, or phone number:</label>
        <input 
          id='empSearch'
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

export default EmployeeSearch;