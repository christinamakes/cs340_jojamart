import React, { useState } from 'react';
import ProductsList from './ProductsList';

function ProductSearch({ details }) {

  const [searchField, setSearchField] = useState("");

  const filtered = details.filter(
    data => {
      return (
        data
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .price
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .season
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .stockNum
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
        <ProductsList products={filtered}/>
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label for='prodSearch'>Search by Product name, price, season, or number in stock:</label>
        <input 
          id='prodSearch'
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

export default ProductSearch;