import React, { useState } from 'react';
import MembersList from './MembersList';

function MemberSearch({ details }) {

  const [searchField, setSearchField] = useState("");

  const filtered = details.filter(
    data => {
      return (
        data
        .member_name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .member_email
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .member_phone
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .member_address
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
        <MembersList members={filtered}/>
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label for='memSearch'>Search by Member name, address, email, or phone number:</label>
        <input 
          id='memSearch'
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

export default MemberSearch;