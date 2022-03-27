import React from "react";
import "./searchBar.css";
import searchIcon from "../../img/search_icon.svg";

const SearchBar = ({ searchValue, onSubmitHandler, setSearchValue }) => {
  return (
    <div className="search">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="Начните вводить..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <img src={searchIcon} alt="icon" onClick={(e) => onSubmitHandler(e)} />
    </div>
  );
};

export default SearchBar;
