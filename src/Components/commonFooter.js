import React from 'react';
// eslint-disable-next-line no-unused-vars
import '../css/footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'
import OKIcon from '../Icons/sample_logo.png'
import MLIcon from '../Icons/sample_logo.png'
import GMIcon from '../Icons/map_image.PNG'


const CommonFooter = () => {

    return (
        <div >

            <Container fluid className="fixed-bottom">

                <Row className="footer-background">
                    <Col className="d-flex justify-content-center"><img className="footer-map-image" src={GMIcon} alt="GMIcon"/></Col>
                </Row>

            <Row className="footer-background1 align-items-center">
                <Col><p className="footer-font">Vapaavalintaista tekstiä loorem ipsumia ja paljon asdsadasdasdasdasdsdasdsdsad</p></Col>

                <Col> 
                <p className="footer-font">
                KATUOSOITE <br/>
                PAIKKAKUNTA <br/>
                PUHELIN
                </p>
                </Col>

                <Col>
                <a href="https://www.instagram.com/"> <img  className="footer-icon-background" src={IGIcon} alt="IGIcon"/> </a>
                <a href="https://www.facebook.com/"> <img  className="footer-icon-background" src={FBIcon} alt="FBIcon"/> </a>
                </Col>
            </Row>

            <Row className="footer-background2 ">
                <Col><img className="footer-img-background" src={OKIcon} alt="OKIcon"/></Col> 
                <Col><p className="footer-font">Yhteistyössä</p></Col>
                <Col><img className="footer-img-background" src={MLIcon} alt="MLIcon"/></Col>
            </Row>

            </Container>
            
        </div>
    )
}

export default CommonFooter;