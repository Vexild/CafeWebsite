import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Product from './Product'

function App() {
  return (
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
  )
}

export default App;
