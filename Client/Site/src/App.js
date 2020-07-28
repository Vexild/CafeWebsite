import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
import Container from 'react-bootstrap/Container';
<<<<<<< HEAD
=======
import {scroller} from "react-scroll";
>>>>>>> 08b07418803fdedfa2b29e9fc3d6113f2f1b3b54
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

//  eslint-disable-next-line

<<<<<<< HEAD
function App() {
=======
  const nav = (a) => {
    setSite(a);
    scroller.scrollTo("content-element", {
      duration: 800,
      smooth: "easeInOutQuad",
    });
  }
>>>>>>> 08b07418803fdedfa2b29e9fc3d6113f2f1b3b54

  return (
    <div>
      <Container fluid>
          <CommonHeader/>
        
          <div className="nav-line">
            <Router>
              <Link className="nav-font" to="/">Etusivu</Link>
              <Link className="nav-font" to="/menu">Menu</Link>
              <Link className="nav-font" to="/aboutus">Meistä</Link>
              <Link className="nav-font" to="/order">Tilaus</Link>
              <Link className="nav-font" to="/spillage">Hävikki</Link>
              
              <Switch>

                <Route exact path="/" render={(props) => (
                  <div  className="sample-font"> {nav('frontpage') }</div>
                  )} />
                <Route path="/menu" render={(props) => (
                  <div className="sample-font"> { nav('menu') }</div>
                  )} />
                <Route path="/aboutus" render={(props) => (
                  <div className="sample-font"> { nav('aboutus') }</div>
                  )} />
                <Route path="/order" render={(props) => (
                  <div className="sample-font"> {nav('cateringform')}</div>
                  )} />
                <Route path="/spillage" render={(props) => (
                  <div className="sample-font"> {nav('spillage')}</div>
                  )} />
              </Switch>
                             
            </Router>
          </div>
        </Row>

        <Row name="content-element" >
           <PanelCanvas show={site}/>
        </Row>
    
<<<<<<< HEAD
        <Row>
=======
        <Row name="footer-map-element" fluid>
>>>>>>> 08b07418803fdedfa2b29e9fc3d6113f2f1b3b54
          <CommonFooter/>
        </Row>
      
      </Container>
    </div>
  )
}

export default App;
