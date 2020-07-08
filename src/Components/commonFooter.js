import React from 'react';
// eslint-disable-next-line no-unused-vars
import '../Styling/footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'
import OKIcon from '../Icons/sample_logo.png'
import MLIcon from '../Icons/sample_logo.png'


const CommonFooter = () => {

    return (
        <div >

            <Container fluid className="footer-container">

                <Row className="footer-background">
                    <Col>KARTTA</Col>
                </Row>

            <Row className="footer-background1">
                <Col><p className="footer-font">Vapaavalintaista tekstiä</p></Col>

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

            <Row className="footer-background2">
                <Col><img className="footer-img-background" src={OKIcon} alt="OKIcon"/></Col> 
                <Col><p className="footer-font">Yhteistyössä</p></Col>
                <Col><img className="footer-img-background" src={MLIcon} alt="MLIcon"/></Col>
            </Row>

            </Container>
            
        </div>
    )
}

export default CommonFooter;