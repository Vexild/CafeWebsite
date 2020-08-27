import React from "react";
import Axios from "axios";

const Tag = (props) => {

  const deleteTag = () => {
    const body = {
      _id: props.data._id
    };

    console.log("BODY", body)

    Axios.delete('http://localhost:4000/api/tags/delete/', body)
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