import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import testImage from '../../Icons/fb_icon_color.png' 


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
        
        <div>
        
        {isThisButton ? ( 
            
            <div className="panel-button" >
                <Button onClick={(e) => test()} >
                    <Col >
                        <Image src={testImage} onClick={(e) => test()}/>
                        <p>{text}</p>
                    </Col>
                    <Col>
                    </Col>
                </Button>
            </div>
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