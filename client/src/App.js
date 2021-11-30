import React, { useState, useEffect } from 'react';
// imports DOM bindings for React Router for route-based code splitting
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { getContent } from "./api/apiContentService";


function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [contentfulContent, setContentfulContent] = useState(null);
  const [navbarContent, setNavbarContent] = useState("Loading...");
  const [footerContent, setFooterContent] = useState();

  useEffect(() => {
    async function someFunc() {
      // setLoading(true);
      try {
        const res = await getContent(); 
        // const entry = res.find(
        //   (item) => item.fields.id === "welcome-about-me"
        // ).fields;
        
        setContentfulContent([...res]);
        const navbarArr = res.filter((item)=>item.sys.contentType.sys.id === "navbarTitle");
        const navbarTitle = navbarArr[0].fields.navbarEntryName;
        setNavbarContent(navbarTitle);
        const filteredFooterContent = res.filter((item)=>item.sys.contentType.sys.id==="footer");
        setFooterContent(filteredFooterContent);
        // const outcomeEntries = res.data
        //     .filter((item) => item.sys.contentType.sys.id === 'screenerOutcome')
        //     .map((item) => item.fields);
        // setOutcomeContent(outcomeEntries);
      } catch (e) {
        console.log(e);
        //     setError(true);
      } finally {
        //     setLoading(false);
      }
    }
    someFunc();
  }, []);

  return (
    <>
      <Router>
        <Nav navbarContent={navbarContent} />
        <div className="container-fluid">
          <Sidebar />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/welcome" />} />
              <Route path="/:linkId">
                <MainContent contentfulContent={contentfulContent} />
              </Route>
            </Switch>
        </div>
        <Footer currentFooterContent={footerContent} />
      </Router>
    </>
  );
}

export default App;
