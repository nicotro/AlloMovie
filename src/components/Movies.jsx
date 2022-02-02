import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL } from "../APIconfig";

const Movies = (props) => {
  const [data, setData] = useState([]);
  // props = searchText & resPage

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

  return (
    <div className="movies">
      {props.searchText.length === 0 && (
        <h1 className="movie-list-title">
          {DiscoverMovies(props.resPage)}
          Discover movies
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
          <Movie movieCard={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
