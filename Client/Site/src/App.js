import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
import Container from 'react-bootstrap/Container';
import {scroller} from "react-scroll";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

function App() {
  const [site, setSite] = useState('frontpage');

  const nav = (a) => {
    setSite(a);
    scroller.scrollTo("content-element", {
      duration: 800,
      smooth: "easeInOutQuad",
    });
  }

  return (
      <Container fluid>
        <Row>

          <CommonHeader/>
        
          <div className="nav-line">
            <Router>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/">Etusivu</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/menu">Menu</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/aboutus">Meistä</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/order">Tilaus</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/spillage">Hävikki</Link>
              </Col>
              
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
    
        <Row name="footer-map-element" fluid>
          <CommonFooter/>
        </Row>
      
      </Container>
  )
}

export default App;
