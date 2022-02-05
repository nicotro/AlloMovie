import { useState } from "react";
import { BASE_IMAGE_URL } from "../APIconfig";
import ApiGetMovies from "./ApiGetMovies";

const Header = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState([]);
  const [backdropUrl, setBackdropUrl] = useState("");

  function GetMovieInfo(data) {
    const randomMovie = data[Math.floor(Math.random() * data.length)];
    setMovie(randomMovie);
    const backdropUrl = BASE_IMAGE_URL + "w1280" + randomMovie.backdrop_path;
    setBackdropUrl(backdropUrl);
  }

  const moviesFromApi = (childData) => {
    setData(childData);
    if (childData.length > 0) GetMovieInfo(childData);
  };

  return (
    <>
      <ApiGetMovies searchText="" resPage="1" moviesData={moviesFromApi} />
      <div
        className="header-img"
        style={{
          backgroundImage: 'url("' + backdropUrl + '")',
        }}
      >
        <div className="header-img-info-text">
          <div className="header-img-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
