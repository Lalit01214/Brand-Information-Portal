import React, { useState } from 'react';
import Header from './Components/Header.js';
import BrandForm from './Components/BrandForm';
import SearchBar from './Components/SearchBar';
import BrandList from './Components/BrandList';
import './styles/App.css';

const App = () => {
  const [brands, setBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);

  const addBrand = (brand) => {
    setBrands([...brands, brand]);
    setFilteredBrands([...brands, brand]);
  };

  const searchBrands = (query) => {
    const filtered = brands.filter(
      (brand) =>
        brand.name.toLowerCase().includes(query.toLowerCase()) ||
        brand.tags.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <BrandForm addBrand={addBrand} />
        <SearchBar searchBrands={searchBrands} />
        <BrandList brands={filteredBrands} />
      </div>
    </div>
  );
}

export default App;