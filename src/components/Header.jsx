import { useState, useEffect } from "react";
import { BASE_IMAGE_URL } from "../APIconfig";
import { API_KEY, BASE_API_URL } from "../APIconfig";

const Header = () => {
  const [movie, setMovie] = useState([]);
  const [backdropUrl, setBackdropUrl] = useState("");
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    GetPopularMovies();
  }, [loaded]);  
  
  function GetMovieInfo(data) {
    const randomMovie = data[Math.floor(Math.random() * data.length)];
    setMovie(randomMovie);
    const backdropUrl = BASE_IMAGE_URL + "w1280" + randomMovie.backdrop_path;
    setBackdropUrl(backdropUrl);
  }


  const GetPopularMovies = async () => {
    const url =
      BASE_API_URL +
      "movie/popular?api_key=" +
      API_KEY +
      "&language=en-US&page=1&region=FR";
    const response = await fetch(url);
    const responseJson = await response.json();
    
    if (responseJson.results) {
      //console.log(responseJson.results);
      await GetMovieInfo(responseJson.results);
      setLoaded(true);
    }
  }

  return (
    <>
      {
        loaded
          ?
          (
            <>
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
          )
          :
          <h2>
            loading...
          </h2>
      }
    </>
  );
};

export default Header;
