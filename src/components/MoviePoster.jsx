import React from "react";
const MoviePoster = (props) => {
  const poster = props.image
    ? props.urlBase + props.size + props.image
    : "./public/assets/defaultPoster.png";
  return <img src={poster} alt={props.name} width={props.displayWidth} />;
};

export default MoviePoster;
