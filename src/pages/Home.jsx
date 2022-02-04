import { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";

const Home = () => {
  const [search, setsearch] = useState("");
  const [page, setPage] = useState("1");

  const [dummyState, rerender] = useState(1);

  const [query, setQuery] = useState("");
  const handleSearchCallback = (searchQuery) => {
    setQuery(searchQuery);
    console.log("search query = " + searchQuery);
    console.log("& query = " + query);
    setsearch(query);
    rerender(dummyState + 1);
  };

  useEffect(() => {
    console.log("dummyState's state has updated to: " + dummyState);
  }, [dummyState]);

  return (
    <div>
      <Search searchCallback={handleSearchCallback} />
      <MoviesList searchText={search} resPage={page} />
    </div>
  );
};

export default Home;
