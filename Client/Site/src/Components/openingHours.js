import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Parser from 'html-react-parser'
import apiUrl from '../api'

const OpeningHours = () => {

    const [hours, setHours] = useState("")

    //TODO get data from database
    const getHours = () => {
        return axios.get(apiUrl + "/api/businesshours/get")
        .then(response => {
            let parsedBSON
            //console.log(response.data)
            parsedBSON = JSON.parse(JSON.stringify(response.data[0].content))
            setHours(parsedBSON)
            
            return response.data
        })
        .catch(error => console.log(error))
    }
    if (!hours) {
        //Get data from db if products is undefined
        getHours()
    }
    let start = "10:30";
    let end = "17:30";
    return(
        <Col className="opening-hours-listing">
            {Parser(hours)}
        </Col>
    )
}
export default OpeningHours;