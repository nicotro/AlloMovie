import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import RemoveFavourite from "./RemoveFavourite";

const MoviesFavList = (props) => {
  const [data, setData] = useState([]);
  // props = searchText & resPage
  const [favourites, setFavourites] = useState([]);

  function FavouriteMovie() {
    useEffect(() => {
      const fav = localStorage.getItem("react-movie-app-favourites");
      if (fav != null) {
        const movieFavourites = JSON.parse(fav);
        setFavourites(movieFavourites);
      }
    }, []);
  }

  const saveToLocalStorage = (item) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(item));
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const toggleFavoriteMovie = (movie) => {
    console.log(favourites);
    const oldFavouriteListLength = favourites.length;
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id === movie.id
    );
    if (newFavouriteList.length < oldFavouriteListLength) {
      console.log("removed");
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
      return false;
    } else {
      //newFavouriteList = [...favourites, movie];
      console.log("added");
      setFavourites([...favourites, movie]);
      saveToLocalStorage(newFavouriteList);
      return true;
    }
  };

  return (
    <div className="movies">
      {FavouriteMovie()}

      <ul className="movies-list">
        {favourites.map((movie) => (
          <Movie
            movieCard={movie}
            handleFavouritesClick={removeFavouriteMovie}
            FavouriteComponent={RemoveFavourite}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesFavList;
