import { NavLink } from "react-router-dom";
import Search from "../components/Search";

const Navigation = () => {
  return (
    <div class="topnav">
      <NavLink exact to="/" className="nav" activeClassName="active">
        Home
      </NavLink>

      <NavLink exact to="/Favorites" className="nav" activeClassName="active">
        Favourites
      </NavLink>

      <div class="topnav-right">
        <Search />
      </div>
    </div>
  );
};

export default Navigation;
