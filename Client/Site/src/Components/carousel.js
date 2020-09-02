import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Media/placeholder_eyecatcher.jpg";
import img2 from "../Media/cafe_1.jpg";
import OpeningHoursComponent from './openingHours';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {scroller} from "react-scroll";
import apiUrl from '../api'


const CustomCarousel = ()  => {
    
    const [vpWidth, setVpHeight] = useState(window.innerWidth);
    
    const scrollToMap = () =>{
        scroller.scrollTo("footer-map-element", {
          duration: 800,
          smooth: "easeInOutQuad",
        });
      }
    

    return (
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
                        src={img1}
                        alt="Third slide"
                    />                    
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>   
            <Col xs="12" className="carousel-bottom">
                <Row >
                    <Col xs="6">
                        {vpWidth > 640 ? <OpeningHoursComponent /> : ( void 0)}
                    </Col>
                    <Col xs="6" className="navigate-footer-map">
                        <Button onClick={() => scrollToMap()}>Löydä meidät!</Button>
                    </Col>
                </Row>
            </Col>

        </div>        
    )
  }
  
  export default CustomCarousel;