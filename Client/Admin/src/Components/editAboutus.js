import React, {useState, useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "html-react-parser";
import axios from "axios";
import ImageUploading from "react-images-uploading";

const EditAboutus = () => {
  const [value1,setValue1] = useState("") 
  const [value2,setValue2] = useState("") 
  const [value3,setValue3] = useState("") 

  const handleOnChange1 = (e,editor) => {
    const data = editor.getData()
    setValue1(data)
  }

  const handleOnChange2 = (e,editor) => {
    const data = editor.getData()
    setValue2(data)
  }

  const handleOnChange3 = (e,editor) => {
    const data = editor.getData()
    setValue3(data)
  }

   const changeText = (event) => {
     event.preventDefault();

       axios
         .put(apiUrl + "/api/aboutus/put", {
           content: value1, content2: value2, content3: value3
         })
         .then((response) => {
           console.log(response);
         })
         .catch((error) => console.log(error));
 };

  const getAboutUs = () => {
    return axios
      .get(apiUrl + "/api/aboutus/get")
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

  useEffect(() => {
    getAboutUs()
  },[]);

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
                {ReactHtmlParser(value1)}
                {ReactHtmlParser(value2)}
                {ReactHtmlParser(value3)}
            </div>
        </div>
    )
}
export default EditAboutus;
