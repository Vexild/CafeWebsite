import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import placeholderImage from '../../Media/kahvi'
const SimpleProductCard =  (props) => {

    const {data, allData} = props;
    const [quantity, setQuantity] = useState();


    useEffect(() => {
        setQuantity(data.quantity)
    },[]);

    const updateCart = () => {
        console.log("Alldata", allData);
        // TODO: sends a new object to localstorage IF quantity is 0
        // TODO: sends a new object to localstorage without products that have quantity of 0
    }
    const handleQuantity = (event) => {
        setQuantity(event.target.value)

        console.log("Quantity changed", quantity, event.target.value);
        // if(event.target.value <= 0){
        //     console.log("Deleting item");
        //     // data.quantity = event.target.value;
        //     data.quantity = event.target.value;
        //     let storageData = JSON.parse(localStorage.getItem('shoppingCart'));
        //     storageData.map((elem, index) => {
        //         if(elem.name === data.name) {
        //             console.log("Match");
        //             // set quantity to 0 
        //             storageData.splice(index, 1)
        //             // setItem to localStorage
        //             localStorage.clear()
        //             localStorage.setItem('shoppingCart', JSON.stringify(storageData))
        //             // reload page
        //             window.location.reload(false);

        //         }
        //     })
        //     console.log(storageData, typeof(storageData))         
        // }else{
            console.log("incrementin quantity of product")
            let storageData = JSON.parse(localStorage.getItem('shoppingCart'));
            storageData.map((elem, index) => {
                if(elem.name === data.name) {
                    console.log("Match");
                    // set quantity to 0 
                    console.log("storage before",storageData[index], typeof(quantity))
                    storageData[index].quantity = parseInt(event.target.value)
                    console.log("storage before",storageData[index])
                    //storageData.splice(index, 1)
                    // setItem to localStorage
                    localStorage.clear()
                    localStorage.setItem('shoppingCart', JSON.stringify(storageData))
                    // reload page
                    //window.location.reload(false);

                }
            })
        //}
    }

    const deleteProduct = (event) => {
        console.log("Deleting item");
            // data.quantity = event.target.value;
            //data.quantity = event.target.value;
            let storageData = JSON.parse(localStorage.getItem('shoppingCart'));
            storageData.map((elem, index) => {
                if(elem.name === data.name) {
                    console.log("Match");
                    // set quantity to 0 
                    storageData.splice(index, 1)
                    // setItem to localStorage
                    localStorage.clear()
                    localStorage.setItem('shoppingCart', JSON.stringify(storageData))
                    // reload page
                    window.location.reload(false);
                }
            })
    }

    return (
        
        <Row className="product-frame">
            <Col>
                <p className="panel-text dark-font">{data.name}</p>
                <Image className="small-image" src={placeholderImage} roundedCircle />
            </Col>
            <Col>
                <input id="quantity" type="number" className="modal-quantity-picker" name="quantity" min="0" max="99" value={quantity} onChange={handleQuantity} />
                <Button onClick={deleteProduct}>Remove</Button>
            </Col>
        </Row>
    )
}

export default SimpleProductCard;