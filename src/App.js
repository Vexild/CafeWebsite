import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Product from './Product'
=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
>>>>>>> c6af8adb7abd8f405f0377b37d8d346b34ac463c
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from './Components/commonMap';
import "./css/styles.css";
import Menu from './Components/menu'

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
                      // <p  className="sample-font ASD">Render Front</p>
                      setSite('frontpage')
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
          Middle
        </Row>
    
        <Row fluid>
          <CommonFooter/>

        </Row>
      
      </Container>
    </div>
  )
}

export default App;
