import React from "react";
import Navigation from './components/nav';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Books from './components/books';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Saved from "./components/saved";

function App() {
  return (

    <Router>
    <div className="App">
      <Navigation />
      <Switch>
      <Route path="/" exact component={Books}/>
      <Route path="/saved" component={Saved}/>
      <Redirect from='*' to='/' />
      </Switch>
    </div>
  </Router>
  );
}


export default App;
