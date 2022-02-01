import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Favorites = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="movie-list-title">Favorites</h1>
      <h3>Favorite movies selection goes here</h3>
    </div>
  );
};

export default Favorites;
