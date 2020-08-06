import React, {useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "html-react-parser";
import axios from "axios";

const EditAboutus = () => {
  const [value1,setValue1] = useState("") 
  const [value2,setValue2] = useState("") 
  const [value3,setValue3] = useState("") 

  const handleOnChange1 = (e,editor) => {
    //   console.log(editor.getData());
    const data = editor.getData()
    setValue1(data)
  }

  const handleOnChange2 = (e,editor) => {
    //   console.log(editor.getData());
    const data = editor.getData()
    setValue2(data)
  }

  const handleOnChange3 = (e,editor) => {
    //   console.log(editor.getData());
    const data = editor.getData()
    setValue3(data)
  }

   const changeText = (event) => {
     event.preventDefault();

     if (value1 || value2 || value3) {
       axios
         .put('http://localhost:4000/api/aboutus/put', {
           content: "juu", content2:"joo", content3:"jaa"
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
        setValue1(parsedBSON[0].content);
        setValue2(parsedBSON[0].content2);
        setValue3(parsedBSON[0].content3);
        return parsedBSON;
      })
      .catch((error) => console.log(error));
  };
  if (!value1 || value2 || value3) {
      getAboutUs()
  }
if (value1 || value2 || value3) {
    return (
        <div>
            <h1>EDITORI</h1>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange1}
                data={value1}
            />

            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange2}
                data={value2}
            />

            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange3}
                data={value3}
            />

            <button onClick={changeText}>Submit</button>
            <div>
                <h3>TEXT:</h3>
                <p>{ReactHtmlParser(value1)}</p>
            </div>
        </div>
    )
}
else {
    return(<p>hetkinen</p>)
}
}
export default EditAboutus;
