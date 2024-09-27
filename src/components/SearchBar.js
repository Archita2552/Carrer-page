import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for jobs by title or keyword" />
      <select>
        <option>Select Category</option>
        <option>Engineering</option>
        <option>Management</option>
        <option>Design</option>
      </select>
      <button className="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
};

export default SearchBar;
