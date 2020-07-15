import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'

import testImage from '../Icons/fb_icon_color.png'

const PanelCanvas =  () => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ullamcorper turpis, eget rhoncus nulla. Vivamus odio sem, ullamcorper in pellentesque non, malesuada eu massa. Praesent sagittis suscipit"


    return (
        <Container>
            <Row className="centered">
                <Col>
                    <Panel text="tänää hyvä ä munkkia" size={2} isButton={true} />
                </Col>
                <Col>
                    <Panel text={lorem} size={2} isButton={false} />
                </Col>
                {/* <Col>
                    <Panel kuva= "kuva7Löytyy/täälät/jostain.jpg"/>
                </Col> */}
            </Row>
            <Row className="centered">
                <Col>
                    <Panel text={lorem} size={1} isButton={false} />
                </Col>
                <Col>
                    <Panel image={testImage} size={1} isButton={true} />
                </Col>
            </Row>
        </Container>
    )

}

export default PanelCanvas;