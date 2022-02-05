import React, { useEffect, useState } from "react";
import { API_KEY, BASE_API_URL } from "../APIconfig";

const ApiGetMovies = (props) => {
  const [data, setData] = useState([]);

  const GetPopularMovies = async (page) => {
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
    }
  };

  const GetSearchResults = async (query, page) => {
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
    }
  };

  function MoviesFromApi() {
    useEffect(() => {
      if (props.searchText.length === 0) {
        GetPopularMovies(props.resPage);
      } else {
        GetSearchResults(props.resPage, props.searchText);
      }
    }, []);
    props.moviesData(data);
  }

  return <>{MoviesFromApi()}</>;
};

export default ApiGetMovies;
