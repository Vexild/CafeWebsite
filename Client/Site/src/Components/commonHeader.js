import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from './carousel'
import OpeningHoursComponent from './openingHours';
// eslint-disable-next-line no-unused-vars
// import '../css/header.css'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'

const CommonHeader = () => {

    return (
        <Container fluid>
            <div className="common-header">
                <Row className="header-grey-background">
                    <Col xs="9">
                        <h1 className="sample-font">CAFE sample</h1>
                    </Col>
                    <Col xs="3" className="social-media-icons-top">
                        <Image className="header-icon-background" src={IGIcon} roundedCircle/>
                        <Image className="header-icon-background" src={FBIcon} roundedCircle/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="no-padding">
                        <Carousel/>
                    </Col>
                </Row>
                {/* <Row>
                </Row> */}
            </div>
        </Container>
    )
}

export default CommonHeader;

