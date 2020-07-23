import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Media/placeholder_eyecatcher.jpg";
import img2 from "../Media/placeholder_eyecatcher.jpg";
import img3 from "../Media/placeholder_eyecatcher.jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';


//import '../css/header.css'
const CustomCarousel = ()  => {

    const [site, setSite] = useState('frontpage');


    const nav = (a) => {
      setSite(a);
      console.log(a);
    }

    return (
        <div className="carousel-style">
                <div className="nav-line justify-content-center">
                    <Router>
                        <Col xs="1" className="inline-block">
                            <Link className="nav-font" to="/">Etusivu</Link>
                        </Col>
                        <Col xs="1" className="inline-block">
                            <Link className="nav-font" to="/">Menu</Link>
                        </Col>
                        <Col xs="1" className="inline-block">
                            <Link className="nav-font" to="/">Meistä</Link>
                        </Col>
                        <Col xs="1" className="inline-block">
                            <Link className="nav-font" to="/">Tilaus</Link>
                        </Col>
                    <Switch>

                        {/* <Route exact path="/" render={(props) => ( */}
                        <Route exact path="/" render={(props) => (
                            <Col>
                                <p  className="sample-font ASD">Render Front
                                { nav('frontpage') }</p>
                            </Col>
                        )} />
                        
                        {/* <Route path="/menu" render={(props) => ( */}
                        <Route path="/menu" render={(props) => (
                            <Col>
                                <p  className="sample-font ASD">Render Front
                                { nav('menu') }</p>                            
                            </Col>
 
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
        </div>        
    )
  }
  
  export default CustomCarousel;