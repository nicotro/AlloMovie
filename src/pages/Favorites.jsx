import { useState } from "react";
import MoviesFavList from "../components/MoviesFavList";
import Search from "../components/Search";

const Favorites = () => {
  return (
    <div>
      
      <h1 className="movie-list-title">Favourites</h1>
      <MoviesFavList />
    </div>
  );
};

export default Favorites;
