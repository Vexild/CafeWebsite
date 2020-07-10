import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Product(props) {
    const [hover, setHover] = useState(false)

    const text = "Norsujen näkyvin ulkoinen tuntomerkki on kärsä, joka on nenän ja ylähuulen pidentymä. Norsun kärsä voi painaa jopa 140 kilogrammaa. Se on herkkä tunto- ja tartuntaelin. Biologien mukaan norsun kärsässä voi olla jopa neljäkymmentä tuhatta erillistä lihasta, joidenkin mukaan jopa lähempänä sataa tuhatta."
    //console.log(props.data)

    /*
    const tags = () => {
        props.data.map(element => {
        })
    }
    */

if (props.layout === true) {
    return(
        <div className="col-3" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={props.data.key}>
        <img src={require("./img/kahvi")} />
        <p>{props.data.name} {props.data.price} €</p>
        <p>{hover ? "Kissa ": "Koira" } </p>
        </div>
    )
}
if (props.layout === false) {
    return(
        <Container 
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Row>
        <Col>
        <img src={require("./img/kahvi")} />
        </Col>
        <Col>
        <p style={{backgroundColor : "red"}} >{props.data.name} </p> 
        <Row>
        {props.data.tags.map(el => {return <Col key={el} style={{backgroundColor: "black"}}>{el}</Col>})}
        </Row>
        <p>{props.data.price}€ </p>
        </Col>
        <Col>
        {hover? text : ""}
        </Col>
        </Row>
        </Container> 
        )
    }
}