import React from 'react'

export default function Tags(props) {

    return(
        <div>
            <label>{props.data}</label>
            <input type="Checkbox" onClick={() => props.handleClick(props.data)}/> 
        </div>
    )

    }