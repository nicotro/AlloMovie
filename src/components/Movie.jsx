import { API_KEY, BASE_API_URL, BASE_IMAGE_URL } from "../APIconfig";
import React, { Component, useState } from "react";
import MovieDetails from "./MovieDetails";

function Movie(props) {
  const [detailPopup, setDetailPopup] = useState(false);

  return (
    <div className="movie">
      <img
        src={BASE_IMAGE_URL + "w185" + props.movieCard.poster_path}
        alt={props.title}
      />
      <div className="basic-info">
        <li>
          <h1>{props.movieCard.title}</h1>
        </li>
        <li>
          <h2>
            <h2-title>Release: </h2-title>
            {props.movieCard.release_date}
          </h2>
        </li>
        <li>
          <h2>
            <h2-title>Rating: </h2-title>
            {props.movieCard.vote_average} ({props.movieCard.vote_count})
          </h2>
        </li>
        <br />
        <li className="li-link" onClick={() => setDetailPopup(true)}>
          details
        </li>
        <li className="li-link">Favorite add/remove</li>
      </div>

      <MovieDetails trigger={detailPopup} setTrigger={setDetailPopup}>
        <h3>{props.movieCard.title}</h3>
        <h4>
          {props.movieCard.release_date} - Rating {props.movieCard.vote_average}{" "}
          ({props.movieCard.vote_count})
        </h4>
        <p>{props.movieCard.overview}</p>
      </MovieDetails>
    </div>
  );
}

export default Movie;
