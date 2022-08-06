import React, { useState } from 'react';
import ProductsList from './ProductsList';

function ProductSearch({ details, onEdit }) {

  const [searchField, setSearchField] = useState("");

  const filtered = details.filter(
    data => {
      return (
        data
        .product_name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .product_price
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .season_code
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        data
        .number_in_stock
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
        <ProductsList products={filtered} onEdit={onEdit} />
    );
  }

  return (
    <section>
      <div>
      </div>
      <div className="searchbar">
        <label htmlFor='prodSearch'>Search by Product name, price, season, or number in stock:</label>
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