import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "../components/Search";

const Navigation = () => {
  const [query, setQuery] = useState("");
  const handleSearchCallback = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div class="topnav">
      <NavLink exact to="/" className="nav" activeClassName="active">
        Home
      </NavLink>

      <NavLink exact to="/Favorites" className="nav" activeClassName="active">
        Favorites
      </NavLink>

      <div class="topnav-right">
        <Search searchCallback={handleSearchCallback} />
      </div>
    </div>
  );
};

export default Navigation;
