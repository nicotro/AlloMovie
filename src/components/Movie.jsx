import React, { myRef, useState } from "react";
import { BASE_IMAGE_URL } from "../APIconfig";
import MovieDetails from "./MovieDetails";
import MoviePoster from "./MoviePoster";
import { Modal } from "react-responsive-modal";
import AddRemoveCoeur from "./AddRemoveCoeur";
import { ReactComponent as CloseIcon } from "./../assets/close_black_24dp.svg";
import { ReactComponent as DetailIcon } from "./../assets/search_black_24dp.svg";
import { ReactComponent as FavIconOn } from "./../assets/favorite_black_24dp.svg";
import { ReactComponent as FavIconOff } from "./../assets/favorite_border_black_24dp.svg";

const Movie = (props) => {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(
    props.favouriteText(props.movieCard.id)
  );

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const myRef = React.useRef(null);
  const closeIcon = <CloseIcon />;

  const textFav = props.favouriteText(props.movieCard.id) ? " Remove" : " Add";
  const redHeart = props.favouriteText(props.movieCard.id) ? (
    <FavIconOn />
  ) : (
    <FavIconOff />
  );
  const heartClass = props.favouriteText(props.movieCard.id)
    ? "btn btn-fav-on"
    : "btn btn-fav-off";

  function GetDetailFavourite() {
    props.handleFavouritesClick(props.movieCard);
  }

  return (
    <div ref={myRef}>
      <div className="movie">
        <MoviePoster
          urlBase={BASE_IMAGE_URL}
          size="w185"
          image={props.movieCard.poster_path}
          name={props.title}
          width="185"
        />

        <div className="basic-info">
          <div className="title">
            <h1>{props.movieCard.title}</h1>
          </div>
          <div className="links">
            <h2 className="h2-link" onClick={onOpenModal}>
              <span className="btn">
                <DetailIcon />
              </span>
              Details
            </h2>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{ modal: "customModal" }}
              closeIcon={closeIcon}
              container={myRef.current}
            >
              <MovieDetails
                movie={props.movieCard}
                favourite={props.favouriteText(props.movieCard.id)}
                GetDetailFavourite={GetDetailFavourite}
              />
            </Modal>
            <h2
              className="h2-link"
              onClick={() => {
                props.handleFavouritesClick(props.movieCard);
              }}
            >
              <span className={heartClass}>
                {redHeart}
                {textFav}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
