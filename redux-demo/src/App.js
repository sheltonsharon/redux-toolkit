import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <div className="container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/movie/:imdbID" component={MovieDetail}/>
                <Route component={PageNotFound}/>
            </Switch>
          </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
