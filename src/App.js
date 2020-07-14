import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Product from './Product'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from './Components/commonMap';
import "./css/styles.css";

function App() {
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

              <Route exact path="/" render={(props) => (
                  <p  className="sample-font">Render Front</p>
              )} />
              <Route path="/menu" render={(props) => (
                  <p  className="sample-font">Render Menu</p>
              )} />
              <Route path="/aboutus" render={(props) => (
                  <p  className="sample-font">Render About Us</p>
              )} />
              <Route path="/order" render={(props) => (
                  <p  className="sample-font">Render Order</p>
              )} />
                             
            </Router>
        </div>
        
        
        </Row>

        <Row>
          <h4>Middle</h4>
        </Row>
    
        <Row fluid>
          <CommonFooter/>

        </Row>
      
      </Container>
    </div>
  )
}

export default App;
