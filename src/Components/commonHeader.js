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
        <div>
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
            <Carousel/>
            {/* <div className="eyecatcher">
                <Row md="auto" className="justify-content-md-center">
                    <Router>
                        <Col className="nav-line">
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
                            <Route path="/tilaus" render={(props) => (
                                <p  className="sample-font">Render Order</p>
                            )} />

                        </Col>
                    
                    </Router>
                </Row>
            </div> */}
        </div>

    )
}

export default CommonHeader;

