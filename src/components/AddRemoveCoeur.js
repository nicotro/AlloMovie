import React from 'react';
import { useState } from "react/cjs/react.development";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

const AddRemoveCoeur = () => {
    const [isFavOn, setFavOn] = useState("false");
    const ToggleFav = () => {
      setFavOn(!isFavOn);
    };

    return(
        <>          
           <div className={isFavOn ? "favorite-btn-on" : "favorite-btn-off"}>
                {isFavOn && <FavIconOn onClick={() => ToggleFav()} />}
                {isFavOn && " remove from favorites"}
                {!isFavOn && <FavIconOff onClick={() => ToggleFav()} />}
                {!isFavOn && " add to favorites"}
            </div>
        </>
    )

}
export default AddRemoveCoeur;