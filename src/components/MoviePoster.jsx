import React from "react";
const MoviePoster = (props) => {
  const poster = props.image
    ? props.urlBase + props.size + props.image
    : process.env.PUBLIC_URL + "/assets/defaultPoster.png";
  return <img src={poster} alt={props.name} width={props.width} />;
};

export default MoviePoster;
