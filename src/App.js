import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
// import Product from './Product'
//import Menu from './Components/menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleMap from './Components/commonMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

function App() {
  const [site, setSite] = ['frontpage'];

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
                  <p  className="sample-font ASD">Render Front</p>
                  //setSite('frontpage')
                  )} />
                {/* <Route path="/menu" render={(props) => ( */}
                <Route path="/menu" render={(props) => (
                  <p  className="sample-font">Render Menu</p>
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
          {/* {site ? <FrontPage /> ? <Store/> : <AboutUs/> } */}
          <PanelCanvas/>
        </Row>
    
        <Row fluid>
          <CommonFooter/>

        </Row>
      
      </Container>
    </div>
  )
}

export default App;
