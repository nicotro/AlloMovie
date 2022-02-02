import Logo from "../components/Header";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Favorites = () => {
  return (
    <div className="body">
      <Logo />
      <Navigation />
      <h1 className="movie-list-title">Favourites</h1>
      <Movies page="favourite"/>
    </div>
  );
};

export default Favorites;
