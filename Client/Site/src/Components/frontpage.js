import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './panel'
import testImage1 from '../Media/cafe_1.jpg'
import testImage2 from '../Media/cafe_2.jpg'
import testImage from '../Media/cafe_3.jpg'

const AboutUs = () => {
    
    return(
<       div>
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
                    <Panel text="Example text"  image={testImage2} isButton={false} />
                </Col>
                <Col>
                    <Panel image={testImage2}  isButton={true} />
                </Col>
        </Row>
    </div>
    )
}
export default AboutUs;