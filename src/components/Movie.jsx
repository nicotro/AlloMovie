import React, { Component, useState } from "react";
import { BASE_IMAGE_URL } from "../APIconfig";
import MovieDetails from "./MovieDetails";
import MoviePoster from "./MoviePoster";

const Movie = (props) => {
  const [detailPopup, setDetailPopup] = useState(false);
  const FavouriteComponent = props.FavouriteComponent;
  let aa = "something";
  //const FavComp = FavouriteComponent ? <RemoveFavourite/> : <AddFavourite/> ;

  return (
    <>
      <div className="movie">
        <MoviePoster
          urlBase={BASE_IMAGE_URL}
          size="w185"
          image={props.movieCard.poster_path}
          name={props.title}
          width="185"
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

          <li
            className="li-link"
            onClick={() => {
              aa = props.handleFavouritesClick(props.movieCard)
                ? "remove"
                : "add";
            }}
          >
            {aa}
          </li>
        </div>
      </div>

      <MovieDetails
        trigger={detailPopup}
        setTrigger={setDetailPopup}
        movie={props.movieCard}
      />
    </>
  );
};

export default Movie;
