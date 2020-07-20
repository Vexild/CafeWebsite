import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from './carousel'
// eslint-disable-next-line no-unused-vars
// import '../css/header.css'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'

const CommonHeader = () => {

    return (
        <Container fluid className="common-header">
        <Row fluid className=" header-grey-background ">
            <Col>
                <h1 className="sample-font">CAFE sample</h1>
            </Col>
            <Col xs="auto" className="social-media-icons-top">
                <Image className="header-icon-background" src={IGIcon} roundedCircle/>
                <Image className="header-icon-background" src={FBIcon} roundedCircle/>
            </Col>
        </Row>
        <Row fluid>
            <Col className="no-padding">
                <Carousel/>
            </Col>
        </Row>
            
        </Container>

    )
}

export default CommonHeader;

