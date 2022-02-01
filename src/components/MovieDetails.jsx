import React from "react";
import { useState } from "react/cjs/react.development";
import { ReactComponent as CloseIcon } from "./../assets/close_black_24dp.svg";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

const MovieDetails = (props) => {
  const [isFavOn, setFavOn] = useState("false");
  const ToggleFav = () => {
    setFavOn(!isFavOn);
  };

  return props.trigger ? (
    <div className="MovieDetails">
      <div className="popup">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <CloseIcon />
        </div>
        {props.children}
        <div className={isFavOn ? "favorite-btn-on" : "favorite-btn-off"}>
          {isFavOn && <FavIconOn onClick={() => ToggleFav()} />}
          {isFavOn && (
            <label onClick={() => ToggleFav()}> remove from favorites</label>
          )}
          {!isFavOn && <FavIconOff onClick={() => ToggleFav()} />}
          {!isFavOn && (
            <label onClick={() => ToggleFav()}> add to favorites</label>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MovieDetails;
