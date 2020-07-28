import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Panel from './Panels/panel'
import Menu from './menu'
import AboutUs from './aboutUs'
import FrontPage from './frontpage'

import CateringForm from './cateringForm'
import SpillagePage from './spillagePage'

const PanelCanvas =  (props) => {

    const showSite = props.show;
    switch (showSite){
        case 'frontpage':
            return (
                <Container>
                    <FrontPage />
                </Container>
            )
        case 'aboutus':
            return (
                <Container>
                    <AboutUs/>
                </Container>
            )
        case 'cateringform':
            return(
                <Container>
                <Row className="centered">
                    <CateringForm />
                </Row>
                </Container>
                
            )

    
        case 'menu':
            return (
                <Container>
                    <Row className="centered">
                        <Menu />
                    </Row>
                </Container>
            )
        case 'spillage':
            return (
                <Container>
                    <Row className="centered">
                        <SpillagePage />
                    </Row>
                </Container>
            )

        default:
            return (
                <div>
                    <p>default</p>
                </div>
            )
        }
    
}

export default PanelCanvas;