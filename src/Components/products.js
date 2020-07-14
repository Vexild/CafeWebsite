import React, {useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Product(props) {
    const [hover, setHover] = useState(false)

   // Jos tarvit esikatseluun täytettä niin droppaa mongosta cafedb ja käynnistä rojekti uusiksi
   // Dummyssä tarpeeksi asiaa 
    
    //TODO: databaseen joku product-text/desc
    //TODO: handleclicki product diviin/kuvaan
    //TODO: Placeholder? https://cloudinary.com/documentation/react_image_manipulation
    
    
    const text = "Norsujen näkyvin ulkoinen tuntomerkki on kärsä, joka on nenän ja ylähuulen pidentymä. Norsun kärsä voi painaa jopa 140 kilogrammaa. Se on herkkä tunto- ja tartuntaelin. Biologien mukaan norsun kärsässä voi olla jopa neljäkymmentä tuhatta erillistä lihasta, joidenkin mukaan jopa lähempänä sataa tuhatta."
if (props.layout === true) {
    
    return(
        <div style={{backgroundColor: hover ? "#D2C6B8" : ""}} className="col-4 justify-content-center" 
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={props.data.key}>
            
        <Image style={{position: "relative", opacity: hover ? 40 + '%' : 100 + '%'}} 
        src={require("../Media/kahvi")} fluid roundedCircle/>

        <p style={{color: "white", position: "absolute", top: 25 + '%', marginLeft: 25 + '%'}}>{hover? "Info" : ""}</p>
        <p>{props.data.name} </p> 
        <p>  {props.data.price}€</p>

        <Row>
        {hover ? props.data.tags.map(el => {return <Col key={el} md="auto"> {el} </Col> } ) : ""}
        </Row> 
        </div>
    )
}

if (props.layout === false) {
    return(
        <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{backgroundColor: hover ? "#D2C6B8" : ""}}>
        <Row>
        <Col>

        <Image style={{position: "relative", opacity: hover ? 40 + '%' : 100 + '%'}}  
        src={require("../Media/kahvi")} fluid roundedCircle/>
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
        </Container> 
        )
    }
}