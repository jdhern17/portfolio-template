import React from "react";

// imports DOM bindings for React Router for route-based code splitting
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { getContent } from './api/apiContentService';


function App() {
  const [welcomeContent, setWelcomeContent] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(async () => {
    // setLoading(true);
    // try {
        const res = await getContent();
        const welcomeEntry = res.data.find((item) => item.fields.id === 'welcome-about-me').fields;
        setWelcomeContent(welcomeEntry);
        // const outcomeEntries = res.data
        //     .filter((item) => item.sys.contentType.sys.id === 'screenerOutcome')
        //     .map((item) => item.fields);
        // setOutcomeContent(outcomeEntries);
    // } catch (e) {
    //     console.log(e);
    //     setError(true);
    // } finally {
    //     setLoading(false);
    // }
}, []);

  return (
    <>
      <Router>
        <Nav />
        <div className="container-fluid">
        <Sidebar/>
        <Switch>          
          <Route exact path="/" render={() => <Redirect to="/welcome"/>} />
          <Route path="/:linkId"><MainContent welcomeContent={welcomeContent}/></Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
