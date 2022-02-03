import { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";

const Home = () => {
  const [search, setsearch] = useState("");
  const [page, setPage] = useState("1");

  const [query, setQuery] = useState("");
  const handleSearchCallback = (searchQuery) => {
    setQuery(searchQuery);
    console.log("search query = " + searchQuery);
    console.log("& query = " + query);
    setsearch(query);
  };

  useEffect(() => {
    console.log("hello");
  }, [query]);

  return (
    <div>
      <Search />
      <MoviesList searchText={query} resPage={page} />
    </div>
  );
};

export default Home;
