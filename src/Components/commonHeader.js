import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from './carousel'
// eslint-disable-next-line no-unused-vars
import '../Styling/header.css'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'

const CommonHeader = () => {

    return (
        <div>
            <Container fluid>
                <Row fluid className=" header-grey-background ">
                    <Col>
                        <h1 className="sample-font">CAFE sample</h1>
                    </Col>
                    <Col>
                    </Col>
                    <Col md="auto" className="social-media-icons">
                        <Image className="header-icon-background" src={IGIcon} roundedCircle/>
                        <Image className="header-icon-background" src={FBIcon} roundedCircle/>
                    </Col>
                </Row>
                <Row fluid>
                    <Carousel/>
                </Row>
                
            </Container>
        </div>

    )
}

export default CommonHeader;

