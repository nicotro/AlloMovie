import React from "react";
import AddRemoveCoeur from "./AddRemoveCoeur";
import MoviePoster from "./MoviePoster";
import { BASE_IMAGE_URL } from "../APIconfig";

function MovieDetails(props) {
  return (
    <div className="MovieDetails">
      <div className="popup">
        <MoviePoster
          urlBase={BASE_IMAGE_URL}
          size="w342"
          image={props.movie.poster_path}
          name={props.title}
          width="342"
        />
        <h3>{props.movie.title}</h3>
        <span>{props.movie.release_date}</span>
        <span>Rating {props.movie.vote_average}</span>
        <span>Votes {props.movie.vote_count}</span>
        <p>{props.movie.overview}</p>
        <h2 className="h2-link btn">
          <AddRemoveCoeur />
        </h2>
      </div>
    </div>
  );
}

export default MovieDetails;
