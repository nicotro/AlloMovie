import React, { Component, useState } from "react";
import { ReactComponent as SearchIcon } from "./../assets/search_black_24dp.svg";
const Search = () => {
  const [Query, setQuery] = useState("");
  const [Results, setResults] = useState([]);
  const [Loading, setLoading] = useState("false");
  const [ErrorMessage, setErrorMessage] = useState("");

  return (
    <div className="search-bar">
      {/*Search Input*/}
      <label className="search-label" htmlFor="search-input">
        <input
          type="text"
          value=""
          id="search-input"
          placeholder="Search movie..."
        />
        <SearchIcon />
      </label>
    </div>
  );
};

export default Search;
