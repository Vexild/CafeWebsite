import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'

const DummyPanel =  (props) => {

    const { text, size, isButton, image} = props;

    const [isThisButton, setAsButton] = useState(isButton);
    const [panelSize, setPanelSize] = useState(size);
    // if(isButton){
    //     setAsButton(true);
    // }

    
    return (
        <Col >
            <p>Hobla hobla</p>
        </Col>
    )

}

export default DummyPanel;