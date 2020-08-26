import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import apiUrl from '../../api.js'

const DailyDealPanel =  () => {
    console.log("apiUrl: ", apiUrl)
    console.log(process.env)

    const [data, setData] = useState()
    const getData= () => {
        axios.get(apiUrl + "/api/dailydeals/get")
        .then(response => {
            console.log(response.data)
            if (response.data[0].content) {
                setData(response.data)
            }
        })
        .catch(e => console.log(e))
    }
    if (!data) {
        getData()
    }
    
    if (data) {
        
        return (
            <Col className="chalboard-placeholder deal-panel">
                <h4>Daily Deal</h4>
                <p>{data[0].content}</p>
            </Col>
        )
    }
    else {   
        return(
            <>
            </>
        )
        
    }
}

export default DailyDealPanel;