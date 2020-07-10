import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Product from './Product'
import CommonHeader from './Components/commonHeader'
import "./css/styles.css";

function App() {
  return (
    <div id="frontpage">
      <CommonHeader/>
      <Router>
      <div>
        <Link to="/">Etusivu </Link>
        <Link to="/tuotteet">Tuotteet</Link>

        <Route exact path="/" render={(props) => (
          <p>Front</p>
          )} />
        <Route path="/tuotteet" render={(props) => (
          <Product /> 
          )} />

        </div> 
      </Router>
    </div>
  )
}

export default App;
