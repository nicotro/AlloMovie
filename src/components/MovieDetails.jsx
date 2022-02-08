import React, { useState } from "react";
import MoviePoster from "./MoviePoster";
import { BASE_IMAGE_URL } from "../APIconfig";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

function MovieDetails(props) {
  const [favorite, setFavorite] = useState(props.favourite);
  let textFav = favorite ? " Remove" : " Add";
  let redHeart = favorite ? <FavIconOn /> : <FavIconOff />;
  let heartClass = favorite ? "btn btn-fav-on" : "btn btn-fav-off";

  function ToggleFavourite(movie) {
    props.GetDetailFavourite(movie);
    setFavorite(!favorite);
    textFav = favorite ? " Remove" : " Add";
    redHeart = favorite ? <FavIconOn /> : <FavIconOff />;
    heartClass = favorite ? "btn btn-fav-on" : "btn btn-fav-off";
  }

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
        <h2
          className="h2-link"
          onClick={() => {
            ToggleFavourite(props.movie);
          }}
        >
          <span className={heartClass}>
            {redHeart}
            {textFav}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default MovieDetails;
