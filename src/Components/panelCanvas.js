import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../Styling/panelCanvas.css';

const panelCanvas = () => {
    return (
        <div>
            <Container>
                <Row><Col className="mainDescription">Höpönlöpön pöppöö</Col></Row>
                <Row>
                    <Col className="panel"><p>Yo</p></Col>
                    <Col className="panel"><p>tsiga</p></Col>
                </Row>
                <Row>Yo</Row>
            </Container>
        </div>
    )
}

export default panelCanvas;