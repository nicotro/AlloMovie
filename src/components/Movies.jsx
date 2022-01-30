import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { API_KEY, BASE_API_URL, BASE_IMAGE_URL } from "../APIconfig";

const Movies = () => {
  const [data, setData] = useState([]);

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

  return (
    <div className="movies">
      <ul className="movies-list">
        {data.map((movie) => (
          <Movie movieCard={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
