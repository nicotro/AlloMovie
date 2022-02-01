import { NavLink } from "react-router-dom";
import Search from "../components/Search";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" className="nav" activeClassName="active-nav">
        Home
      </NavLink>
      <NavLink
        exact
        to="/Favorites"
        className="nav"
        activeClassName="active-nav"
      >
        Favorites
      </NavLink>
      <NavLink exact to="/About" className="nav" activeClassName="active-nav">
        About
      </NavLink>
      <Search className="search" />
    </div>
  );
};

export default Navigation;
