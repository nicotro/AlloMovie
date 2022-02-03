import React, { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //alert("Search query = " + query);
      props.searchCallback(query);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        value={query}
        placeholder="Search movie..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
