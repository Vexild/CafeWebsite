import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Filter from './filter'

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
         <Filter /> 
       )} />

       </div> 
    </Router>
  )
}

export default App;
