import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
import Menu from './Components/menu'
import Container from 'react-bootstrap/Container';

import Dummy from './Components/Panels/dummyPanel'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleMap from './Components/commonMap';
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
              
              <Switch>

                {/* <Route exact path="/" render={(props) => ( */}
                <Route exact path="/" render={(props) => (
                  <p  className="sample-font ASD">Render Front
                  { nav('frontpage') }</p>
                  )} />
                  
                {/* <Route path="/menu" render={(props) => ( */}
                <Route path="/menu" render={(props) => (
                  <p  className="sample-font">Render Menu
                  { nav('menu') }</p>
                  )} />
                {/* <Route path="/aboutus" render={(props) => ( */}
                <Route path="/aboutus" render={(props) => (
                  <p  className="sample-font">Render About Us</p>
                  )} />
                {/* <Route path="/order" render={(props) => ( */}
                <Route path="/order" render={(props) => (
                  <p  className="sample-font">Render Order</p>
                  )} />
              </Switch>
                             
            </Router>
          </div>
        </Row>

        <Row>
           {site === 'frontpage' ? <PanelCanvas/>  : <Menu /> }
           {/* <PanelCanvas/> */}
        </Row>
    
        <Row fluid>
          <CommonFooter/>

        </Row>
      
      </Container>
    </div>
  )
}

export default App;
