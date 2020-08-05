import React from 'react'
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

const PanelCanvas =  (props) => {

    
    // const handleClick = (event) => {
    //     props.changeRendering(event.data)
    // }
    const showSite = props.show;

    const data = {
        name: "asd", price: "2", tag: ["juu", "jaa", "joo"]
    }
    return (
        <div>

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
                        <SingleProduct data={data}/>
                     </Container>
                  )}} />
        </div>
        )


    // switch (showSite){
    //     case 'frontpage':
    //         return (
    //             <Container>
    //                 <FrontPage />
    //             </Container>
    //         )
    //     case 'aboutus':
    //         return (
    //             <Container>
    //                 <AboutUs/>
    //             </Container>
    //         )
    //     case 'cateringform':
    //         return(
    //             <Container>
    //             <Row className="centered">
    //                 <CateringForm />
    //             </Row>
    //             </Container>
                
    //         )


    //     case 'menu':
    //         return (
    //             <Container>
    //                 <Row className="centered">
    //                     <Menu/>
    //                 </Row>
    //             </Container>
    //         )
    //     case 'spillage':
    //         return (
    //             <Container>
    //                 <Row className="centered">
    //                     <SpillagePage />
    //                 </Row>
    //             </Container>
    //         )
    //     case 'product':
    //         return (
    //             <Container>
    //                 <Row className="centered">
    //                     <ProductPage target={props.target} />
    //                 </Row>
    //             </Container>
    //         )

    //     default:
    //         return (
    //             <div>
    //                 <p>default</p>
    //             </div>
    //         )
    //     }
    
}

export default PanelCanvas;