import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Panel =  (props) => {

    const { text, size, isButton, image} = props;
    const [isThisButton, setAsButton] = useState(isButton);
    const [panelSize, setPanelSize] = useState(size);
    const test = () =>{
        console.log("clicked")
    }
    return (
        
        <Row className="panel-button">
        
        {isThisButton ? ( 
            <div >
                <Image src={image} fluid  onClick={(e) => test()} rounded />
                <p className="panel-text dark-font">{text}</p>
            </div>
        ) : (
            <div >
                <Image src={image} fluid rounded />
                <p className="panel-text dark-font">{text}</p>
                
            </div>
        )}
        </Row>
    )
}

export default Panel;