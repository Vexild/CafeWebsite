import React, {useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "html-react-parser";
import axios from "axios";

const EditAboutus = () => {
  const [value,setValue] = useState("") 
  console.log(value)

  const handleOnChange = (e,editor) => {
    //   console.log(editor.getData());
    const data = editor.getData()
    setValue(data)
  }

   const changeText = (event) => {
     event.preventDefault();

     if (value) {
       axios
         .put('http://localhost:4000/api/aboutus/put', {
           content: value
         })
         .then((response) => {
           console.log(response);
         })
         .catch((error) => console.log(error));
     } else {
       console.log("purizu wuraito samuzing");
     }
 };

  const getAboutUs = () => {
    return axios
      .get(`http://localhost:4000/api/aboutus/get`)
      .then((response) => {
        let parsedBSON;
        parsedBSON = JSON.parse(JSON.stringify(response.data));
        console.log(parsedBSON)
        setValue(parsedBSON[0].content);
        return parsedBSON;
      })
      .catch((error) => console.log(error));
  };
  if (!value) {
      getAboutUs()
  }
if (value) {
    return (
        <div>
            <h1>EDITORI</h1>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange}
                data={value}
            />
            <button onClick={changeText}>Submit</button>
            <div>
                <h3>TEXT:</h3>
                <p>{ReactHtmlParser(value)}</p>
            </div>
        </div>
    )
}
else {
    return(<p>hetkinen</p>)
}
}
export default EditAboutus;
