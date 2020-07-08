import React, {useState} from "react";

export default function Product(props) {
//    console.log(props)
//TODO: grid ? grid : list..
    return(
        <div key={props.data.key}>
        <p>{props.data.name}</p>
        <p>{props.data.price} €</p>
        </div>
    )
}