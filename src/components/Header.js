import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={e => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;