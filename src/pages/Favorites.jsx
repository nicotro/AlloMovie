import { useState } from "react";
import MoviesFavList from "../components/MoviesFavList";
import Search from "../components/Search";

const Favorites = () => {
  const [search, setsearch] = useState("");
  const [page, setPage] = useState("1");
  return (
    <div>
      <h1 className="movie-list-title">Favourites</h1>
      <MoviesFavList />
    </div>
  );
};

export default Favorites;
