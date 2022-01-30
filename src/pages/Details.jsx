import Logo from "../components/HeaderLogo";
import Navigation from "../components/Navigation";

const Details = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Favorites</h1>
      <h3>Favorite movies selection goes here</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        accusantium incidunt exercitationem molestias rem. Illo praesentium
        corrupti maxime, dolor enim excepturi necessitatibus culpa sapiente
        molestiae?
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <br />
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <br />
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <br />
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    </div>
  );
};

export default Details;
