import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
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
    //console.log("Params Data: ",params.id, typeof(params.id))
    
    const [quantity, setQuantity] = useState('1');
    const [succcessModal, setSuccessModal] = useState(false)
    

    //console.log("contextData", contextData)
    const product = contextData.find( elem => slugify(elem.name) === params.id)

    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const closeSuccessModal = () => {
        window.location.reload(false);
        setSuccessModal(false)
    }

    const [productsInCart, setProductsInCart] = useState([])
    const getShopingCart = () => {
        const resource = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
        resource ? setProductsInCart(resource) : (
            console.log("ERROR: No localstorage")
        )
    }

    // add a state of array of products. everytime when the state updates, run useEffect to update the localstorage
    // This needs to be then applied to the header to show the shopping cart image (get the local storage, check the length and print corresponding value)


    const addToCart = () => {
        const newProduct = { name: product.name , quantity: quantity , id: product.id}
        try{            
            let dataInStorage = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
            console.log("Data in storage", dataInStorage)
            if(dataInStorage.length > 0){

                dataInStorage.find((elem) => {
                    if(elem.id === newProduct.id){
                    elem.quantity = parseInt(elem.quantity) + parseInt(newProduct.quantity)
                    setProductsInCart(dataInStorage)
                }
                else{
                    setProductsInCart([ ... productsInCart, newProduct])
                }})
            }else{
                setProductsInCart([ ... productsInCart, newProduct])
            }
        }
        catch(e){
            console.log("Error: ",e);
        }
        setSuccessModal(true);
    }

    useEffect(() => {
        getShopingCart()
    },[]);

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(productsInCart))
        console.log("new array set to Storage ", productsInCart);
    }, [productsInCart]);

    try{

        return (
            <div>

        { product ? ( 
            <Col className="main-form form-frame">			
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
            <div>Valitettavasti tuotetta ei löydy valikoimastamme.</div>
            )}
        </div>
    )
    }
    catch(e){
        console.log("ERROR", e)
    }
}

export default SingleProduct;