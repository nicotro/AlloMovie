import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL, BASE_IMAGE_URL } from "../APIconfig";
import RemoveFavourite from "./RemoveFavourite";
import AddFavourite from "./AddFavourite";

const Movies = (props) => {
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(
        BASE_API_URL +
          "movie/popular?api_key=" +
          API_KEY +
          "&language=en-US&page=1&region=FR"
      )
      .then((res) => setData(res.data.results));
  }, []);

  useEffect(() => {
    const fav = localStorage.getItem('react-movie-app-favourites');
    const movieFavourites = JSON.parse(fav);
    setFavourites(movieFavourites);
  }, []);
  
  const saveToLocalStorage = (item) => {
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(item))
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites,movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  if(props.page === 'popular') {
    return (
      <div className="movies">
        <ul className="movies-list">
          {data.map((movie) => (
            <Movie movieCard={movie} handleFavouritesClick={addFavouriteMovie} FavouriteComponent={AddFavourite} />
          ))}
        </ul>
      </div>
    );

  } else {
    return (
      <div className="movies">
        <ul className="movies-list">
          {favourites.map((movie) => (
            <Movie movieCard={movie} handleFavouritesClick={removeFavouriteMovie} FavouriteComponent={RemoveFavourite}/>
          ))}
        </ul>
      </div>
    );

  }
};

export default Movies;
