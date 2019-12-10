import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import './resources/css/bootstrap.min.css';
import './resources/css/index.css';

import Header from './components/Header.component';
import Footer from './components/Footer.component';

import HomePage from './components/HomePage.component';
import EnrollmentPage from './components/EnrollmentPage.component';
import HandbookPage from './components/HandbookPage.component';
import FireSafetyPage from './components/FireSafetyPage.component';
import HealthPolicyPage from './components/HealthPolicyPage.component';
import InfantPage from './components/InfantPage.component';
import ToddlerPage from './components/ToddlerPage.component';
import NotFoundPage from './components/NotFoundPage.component';

import createHistory from "history/createBrowserHistory"

export const history = createHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

function App() {
  return (
    <Router>

      <Header/>
      <div className="phantom-padder">&nbsp;</div>



      <Switch>
        <Route exact strict path="/">
          <HomePage/>
        </Route>
        <Route exact strict path="/enrollment/">
          <EnrollmentPage/>
        </Route>
        <Route exact strict path="/handbook/">
          <HandbookPage/>
        </Route>

        <Route exact strict path="/fire_safety/">
          <FireSafetyPage/>
        </Route>
        <Route exact path="/health_policy/">
          <HealthPolicyPage/>
        </Route>

        <Route exact path="/infants/">
          <InfantPage/>
        </Route>
        <Route exact path="/toddlers/">
          <ToddlerPage/>
        </Route>
        
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>


      <Footer/>
    </Router>

  );
}

export default App;
