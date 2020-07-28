import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'
import testImage1 from '../Media/cafe_1.jpg'
import testImage2 from '../Media/cafe_2.jpg'

const AboutUs = () => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit lorem, mollis non urna vel, tempus blandit odio. Morbi sollicitudin accumsan luctus. Nullam eu augue in elit tempus scelerisque non quis lacus. Cras eu euismod augue. Vivamus gravida magna vel rhoncus efficitur. Vivamus iaculis eu diam eleifend posuere."
    return(
        <Row className="centered">
            <Col>
                <Panel image={testImage1} isButton={false} />
                <Panel text={lorem} isButton={false} />
                <Panel image={testImage1} isButton={false} />
            </Col>
            <Col>
                <Panel text={lorem} isButton={false} />
                <Panel image={testImage2} isButton={false} />
                <Panel text={lorem} isButton={false} />
            </Col>
        </Row>

    )
}
export default AboutUs;