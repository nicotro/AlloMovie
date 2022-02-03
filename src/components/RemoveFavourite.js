import React from 'react';
import { useState } from "react/cjs/react.development";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

const RemoveFavourite = () => {
    const [isFavOn, setFavOn] = useState("false");
    const ToggleFav = () => {
      setFavOn(!isFavOn);
    };

    return(
        <>    
            <span>Remove Favourite</span>
            {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            <div className={isFavOn ? "favorite-btn-on" : "favorite-btn-off"}>
                {isFavOn && <FavIconOn onClick={() => ToggleFav()} />}
                {isFavOn && " remove from favorites"}
                {!isFavOn && <FavIconOff onClick={() => ToggleFav()} />}
                {!isFavOn && " add to favorites"}
            </div>*/}
        </>
    )

}
export default RemoveFavourite;