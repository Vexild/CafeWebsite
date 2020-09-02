import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'
import DailyDealPanel from './Panels/dailyDealPanel'
import testImage1 from '../Media/cafe_1.jpg'
import testImage2 from '../Media/cafe_2.jpg'
import OpeningHoursComponent from './openingHours';


const FrontPage = () => {

    const [vpWidth, setVpHeight] = useState(window.innerWidth);

    return(
<       div>
            <Row className="centered">
                {vpWidth <=640 ? <OpeningHoursComponent /> : ( void 0)} 
            </Row>
            <Row className="centered">
                <DailyDealPanel />
            </Row>
            <Row className="centered">
                <Col>
                    <Panel image={testImage1} isButton={true} />
                </Col>
                <Col>
                    <Panel image={testImage1} isButton={false} />
                </Col>
            </Row>
            <Row className="centered">
                <Col>
                    <Panel text="Kuville voi liittä kuvaustekstejä"  image={testImage2} isButton={false} />
                </Col>
                <Col>
                    <Panel image={testImage2}  isButton={true} />
                </Col>
        </Row>
    </div>
    )
}
export default FrontPage;