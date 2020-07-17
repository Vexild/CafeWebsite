import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Menu from './menu'
import AboutUs from './aboutUs'
import FrontPage from './frontpage'

// const testImage = "../Icons/fb_icon_color.png'

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
        case 'menu':
            return (
                <Container>
                    <Row className="centered">
                        <Menu />
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