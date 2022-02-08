import React from "react";
import { useState } from "react/cjs/react.development";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

const AddRemoveCoeur = (props) => {
  const [isFavOn, setFavOn] = useState(props.heart);
  let textFav = isFavOn ? " Remove" : " Add";

  const ToggleFav = () => {
    setFavOn(!isFavOn);
    textFav = isFavOn ? " Remove" : " Add";
  };

  return (
    <>
      <span
        className={isFavOn ? "btn-fav-on" : "btn-fav-off"}
        onClick={() => ToggleFav()}
      >
        {isFavOn && <FavIconOn />}
        {!isFavOn && <FavIconOff />}
        {textFav}
      </span>
    </>
  );
};
export default AddRemoveCoeur;
