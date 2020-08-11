import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Link, Switch, useParams, useHistory} from 'react-router-dom'
import { ProductsContext } from "./productsContext";
import slugify from 'react-slugify';
import { OrderContext } from './orderContext'


const SingleProduct =  () => {

    const successModalStyle = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
			 transform             : 'translate(-50%, -50%)',
             position				  : 'absolute'
        },
        overlay: {zIndex: 1000}
      };
    

    const history = useHistory();
    const contextData = useContext(ProductsContext);
    const params = useParams();
    console.log("Params Data: ",params.id, typeof(params.id))
    
    const [quantity, setQuantity] = useState('1');
    const [succcessModal, setSuccessModal] = useState(false)
    

    console.log("contextData", contextData)
    const product = contextData.find( elem => slugify(elem.name) === params.id)
    // const product = contextData.map( elem =>{
    //     console.log(elem.name);
    // })
    console.log("product", product)
    // const description = product.desc;
    // const productImage = product.image;

    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const addToCart = () => {
        setSuccessModal(true);
        console.log("Added ", quantity, " to cart");
    }
    const closeSuccessModal = () => {
        setSuccessModal(false)
    }
   
    try{

        return (
            <div>

        { product ? ( 
            <Col className="modal-view" >			
            <Link to={"/menu"}>Return</Link>

            <Row>
                <Col>
                    <Row className="centered">
                        {product.name}
                    </Row>
                    <Row className="centered">
                        <Image src={product.productImage} />
                    </Row>
                    <Row className="centered">
                        {product.tags}
                    </Row>
                </Col>
                <Col>
                    <p className="dark-font">{product.description}</p>
                    <p className="dark-font">{product.price}</p>
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
                    <p className="dark-font">{product.description}</p>
                </Col>
            </Row>
             <Modal 
                isOpen={succcessModal}
                onRequestClose={closeSuccessModal}
                style={successModalStyle}
                contentLabel="Product">
                <h3>Tuotteet lisätty koriin!</h3>
                <Button onClick={closeSuccessModal} >OK</Button>                    
            </Modal>
        </Col>
        ): ( 
            <div>Valitettavasti tuotetta ei löydy valikoimastamme.as</div>
            )}
        </div>
    )
    }
    catch(e){
        console.log("ERROR", e)
    }
}

export default SingleProduct;