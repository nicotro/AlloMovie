import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Search from "../components/Search";

const MoviesFavList = (props) => {
  let PageSize = 20;
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [currentPage,setCurrentPage] = useState(1);
  const [totalResult,setTotalResult] = useState(0);

  function FavouriteMovie() {
    useEffect(() => {
      const fav = localStorage.getItem("react-movie-app-favourites");
      if (fav != null) {
        const movieFavourites = JSON.parse(fav);
        setFavourites(movieFavourites);
        setTotalResult(movieFavourites.length);
      }
    }, []);
  }

  const saveToLocalStorage = (item) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(item));
  };

  function ToggleFavoriteMovie(movie) {
    let newFavouriteList;

    if (favourites.length != 0) {
      const isExist = favourites.filter((element) => element.id === movie.id);
      if (isExist.length != 0) {
        newFavouriteList = favourites.filter(
          (favourite) => favourite.id !== movie.id
        );
      } else {
        newFavouriteList = [...favourites, movie];
      }
    } else {
      newFavouriteList = [...favourites, movie];
    }

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  function TextFavourite(id) {
    if (favourites.length != 0) {
      const isExist = favourites.filter((element) => element.id === id);
      if (isExist.length != 0) return 1;
      else return 0;
    } else {
      return 0;
    }
  }

  return (
    <div className="movies">
      <h1 className="movie-list-title">Favourites</h1>
      {FavouriteMovie()}

      <ul className="movies-list">
        {favourites.map((movie) => (
          <Movie
            movieCard={movie}
            handleFavouritesClick={ToggleFavoriteMovie}
            favouriteText={TextFavourite}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesFavList;
