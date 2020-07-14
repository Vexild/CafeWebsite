import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styling/panelCanvas.css';

const panelCanvas = () => {
    const [cafeDescription, setCafeDescription] = ({})
    const [topicalText, setTopicalText] = ({})

    return (
        <div>
            <Container>
                <Row><Col className="cafeDescription">Höpönlöpön pöppöö</Col></Row>
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