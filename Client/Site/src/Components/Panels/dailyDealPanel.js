import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
const DailyDealPanel =  () => {

    // Check from database the needed data for daily deal and GET it.
    const dummyData = {
        "_id": "5f0c4025219f474f29b7b8ca",
        "name": "dailydeal",
        "content": "Tänään Espresso ja pulla yhteishintaan 4€!",
        "__v": 0
      }
    
    const content = dummyData.content;

    if ( content === ''){
        return(
            <Col>
            </Col>
        )
    }
    else {   
        return (
            <Col className="chalboard-placeholder deal-panel">
                <h4>Daily Deal</h4>
                <p>{content}</p>
            </Col>
        )
    }
}

export default DailyDealPanel;