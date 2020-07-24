import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Parser from 'html-react-parser'

const OpeningHours = () => {

    const [hours, setHours] = useState("")

    //TODO get data from database
    const getHours = () => {
        return axios.get(`http://localhost:4000/api/businesshours/get`)
        .then(response => {
            let parsedBSON
            console.log(response.data)
            parsedBSON = JSON.parse(JSON.stringify(response.data[0].content))
            setHours(parsedBSON)
            
            console.log("getProducts",parsedBSON)
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
        <Col>
            <h5 className="opening-hours-font">Olemme auki:</h5>
            <p className="opening-hours-font"> {Parser(hours)} </p>
            {/* <h5 className="opening-hours-font">Olemme auki:</h5>
            <p className="opening-hours-font">Ma: {start} - {end}</p>
            <p className="opening-hours-font">Ti: {start} - {end}</p>
            <p className="opening-hours-font">Ke: {start} - {end}</p>
            <p className="opening-hours-font">To: {start} - {end}</p>
            <p className="opening-hours-font">Pe: {start} - {end}</p>
            <p className="opening-hours-font">La: {start} - {end}</p>
            <p className="opening-hours-font">Su: {start} - {end}</p> */}
        </Col>
    )
}
export default OpeningHours;