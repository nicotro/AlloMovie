import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL } from "../APIconfig";

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
            handleFavouritesClick={ToggleFavoriteMovie}
            favouriteText={TextFavourite}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
