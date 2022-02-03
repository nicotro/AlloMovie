import { useState } from "react";
import MoviesFavList from "../components/MoviesFavList";
import Search from "../components/Search";

const About = () => {
  const [search, setsearch] = useState("");
  const [page, setPage] = useState("1");
  return (
    <div>
      <br />
      <h1 className="movie-list-title">About</h1>
      <div className="searchBar">
        <p className="input">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad
          quidem minima voluptates, ullam debitis quaerat eum consequatur sequi
          laborum, sint quo asperiores, magni et corrupti quis doloribus
          reiciendis consequuntur obcaecati repudiandae voluptas quod? Tempora
          minus, debitis a beatae architecto, error aspernatur sequi officia
          corrupti minima reiciendis pariatur sint soluta.
        </p>
      </div>
    </div>
  );
};

export default About;
