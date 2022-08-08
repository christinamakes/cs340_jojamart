import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';
import PropTypes from 'prop-types';

function ProductSearch({ onEdit }) {
  ProductSearch.propTypes = {
    onEdit: PropTypes.func,
  }

  const [searchField, setSearchField] = useState("");
  const [setFilteredResults] = useState([]);
  const [SQLData, setSQLData] = useState([])

  const URL = 'https://joja-server.herokuapp.com'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/products/search/?q=${searchField}`, { method: 'GET' });
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
      <ProductsList products={SQLData} onEdit={onEdit} />
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
          type="search"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default ProductSearch;