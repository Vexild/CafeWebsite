import React, {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'
import OKIcon from '../Icons/sample_logo.png'
import MLIcon from '../Icons/sample_logo.png'
import GMIcon from '../Icons/map_image.PNG'
import axios from 'axios'


const CommonFooter = () => {
  const [contactInfo, setContactInfo] = useState()

  const getContactInfo = () => {
      axios.get('http://localhost:4000/api/info/get')
      .then(response => {
          //console.log(response.data)
          setContactInfo(response.data)
      })
      .catch(error => console.log(error))
  }
  if (!contactInfo) {
      getContactInfo()
  }

    return (
        <Container fluid className="common-footer">

            <Row className="footer-background">
                <Col className="d-flex justify-content-center"><img className="footer-map-image" src={GMIcon} alt="GMIcon"/></Col>
            </Row>

        <Row className="footer-background1 align-items-center">
            <Col><p className="footer-font">Vapaavalintaista tekstiä loorem ipsumia ja paljon asdsadasdasdasdasdsdasdsdsad</p></Col>

            <Col> 
            <p className="footer-font">
            {contactInfo ? contactInfo[0].address : null}<br/>
            {contactInfo ? contactInfo[0].city : null} <br/>
            {contactInfo ? contactInfo[0].phone : null}
            </p>
            </Col>

            <Col className="social-media-icons-bottom">
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
    
    )
}

export default CommonFooter;