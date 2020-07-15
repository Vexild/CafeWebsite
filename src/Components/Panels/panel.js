import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import testImage from '../../Icons/map_image.PNG' 


const Panel =  (props) => {

    const { text, size, isButton, image} = props;

    const [isThisButton, setAsButton] = useState(isButton);
    const [panelSize, setPanelSize] = useState(size);
    // if(isButton){
    //     setAsButton(true);
    // }

    const test = () =>{
        console.log("Toimii",image)
    }
    return (
        
        <div className="panel-button">
        
        {isThisButton ? ( 
            
                // <Col className="panel-button" style={{ backgroundImage: 'url('+ testImage+')'}}  onClick={(e) => test()} >
                <Col >
                    <Image src={testImage} fluid />
                    
                    <p className="panel-text">{text}</p>
                </Col>

        ) : (
            <div>
                <Col >
                    <p>{text}</p>
                </Col>
                <Col>
                </Col>
            </div>
        )}
        </div>
    )

}

export default Panel;