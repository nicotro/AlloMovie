import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as MenuIcon } from "./../assets/menu_black_24dp.svg";

export default function Navigation() {
  // Toggle the responsive menu display
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    // cleaning up !
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 480) setToggleMenu(false);
  }, [screenWidth]);

  const ToggleDisplayMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="topnav">
      <div className="topnav-left">
        <Link exact to="/" className="nav" activeClassName="">
          AlloMovie
        </Link>
      </div>
      <div className="topnav-right">
        <a className="icon" onClick={ToggleDisplayMenu}>
          <MenuIcon />
        </a>
        {(toggleMenu || screenWidth > 480) && (
          <div>
            <NavLink exact to="/" className="nav" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              exact
              to="/Favorites"
              className="nav"
              activeClassName="active"
            >
              Favourites
            </NavLink>
            <NavLink exact to="/About" className="nav" activeClassName="active">
              About
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
