import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'
import axios from 'axios'
import testImage1 from '../Media/cafe_1.jpg'
import testImage2 from '../Media/cafe_2.jpg'
import apiUrl from '../api'


const AboutUs = () => {

    const [value, setValue] = useState("")

    const getTxt = () => {
        return axios.get(apiUrl + "/api/aboutus/get")
        .then(response => {
            let parsedBSON
            parsedBSON = JSON.parse(JSON.stringify(response.data[0]))
            setValue(parsedBSON)
            
            return response.data
        })
        .catch(error => console.log(error))
    }
    if (!value) {
        //Get data from db if products is undefined
        getTxt()
    }
    console.log(value);
    return(
        <Row className="centered">
            <Col>
                <Panel image={testImage1} isButton={false} />
                <Panel className="dark-font" text={value.content} isButton={false} />
                <Panel image={testImage1} isButton={false} />
            </Col>
            <Col>
                <Panel text={value.content2} isButton={false} />
                <Panel image={testImage2} isButton={false} />
                <Panel text={value.content3} isButton={false} />
            </Col>
        </Row>

    )
}
export default AboutUs;