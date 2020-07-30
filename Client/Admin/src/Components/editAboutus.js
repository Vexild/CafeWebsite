import React, {useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "html-react-parser";


const EditAboutus = () => {
  const [value,setvalue] = useState("") 

  const handleOnChange = (e,editor) => {
    //   console.log(editor.getData());
    const data = editor.getData()
    setvalue(data)
  }
    return (
        <div>
            <h1>EDITORI</h1>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange}
            />
            <div>
                {ReactHtmlParser(value)}
            </div>
        </div>
    )
};

export default EditAboutus;