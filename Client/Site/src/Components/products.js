import React, {useState} from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { BrowserRouter as   Router, Route, Link, Switch, useParams, useHistory} from 'react-router-dom'
import slugify from 'react-slugify';

import Modal from 'react-modal';
import signelProduct from './singleProductPage'

import PanelCanvas from './panelCanvas'

export default function Product(props) {
    const [hover, setHover] = useState(false)
    
    //TODO: handleclicki product diviin/kuvaan
    //TODO? Optimisointia https://cloudinary.com/documentation/react_image_manipulation

    //TODO: databaseen joku product-text/desc
    const text = "Norsujen näkyvin ulkoinen tuntomerkki on kärsä, joka on nenän ja ylähuulen pidentymä. Norsun kärsä voi painaa jopa 140 kilogrammaa. Se on herkkä tunto- ja tartuntaelin. Biologien mukaan norsun kärsässä voi olla jopa neljäkymmentä tuhatta erillistä lihasta, joidenkin mukaan jopa lähempänä sataa tuhatta."
	const slugifiedName = slugify(props.data.name)

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
			 transform             : 'translate(-50%, -50%)',
			 position				  : 'absolute'
        }
      };
    
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
        console.log("Open")
    }
    
    const closeModal = () => {
        setIsOpen(false);
        console.log("Closed")
	}

if (props.layout === true) {
	 
	// probably reconstruct products with both using container or none at all
    return(
        <div style={{backgroundColor: hover ? "#D2C6B8" : ""}} className="col-4 justify-content-center" 
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={props.data.key}>
			
				<Link to={"/menu/"+slugifiedName}>
					<Image  style={{position: "relative", opacity: hover ? 40 + '%' : 100 + '%'}} 
					src={require("../Media/kahvi")} fluid roundedCircle/>
				</Link>
				<p style={{color: "white", position: "absolute", top: 25 + '%', marginLeft: 25 + '%'}}>{hover? "Info" : ""}</p>
				<p>{props.data.name} </p> 
				<p>{props.data.price}€</p>


{/* SLUUUUGIIIFYYYY */}
				<Row>
						{hover ? props.data.tags.map(el => {return <Col key={el} md="auto"> {el} </Col> } ) : ""}
				</Row> 

        </div>
    )
}

if (props.layout === false) {
    return(
        <Container  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

            <div onClick={openModal} style={{backgroundColor: hover ? "#D2C6B8" : ""}}>
            <Row>
					<Col>
						<Link to={"/menu/"+slugifiedName}>
							<Image style={{position: "relative", opacity: hover ? 40 + '%' : 100 + '%'}}  
							src={require("../Media/kahvi")} fluid roundedCircle/>
						</Link>
						<p style={{color: "white", position: "absolute", top: 25 + '%', marginLeft: 25 + '%'}}>{hover? "Info" : ""}</p>
					</Col>
					<Col>
						<p style={{backgroundColor : "red"}} >{props.data.name} </p> 
						<Row>
							{props.data.tags.map(el => {return <Col md="auto" key={el} style={{backgroundColor: "black"}}><p style={{backgroundColor: "blue"}}>{el}</p></Col>})}
						</Row>
						<p>{props.data.price}€ </p>
					</Col>
            <Col>
            	{hover? text : ""}
            </Col>
            </Row>
            </div>
				{/* <Modal 
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Product">
						<Button onClick={closeModal} >takaisin</Button>
						<ProductModal name={props} desc={text} image={require("../Media/kahvi")} />
				</Modal> */}

        </Container> 
        )
    }
}