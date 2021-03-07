import React, { Component } from "react";
import Navigation from './components/nav';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Books from './components/books';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
    <div className="App">
      <Navigation />
      <Books />
      <Switch>
      {/* <Route path="/" exact component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/> */}
      <Redirect from='*' to='/' />
      </Switch>
    </div>
  </Router>
  );
}


export default App;
