import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import placeholderImage from '../../Media/kahvi'
const SimpleProductCard =  (props) => {

    const {data} = props;
    const [quantity, setQuantity] = useState(data.quantity);


    const updateCart = () => {

    }
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }

    return (
        
        <Row className="product-frame">
            <Col>
                <p className="panel-text dark-font">{data.name}</p>
                <Image className="small-image" src={placeholderImage} roundedCircle />
            </Col>
            <Col>
                <input id="quantity" type="number" className="modal-quantity-picker" name="quantity" min="0" max="99" value={quantity} onChange={handleQuantity} />
                <Button onClick={updateCart}>Update</Button>
            </Col>
        </Row>
    )
}

export default SimpleProductCard;