import { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="body">
      <MoviesList />
    </div>
  );
};

export default Home;
