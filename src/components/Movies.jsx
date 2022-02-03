import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL } from "../APIconfig";

const Movies = (props) => {
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

  function DiscoverMovies(page) {
    useEffect(() => {
      axios
        .get(
          BASE_API_URL +
            "discover/movie?api_key=" +
            API_KEY +
            "&language=en-US&sort_by=vote_count.desc&page=" +
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

  // return (
  //   <div className="movies">
  //     {props.searchText.length === 0 && (
  //       <h1 className="movie-list-title">
  //         {DiscoverMovies(props.resPage)}
  //         Discover movies
  //       </h1>
  //     )}
  //     {props.searchText.length != 0 && (
  //       <h1 className="movie-list-title">
  //         {GetSearchResults(props.resPage, props.searchText)}movie search
  //         results
  //       </h1>
  //     )}

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

  // const addFavouriteMovie = (movie) => {
  //   const newFavouriteList = [...favourites, movie];
  //   setFavourites(newFavouriteList);
  //   saveToLocalStorage(newFavouriteList);
  // };

  // const removeFavouriteMovie = (movie) => {
  //   const newFavouriteList = favourites.filter(
  //     (favourite) => favourite.id !== movie.id
  //   );
  //   setFavourites(newFavouriteList);
  //   saveToLocalStorage(newFavouriteList);
  // };


  function ToggleFavoriteMovie(movie) {
    let newFavouriteList;
    
    if(favourites.length != 0) {
      const isExist = favourites.filter(element => element.id === movie.id);
      if(isExist.length != 0)
      {
        //console.log("removed");
         newFavouriteList = favourites.filter(
          (favourite) => favourite.id !== movie.id
        );
        //removeFavouriteMovie(movie);
      } else 
      {
        //console.log("added");
         newFavouriteList = [...favourites, movie];
        //addFavouriteMovie(movie);
      }

   } else {
      //console.log("added first");
       newFavouriteList = [...favourites, movie];
      //addFavouriteMovie(movie);

    }

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  function TextFavourite(id) {
    if(favourites.length != 0) {
      const isExist = favourites.filter(element => element.id === id);
      if(isExist.length != 0)
        return 1;
      else  
        return 0;
      
    } else {
      return 0;
    }
  }


  if (props.page === "popular") {
    return (
      // <div className="movies">
      //   {props.searchText.length === 0 && (
      //     <h1 className="movie-list-title">
      //       {GetPopularMovies(props.resPage)}
      //       Popular movies
      //     </h1>
      //   )}
      //   {props.searchText.length != 0 && (
      //     <h1 className="movie-list-title">
      //       {GetSearchResults(props.resPage)}movie search results
      //     </h1>

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
        {FavouriteMovie()}

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
  } else {
    return (
      <div className="movies">
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
  }
};

export default Movies;
