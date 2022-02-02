import React from "react";
const MoviePoster = (props) => {
  return (
    <img
      src={`${props.urlBase}${props.size}${props.image}`}
      alt={props.name}
      width={props.displayWidth}
    />
  );
};

export default MoviePoster;
