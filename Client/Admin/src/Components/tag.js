import React from "react";
import Axios from "axios";
import apiUrl from '../api' 

const Tag = (props) => {

  const deleteTag = () => {
    const body = {
      data: {
      _id: props.data._id
    }
  };

    console.log("BODY", body)

    Axios.delete(apiUrl + "/api/tags/delete/", body)
    .then(response => {
      console.log(response)
      props.remove()
    })
    .catch( err => {
      console.log("Cant delete tag !")
      console.log(err)
    })
  }
  return (
    <div>
      <p>{props.data.name} <button onClick={deleteTag}>Poista</button></p>
    </div>
  )
}

export default Tag;
