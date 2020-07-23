import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import axios from 'axios';

const BusinessHours = () => {
  const [content, setContent] = useState("");

  const changeHours = (event) => {
    event.preventDefault();

    content ? axios.post('', {

    })
  }

    return (
        <div>
            <h3>Contact information</h3>
            <div className="editor">
              <CKEditor
                editor={ClassicEditor}
                data={content}
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
    )
}

export default BusinessHours;