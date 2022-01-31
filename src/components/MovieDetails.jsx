import React from "react";

function MovieDetails(props) {
  return props.trigger ? (
    <div className="MovieDetails">
      <div className="popup">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>

        {props.children}

        <button className="favorite-btn">Favorite add/remove</button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MovieDetails;
