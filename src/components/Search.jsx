import React, { Component, useState } from "react";
import { ReactComponent as SearchIcon } from "./../assets/search_black_24dp.svg";
const Search = () => {
  const [Query, setQuery] = useState("");
  const [Results, setResults] = useState([]);
  const [Loading, setLoading] = useState("false");
  const [ErrorMessage, setErrorMessage] = useState("");

  function handleOnInputChange(event) {
    const query = event.nativeEvent.data;
    setQuery(Query + query);
    console.log(Query);
    setLoading("true");
    setErrorMessage("");
  }

  return (
    <div className="search-bar">
      {/*Search Input*/}
      <label className="search-label" htmlFor="search-input">
        <input
          type="search"
          value={Query}
          id="search-input"
          placeholder="Search movie..."
          onChange={handleOnInputChange}
        />
        <SearchIcon />
      </label>
    </div>
  );
};

export default Search;
