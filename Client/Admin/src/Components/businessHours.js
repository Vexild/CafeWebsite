import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import axios from "axios";

const BusinessHours = () => {
  const [content, setContent] = useState("");
  const [hours, setHours] = useState();

  const changeHours = (event) => {
    event.preventDefault();

    if (content) {
      axios
        .put('http://localhost:4000/api/businesshours/put', {
          content: content
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("purizu wuraito samuzing");
    }
  };

  const getHours = () => {
    return axios
      .get(`http://localhost:4000/api/businesshours/get`)
      .then((response) => {
        let parsedBSON;
        parsedBSON = JSON.parse(JSON.stringify(response.data));
        setHours(parsedBSON);
        return parsedBSON;
      })
      .catch((error) => console.log(error));
  };

  if (!hours) {
    getHours();
    return (
      <div>
        <h3>BusinessHours loading..</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Contact information</h3>
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={hours}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
          <button onClick={changeHours}>Submit changes</button>
        </div>
        <div>
          <h4>Content</h4>
          <p>{parse(content)}</p>
        </div>
      </div>
    );
  }
};

export default BusinessHours;
