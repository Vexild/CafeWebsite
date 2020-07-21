import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// import testImage from '../../Icons/map_image.PNG' 


const Panel =  (props) => {

    const { text, size, isButton, image} = props;
    const [isThisButton, setAsButton] = useState(isButton);
    const [panelSize, setPanelSize] = useState(size);
    console.log("In panel props ",image)
    console.log("In panel test image",props)
    const test = () =>{
        console.log("Toimii")
    }
    return (
        
        <Row className="panel-button">
        
        {isThisButton ? ( 
            <div >
                <Image src={image} fluid  onClick={(e) => test()} rounded />
                <p>{text}</p>
            </div>
        ) : (
            <div >
                <Image src={image} fluid rounded />
                <p className="panel-text">{text}</p>
                
            </div>
        )}
        </Row>
    )
}

export default Panel;