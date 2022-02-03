import { NavLink, Redirect } from "react-router-dom";
import { useState } from "react";
import Search from "../components/Search";

const Navigation = () => {
  // const [query, setQuery] = useState("");
  // const handleSearchCallback = (searchQuery) => {
  //   setQuery(searchQuery);
  //   // console.log("search query = " + searchQuery);
  //   // console.log("& query = " + query);
  // };

  //console.log("query before return = " + query);

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

// const Navigation = () => {
//   // const [query, setQuery] = useState("");
//   // const handleSearchCallback = (searchQuery) => {
//   //   setQuery(searchQuery);
//   //   // console.log("search query = " + searchQuery);
//   //   // console.log("& query = " + query);
//   // };

//   //console.log("query before return = " + query);

//   return (
//     <div className="topnav">
//       <NavLink exact to="/" className="nav" activeClassName="active">
//         Home
//       </NavLink>
//       <NavLink exact to="/Favorites" className="nav" activeClassName="active">
//         Favourites
//       </NavLink>

//       <div className="topnav-right">
//         {/* <Search searchCallback={handleSearchCallback} /> */}
//         <Search />
//       </div>
//     </div>
//   );
// };
