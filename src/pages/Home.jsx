import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="movie-list-title">Popular movies list</h1>
      <Movies />
    </div>
  );
};

export default Home;
