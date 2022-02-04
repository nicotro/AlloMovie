import React from "react";
import AddRemoveCoeur from "./AddRemoveCoeur";
import { ReactComponent as CloseIcon } from "./../assets/close_black_24dp.svg";

function MovieDetails(props) {
  return props.trigger ? (
    <div className="MovieDetails">
      <div className="popup">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <CloseIcon />
        </div>
        <h3>{props.movie.title}</h3>
        <span>{props.movie.release_date}</span>
        <span>Rating {props.movie.vote_average}</span>
        <span>Votes {props.movie.vote_count}</span>
        <p>{props.movie.overview}</p>
        <AddRemoveCoeur />
      </div>
    </div>
  ) : (
    ""
  );
}

export default MovieDetails;
