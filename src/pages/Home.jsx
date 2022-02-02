import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Movies searchText="" resPage="1" page="popular" />
    </div>
  );
};

export default Home;
