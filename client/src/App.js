import React from "react";

// imports DOM bindings for React Router for route-based code splitting
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container-fluid">
        <Sidebar/>
        <Switch>          
          <Route exact path="/" render={() => <Redirect to="/welcome"/>} />
          <Route path="/:linkId"><MainContent/></Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
