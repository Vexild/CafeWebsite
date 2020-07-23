import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

function App() {
  const [site, setSite] = useState('frontpage');


  const nav = (a) => {
    setSite(a);
    console.log(a);
  }
  return (
    <div>
      <Container fluid>
        <Row>

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
                  <p  className="sample-font ASD">Render Front
                  { nav('frontpage') }</p>
                  )} />
                <Route path="/menu" render={(props) => (
                  <p  className="sample-font ASD">Render Front
                  { nav('menu') }</p>
                  )} />
                <Route path="/aboutus" render={(props) => (
                  <p  className="sample-font">Render About Us
                  { nav('aboutus') }</p>
                  )} />
                <Route path="/order" render={(props) => (
                  <p  className="sample-font">Render Order{nav('cateringform')}</p>
                  )} />
                <Route path="/spillage" render={(props) => (
                  <p  className="sample-font">Render Hävikki{nav('spillage')}</p>
                  )} />
              </Switch>
                             
            </Router>
          </div>
        </Row>

        <Row>
           <PanelCanvas show={site}/>
        </Row>
    
        <Row fluid>
          <CommonFooter/>
        </Row>
      
      </Container>
    </div>
  )
}

export default App;
