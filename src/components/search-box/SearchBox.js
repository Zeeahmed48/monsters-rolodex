import React from 'react';

const SearchBox = ({ handleChange, placeholder, searchField }) => {
  return (
    <div>
      <input
      className="search"
        type='search'
        placeholder={placeholder}
        value={searchField}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
