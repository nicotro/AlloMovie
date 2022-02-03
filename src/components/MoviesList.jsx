import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL } from "../APIconfig";
import RemoveFavourite from "./RemoveFavourite";
import AddFavourite from "./AddFavourite";

const MoviesList = (props) => {
  const [data, setData] = useState([]);
  // props = searchText & resPage
  const [favourites, setFavourites] = useState([]);

  function GetPopularMovies(page) {
    useEffect(() => {
      axios
        .get(
          BASE_API_URL +
            "movie/popular?api_key=" +
            API_KEY +
            "&language=en-US&page=" +
            page +
            "&region=FR"
        )
        .then((res) => setData(res.data.results));
    }, []);
  }

  function GetSearchResults(page, query) {
    useEffect(() => {
      axios
        .get(
          BASE_API_URL +
            "search/movie?api_key=" +
            API_KEY +
            "&language=en-US&page=" +
            page +
            "&query=" +
            query
        )
        .then((res) => setData(res.data.results));
    }, []);
    console.log("search");
  }

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

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
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
      {props.searchText.length === 0 && (
        <h1 className="movie-list-title">
          {GetPopularMovies(props.resPage)}
          Popular movies
        </h1>
      )}
      {props.searchText.length != 0 && (
        <h1 className="movie-list-title">
          {GetSearchResults(props.resPage, props.searchText)}movie search
          results
        </h1>
      )}

      <ul className="movies-list">
        {data.map((movie) => (
          <Movie
            movieCard={movie}
            handleFavouritesClick={toggleFavoriteMovie}
            FavouriteComponent={AddFavourite}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
