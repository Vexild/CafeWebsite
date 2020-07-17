import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'
import cateringForm from './cateringForm'
import Menu from './menu'

import testImage from '../Icons/fb_icon_color.png'
import CateringForm from './cateringForm'

const PanelCanvas =  (props) => {

    const showSite = props.show;
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ullamcorper turpis, eget rhoncus nulla. Vivamus odio sem, ullamcorper in pellentesque non, malesuada eu massa. Praesent sagittis suscipit"


    
    
    switch (showSite){
        case 'frontpage':
            return (
                <Container>
                <Row className="centered">
                    <Col>
                        <Panel text="tänää hyvä ä munkkia" isButton={false} />
                    </Col>
                    <Col>
                        <Panel image={testImage} isButton={true} />
                    </Col>
                </Row>
                <Row className="centered">
                    <Col>
                        <Panel text={lorem}  isButton={true} />
                    </Col>
                    <Col>
                        <Panel text="Nippon kazaua"  isButton={false} />
                    </Col>
                    </Row>
                </Container>
            )
        case 'aboutus':
            return (
                <Container>
                <Row className="centered">
                    <Col>
                        <Panel text="Olemme reippaita" isButton={false} />
                    </Col>
                    <Col>
                        <Panel text="Olemme leipureita" isButton={false} />
                    </Col>
                </Row>
                <Row className="centered">
                    <Col>
                        <Panel text={lorem} size={1} isButton={false} />
                    </Col>
                    <Col>
                        <Panel image={testImage} size={1} isButton={false} />
                    </Col>
                    </Row>
                </Container>
            )
        case 'cateringform':
            return(
                <Container>
                <Row className="centered">
                    <CateringForm />
                </Row>
                </Container>
                
            )

    
        case 'menu':
            return (
                <Container>
                <Row className="centered">
                    <Menu />
                </Row>
                </Container>
            )

        default:
            return (
                <div>
                    <p>default</p>
                </div>
            )
        }
    
}

export default PanelCanvas;