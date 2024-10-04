import React from 'react';
import search_icon from "../images/seach-icon.png"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for jobs by title or keyword" className='input-box' />
      <select className='select-menu'>
        <option>Select Category</option>
        <option>Engineering</option>
        <option>Management</option>
        <option>Design</option>
      </select>
      <button className="search-btn"><img className='search-img' src={search_icon} alt="search-icon"/></button>
    </div>
  );
};

export default SearchBar;
