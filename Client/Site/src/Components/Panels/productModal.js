import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Modal from 'react-modal';

const ProductModal =  (props) => {

    const successModalStyle = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    
    const { name, price, tags } = props.name.data;
    const description = props.desc;
    const productImage = props.image;

    const [quantity, setQuantity] = useState('1');
    const [successModal, setSuccesModal] = useState(false);

    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const addToCart = () => {
        openSuccessModal(true);
        console.log("Added ", quantity, " to cart");
    }

    const openSuccessModal = () => {
        setSuccesModal(true);
    }

    const closeSuccessModal = () => {
        setSuccesModal(false);
    }

    return (
        <Col className="modal-view" >
            <Row>
                <Col>
                    <Row className="centered">
                        {name}
                    </Row>
                    <Row className="centered">
                        <Image src={productImage} />
                    </Row>
                    <Row className="centered">
                        {tags}
                    </Row>
                </Col>
                <Col>
                    <p className="dark-font">{description}</p>
                    <p className="dark-font">{price}</p>
                    <label htmlFor="quantity" >Valitse määrä:</label>
                    <input id="quantity" type="number" className="modal-quantity-picker" name="quantity" min="1" max="99" value={quantity} onChange={handleQuantity} />
                    <Button onClick={addToCart}>Lisää koriin</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="dark-font">Tiedot</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="dark-font">{description}</p>
                </Col>
            </Row>
            <Modal 
                isOpen={successModal}
                onRequestClose={closeSuccessModal}
                style={successModalStyle}
                contentLabel="Product">
                    <h3>Tuotteet lisätty koriin!</h3>
                    <Button onClick={closeSuccessModal} >OK</Button>                    
                </Modal>
        </Col>
    )
}

export default ProductModal;