import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './panel'
import testImage1 from '../Media/cafe_1.jpg'
import testImage2 from '../Media/cafe_2.jpg'

const AboutUs = () => {

    const lorem = "Kun Muumipeikko, Pikku Myy Ja Muumipappa esiintyy. Silloin laulut kutsukoon, Tuijottelutuokioon. Käy muumilaaksoon. Muumitalon asukkaat Seuraksesi kohta saat. Pääset mukaan viidakkoon, Taikapilvi karkeloon."

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