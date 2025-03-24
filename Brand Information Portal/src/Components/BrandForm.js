import React, { useState } from 'react';

const BrandForm = ({ addBrand }) => {
  const [brand, setBrand] = useState({ name: '', email: '', website: '', socialMedia: '', tags: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBrand({ ...brand, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand.name || !brand.email || !brand.website) {
      setError('Please fill in all the fields.');
    } else {
      addBrand(brand);
      setError('');
      setBrand({ name: '', email: '', website: '', socialMedia: '', tags: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Brand Information</h2>
      {error && <p className="error">{error}</p>}
      <input type="text" name="name" value={brand.name} onChange={handleInputChange} placeholder="Brand Name" required />
      <input type="email" name="email" value={brand.email} onChange={handleInputChange} placeholder="Official Email" required />
      <input type="url" name="website" value={brand.website} onChange={handleInputChange} placeholder="Website URL" required />
      <input type="text" name="socialMedia" value={brand.socialMedia} onChange={handleInputChange} placeholder="Social Media Links (comma separated)" />
      <input type="text" name="tags" value={brand.tags} onChange={handleInputChange} placeholder="Tags (comma separated)" />
      <button type="submit">Add Brand</button>
    </form>
  );
}

export default BrandForm;