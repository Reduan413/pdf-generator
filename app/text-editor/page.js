"use client"
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function PdfView() {
    const [value, setValue] = useState('');
    console.log("value", value)
    const modules = {
        toolbar: [
            [{ 'header': [1, 2,3,4,5,6, false] },'font','size'],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats =[
        'font','size',
        'bold','italic','underline','strike',
        'color','background',
        'script',
        'header','blockquote','code-block',
        'indent','list',
        'direction','align',
        'link','image','video','formula',
      ]
    return (
        <>
            <ReactQuill theme="snow" value={value} onChange={setValue}  modules={modules} formats={formats}/>
        </>
    )
}