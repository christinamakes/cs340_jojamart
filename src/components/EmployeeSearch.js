import React, { useState } from 'react';
import EmployeesList from './EmployeesList';

function EmployeeSearch({ details, onDelete, onEdit }) {

  const [searchField, setSearchField] = useState("");

  const filtered = details.filter(
    data => {
      return (
        data
        .employee_name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .employee_email
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .employee_phone_number
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
        <EmployeesList employees={filtered} onDelete={onDelete} onEdit={onEdit}/>
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