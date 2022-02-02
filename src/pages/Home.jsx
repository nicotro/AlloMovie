import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Home = () => {
  const [search, setsearch] = useState("");
  const [page, setPage] = useState("1");

  return (
    <div>
      {/* to adapt for header background */}
      <Header searchText={search} resPage={page} />
      <Navigation />
      <Movies searchText={search} resPage={page} />
    </div>
  );
};

export default Home;
