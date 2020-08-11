import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Menu from './menu'
import AboutUs from './aboutUs'
import FrontPage from './frontpage'
import ProductPage from './singleProductPage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import CateringForm from './cateringForm'
import SpillagePage from './spillagePage'
import SingleProduct from './singleProductPage'
import { ProductsContext } from "./productsContext";
import {scroller} from "react-scroll";
const PanelCanvas =  (props) => {

    const data = useContext(ProductsContext);
    const scrollToElement = () => {
        scroller.scrollTo("content-element", {
          duration: 800,
          smooth: "easeInOutQuad",
        });
      }
    return (
        <div>
            
            <Route  path="/" render={(props) => (
                <div  className="sample-font"> {scrollToElement() }</div>
              )} />

            <Route exact path="/" render={(props) => (
                <Container>
                        <FrontPage />
                    </Container>
            )} />
            <Route exact path="/menu" render={(props) => (
                <Container>
                    <Menu/>
                </Container>
            )} />
            <Route path="/menu/:id" render={(props) => {
                return (
                <Container>
                    <SingleProduct/>
                    </Container>
                )}} />
            <Route path="/aboutus" render={(props) => (
                <Container>
                    <AboutUs/>
                </Container>
                )} />
            <Route path="/order" render={(props) => (
                 <Container>
                    <Row className="centered">
                        <CateringForm />
                    </Row>
                </Container>
                )} />
            <Route path="/spillage" render={(props) => (
                <Container>
                     <Row className="centered">
                         <SpillagePage />
                     </Row>
                 </Container>                
                )} />
        </div>
        )
}

export default PanelCanvas;