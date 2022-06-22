import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import NotFound from "./pages/404NotFound";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" exact element={<Favorites />} />
        <Route path="/About" exact element={<About />} />
        <Route element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
