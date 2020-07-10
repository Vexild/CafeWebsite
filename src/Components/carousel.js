import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import img1 from "../Media/placeholder_eyecatcher.jpg";
import img2 from "../Media/placeholder_eyecatcher.jpg";
import img3 from "../Media/placeholder_eyecatcher.jpg";
import OpeningHoursComponent from './openingHours';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Col';


import '../Styling/header.css'
const customCarousel = ()  => {

    // const carouselStyle = {
    //   "position": "absolute",
    //   "top": "54px",
    //   "z-index": "0"
    // }
  
    return (
      <div>
        <div className="carousel-style">
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
        <div class="d-flex align-items-end">

            <OpeningHoursComponent />

        </div>
        
    </div>
    )
  }
  
  export default customCarousel;