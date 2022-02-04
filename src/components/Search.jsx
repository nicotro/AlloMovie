import React, { useState } from "react";

const Search = (props) => {

  return (
    <div className="search-bar">
      <input
        type="search"
        value={props.searchValue}
        placeholder="Search movie..."
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Search;
