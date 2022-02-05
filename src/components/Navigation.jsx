import { NavLink, Redirect } from "react-router-dom";
import { useState } from "react";
import Search from "../components/Search";

const Navigation = () => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <NavLink exact to="/" className="nav" activeClassName="">
          AlloMovie
        </NavLink>
      </div>

      <div className="topnav-right">
        <NavLink exact to="/" className="nav" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/Favorites" className="nav" activeClassName="active">
          Favourites
        </NavLink>
        <NavLink exact to="/About" className="nav" activeClassName="active">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
