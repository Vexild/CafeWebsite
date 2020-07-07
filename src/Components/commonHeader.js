import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// eslint-disable-next-line no-unused-vars
import '../Styling/header.css'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'
import EyecatcherImage from '../Media/placeholder_eyecatcher.jpg'

const CommonHeader = () => {

    return (
        <div>
            <Container fluid className=" header-grey-background">
                <Row>
                    <Col md="auto">
                        <h1 className="sample-font">CAFE sample</h1>
                    </Col>
                    <Col md="auto">
                    </Col>
                    <Col md="auto" className="social-media-icons">
                        <Image className="header-icon-background" src={IGIcon} roundedCircle/>
                        <Image className="header-icon-background" src={FBIcon} roundedCircle/>
                    </Col>
                </Row>
                <Row md="auto">
                    <Image fluid src={EyecatcherImage} alt="eyecatcher"  />
                </Row>
            </Container>
        </div>

    )
}

export default CommonHeader;

