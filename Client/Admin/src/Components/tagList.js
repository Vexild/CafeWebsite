import React, { useState } from "react";
import axios from "axios";
import Tag from './tag';
import NewTag from "./newTag";

const TagList = () => {
  const [tags, setTags] = useState();

  const removeTag = (id) => {
    setTags(
      tags.filter(tag => {
        return tag._id !== id
      })
    )
  }

  const getTags = () => {
    return axios
      .get(`http://localhost:4000/api/tags/get`)
      .then((response) => {
        let parsedBSON;
        parsedBSON = JSON.parse(JSON.stringify(response.data));
        console.log(parsedBSON);
        setTags(parsedBSON);
        return parsedBSON;
      })
      .catch((error) => console.log(error));
  };

  const arrayIntoComponents = () => {
    return tags.map(
      (tag, key) => {
        return <Tag data={tag} key={key} remove={() => removeTag(tag._id)} /> 
      }
    );
  }

  if (!tags) {
    getTags();
    return (
      <div>
        <h3>Tags loading...</h3>
      </div>
    );
  } else {
    return (
        <div>
        <h2>Add a new tag</h2>
        <NewTag />  
        <h2>Tag list</h2>
        {console.log(tags, "hulapaloo")}
        {arrayIntoComponents()}
        </div>
    );
  }
};

export default TagList;
