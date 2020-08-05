import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ReactHtmlParser from 'html-react-parser'

const EditAboutustxt = () => {

    const [value, setValue] = useState("")

    const getTxt = () => {
        return axios.get(`http://localhost:4000/api/aboutus/get`)
        .then(response => {
            let parsedBSON
            //console.log(response.data)
            parsedBSON = JSON.parse(JSON.stringify(response.data[0].content))
            setValue(parsedBSON)
            
            return response.data
        })
        .catch(error => console.log(error))
    }
    if (!value) {
        //Get data from db if products is undefined
        getTxt()
    }
    return(
        <Col>
            {ReactHtmlParser(value)}
        </Col>
    )
}
export default EditAboutustxt;