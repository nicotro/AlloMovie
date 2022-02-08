import React, { useEffect, useState } from "react";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

const AddRemoveCoeur = (props) => {
  const [isFavOn, setFavOn] = useState(props.heart);
  let textFav = isFavOn ? " Add" : " Remove";

  const ToggleFav = () => {
    setFavOn(!isFavOn);
    textFav = isFavOn ? " Add" : " Remove";
  };

  if (isFavOn != props.heart) ToggleFav();
  console.log("props.heart = " + props.heart);
  console.log("isFavOn = " + isFavOn);

  return (
    <>
      {props.heart}
      <span>
        {" ->"}
        {textFav}
      </span>
    </>
  );
};
export default AddRemoveCoeur;
