import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Media/placeholder_eyecatcher.jpg";
import img2 from "../Media/placeholder_eyecatcher.jpg";
import img3 from "../Media/placeholder_eyecatcher.jpg";
import OpeningHoursComponent from './openingHours';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


//import '../css/header.css'
const CustomCarousel = ()  => {

    const [site, setSite] = useState('frontpage');


    const nav = (a) => {
      setSite(a);
      console.log(a);
    }

    return (
        <div className="carousel-style">
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
                    <p  className="sample-font ASD">Render Front
                    { nav('menu') }</p>
                    //  <Menu /> 
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
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {img1}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />                    
                </Carousel.Item> 
            </Carousel>   
            <Row className="opening-hours-listing">
                <Col >
                    <OpeningHoursComponent />
                </Col>
                <Col className="navigate-footer-map">
                    <Button>Löydä meidät!</Button>
                </Col>
            </Row>
        </div>        
    )
  }
  
  export default CustomCarousel;