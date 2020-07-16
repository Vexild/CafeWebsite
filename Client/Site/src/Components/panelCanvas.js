import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'
import Menu from './menu'
import testImage1 from '../Media/cafe_1.jpg'
import testImage2 from '../Media/cafe_2.jpg'
import testImage from '../Media/cafe_3.jpg'
// const testImage = "../Icons/fb_icon_color.png'

const PanelCanvas =  (props) => {

    const showSite = props.show;
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ullamcorper turpis, eget rhoncus nulla. Vivamus odio sem, ullamcorper in pellentesque non, malesuada eu massa. Praesent sagittis suscipit"
    switch (showSite){
        case 'frontpage':
            return (
                <Container>
                <Row className="centered">
                    <Col>
                        <Panel image={testImage} isButton={true} />
                    </Col>
                    <Col>
                        <Panel image={testImage1} isButton={false} />
                    </Col>
                </Row>
                <Row className="centered">
                    <Col>
                        <Panel text="Nippon kazaua"   image={testImage2} isButton={false} />
                    </Col>
                    <Col>
                        <Panel image={testImage2}  isButton={true} />
                    </Col>
                    </Row>
                </Container>
            )
        case 'aboutus':
            return (
                <Container>
                    <Row className="centered">
                        <Col>
                            <Panel image={testImage2} isButton={true} />
                            <Panel image={testImage} isButton={true} />
                        </Col>
                        <Col>
                            <Panel text={lorem} isButton={false} />
                        </Col>
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