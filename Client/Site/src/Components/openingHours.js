import React from 'react'
import Col from 'react-bootstrap/Col';


const OpeningHours = () => {

//TODO get data from database
    let start = "10:30";
    let end = "17:30";
    return(
        <Col xs="12"> 
            <h5 className="opening-hours-font">Olemme auki:</h5>
            <p className="opening-hours-font">Ma: {start} - {end}</p>
            <p className="opening-hours-font">Ti: {start} - {end}</p>
            <p className="opening-hours-font">Ke: {start} - {end}</p>
            <p className="opening-hours-font">To: {start} - {end}</p>
            <p className="opening-hours-font">Pe: {start} - {end}</p>
            <p className="opening-hours-font">La: {start} - {end}</p>
            <p className="opening-hours-font">Su: {start} - {end}</p>
        </Col>
    )
}
export default OpeningHours;