import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import axios from 'axios'
import { ProductsContext } from './Components/productsContext'
// import { OrderContext } from './Components/orderContext'


function App() {
  
  const [products, setProducts] = useState([])
  const [shopingCart, setShopingCart] = useState([])

  // GET PRODUCT FROM DB

  const getProducts = () => {
    return axios.get(`http://localhost:4000/api/products/get`)
    .then(response => {
      let parsedBSON
      //console.log(response.data)
      parsedBSON = JSON.parse(JSON.stringify(response.data))
      setProducts(parsedBSON)
      return response.data
      })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    if (products.length === 0) {
      console.log("getProducts")
      getProducts()
      //getShopingCart()
    }
  },[]);
  
  //console.log("PROD", products)

  return (
    <ProductsContext.Provider value={products}>
    <Router>
      <Container fluid>
        <Row>

          <CommonHeader/>
        
          <div className="nav-line">
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/">Etusivu</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/menu">Menu</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/aboutus">Meistä</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/order">Tilaus</Link>
              </Col>
              <Col xs="1" className="inline-block">
              <Link className="nav-font" to="/spillage">Hävikki</Link>
              </Col>
              

          </div>
        </Row>

        <Row name="content-element" className="main-frame" >
           <PanelCanvas/>
        </Row>
    
        <Row name="footer-map-element" fluid>
          <CommonFooter/>
        </Row>
      
      </Container>
  </Router>
  </ProductsContext.Provider>

  )
}

export default App;
