import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL } from "../APIconfig";
import Search from "../components/Search";
import Pagination from "./Pagination";

const MoviesList = (props) => {
  let PageSize = 20;
  let favourites = [];
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favState, setFavState] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  function DisplayMovies() {
    useEffect(() => {
      if (searchValue.length === 0) getMoviePopular(currentPage);
      else getMovieRequest(searchValue, currentPage);
    }, [searchValue, currentPage]);
  }

  const getMovieRequest = async (query, page) => {
    const url =
      BASE_API_URL +
      "search/movie?api_key=" +
      API_KEY +
      "&language=en-US&page=" +
      page +
      "&query=" +
      query;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setData(responseJson.results);
      setTotalResult(responseJson.total_results);
    }
  };

  const getMoviePopular = async (page) => {
    const url =
      BASE_API_URL +
      "movie/popular?api_key=" +
      API_KEY +
      "&language=en-US&page=" +
      page +
      "&region=FR";
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setData(responseJson.results);
      setTotalResult(responseJson.total_results);
    }
  };

  function FavouriteMovie() {
    const fav = localStorage.getItem("react-movie-app-favourites");
    if (fav != null) {
      const movieFavourites = JSON.parse(fav);
      favourites = movieFavourites;
    }
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
        setFavState(favState + 1);
      } else {
        newFavouriteList = [...favourites, movie];
        setFavState(favState + 1);
      }
    } else {
      newFavouriteList = [...favourites, movie];
      setFavState(favState + 1);
    }

    favourites = newFavouriteList;
    saveToLocalStorage(newFavouriteList);
  }

  function TextFavourite(id) {
    if (favourites.length != 0) {
      const isExist = favourites.filter((element) => element.id === id);
      if (isExist.length != 0) return 1;
      else return 0;
    } else return 0;
  }

  return (
    <div className="movies">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {DisplayMovies()}
      {FavouriteMovie()}
      {searchValue.length ? (
        <h1 className="movie-list-title">Search Movie Results</h1>
      ) : (
        <h1 className="movie-list-title">Popular Movies</h1>
      )}
      <h4 className="movie-list-title">Total Movies: {totalResult}</h4>
      <ul className="movies-list">
        {data.map((movie) => (
          <Movie
            movieCard={movie}
            handleFavouritesClick={ToggleFavoriteMovie}
            favouriteText={TextFavourite}
          />
        ))}
      </ul>
      {
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalResult}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      }
    </div>
  );
};

export default MoviesList;
