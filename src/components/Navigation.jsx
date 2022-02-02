import { NavLink } from "react-router-dom";

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
        Favourites
      </NavLink>
    </div>
  );
};

export default Navigation;
