import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import ProductList from "./Components/productList"
// import TagList from "./Components/tagList"
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Login from './Components/login'
import Dashboard from './Components/dashboard'

import './App.css';

function App() {

  const [user, setUser] = useState(localStorage.getItem("user") || null);
  return (
    <Container className="main-frame">
      { user 
      ? <Dashboard userLogout={() => setUser(null)}/> 
      : <Login userLogin={() => setUser(true)}/>}
    </Container>
  );
}

export default App;
