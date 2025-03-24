import React, { useState } from 'react';

const SearchBar = ({ searchBrands }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    searchBrands(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by brand name or tag"
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;