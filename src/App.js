import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Favorites" exact component={Favorites} />
        <Route path="/About" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;
