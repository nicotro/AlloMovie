import Logo from "../components/HeaderLogo";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <h1>Popular movies list</h1>
      <Movies />
    </div>
  );
};

export default Home;
