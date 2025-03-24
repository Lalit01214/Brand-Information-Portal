import React from 'react';

const BrandList = ({ brands }) => {
  return (
    <div className="brand-list">
      {brands.length === 0 ? (
        <p>No brands found.</p>
      ) : (
        brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <h3>{brand.name}</h3>
            <p>Email: {brand.email}</p>
            <p>Website: <a href={brand.website} target="_blank" rel="noopener noreferrer">{brand.website}</a></p>
            <p>Social Media: {brand.socialMedia}</p>
            <p>Tags: {brand.tags}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BrandList;