import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import img1 from "../Media/placeholder_eyecatcher.jpg";
import img2 from "../Media/placeholder_eyecatcher.jpg";
import img3 from "../Media/placeholder_eyecatcher.jpg";
import OpeningHoursComponent from './openingHours';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


//import '../css/header.css'
const customCarousel = ()  => {

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
            <Row className="opening-hours-listing">
                <Col >
                    <div >
                        <OpeningHoursComponent />
                    </div> 
                </Col>
                <Col>
                    <div className="navigate-footer-map">
                        <Button>Löydä meidät!</Button>
                    </div> 
                </Col>
            </Row>
        </div>        
    </div>
    )
  }
  
  export default customCarousel;