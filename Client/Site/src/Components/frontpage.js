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
    <div>
            <Row className="centered">
                {vpWidth <=640 ? <OpeningHoursComponent /> : ( void 0)} 
            </Row>
            <Row className="centered">
                <DailyDealPanel />
            </Row>
            <Row className="centered">
                <Col>
                    <Panel text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa nunc, tincidunt nec tempor vitae, tempus suscipit enim. Sed leo quam, accumsan at molestie eu, faucibus nec risus. Duis fermentum lacus massa, varius faucibus orci lacinia non." image={testImage1} isButton={true} />
                </Col>
                <Col> 
                    <Panel text="Jaahas juupas juu jepsus" image={testImage1} isButton={false} />
                </Col>
            </Row>
            <Row className="centered">
                <Col>
                    <Panel text="Kuville voi liittä kuvaustekstejä"  image={testImage2} isButton={false} />
                </Col>
                <Col>
                    <Panel text="Jaahas juupas juu jepsus" image={testImage2}  isButton={true} />
                </Col>
        </Row>
    </div>
    )
}
export default FrontPage;