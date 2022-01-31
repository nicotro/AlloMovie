import Logo from "../components/Header";
import Navigation from "../components/Navigation";

const Details = () => {
  return (
    <div className="body">
      <Logo />
      <Navigation />
      <h1 className="movie-list-title">Favorites</h1>
      <h3>Favorite movies selection goes here</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        accusantium incidunt exercitationem molestias rem. Illo praesentium
        corrupti maxime, dolor enim excepturi necessitatibus culpa sapiente
        molestiae?
      </p>
    </div>
  );
};

export default Details;
