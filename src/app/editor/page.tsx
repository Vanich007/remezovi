"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";
import { Quill } from "react-quill";
Quill.register("modules/imageUploader", ImageUploader);

const fullToolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic"],
    ["clean"],
    ["image"]
];



const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    // clipboard: {
    //     // toggle to add extra line breaks when pasting HTML:
    //     matchVisual: false,
    // },
    imageUploader: {
        upload: (file: any) => {
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("file", file);

                fetch(
                    "http://localhost:5000/upload/",
                    {
                        method: "POST",
                        body: formData
                    }
                )
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result.url);
                        resolve(result.url);
                    })
                    .catch((error) => {
                        reject("Upload failed");
                        console.error("Error:", error);
                    });
            });
        }
    }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]
const YourComponent = () => {
    const [value, setValue] = useState("");
    const ReactQuill = useMemo(()=>dynamic(() => import('react-quill'), { ssr: false }),[])



    return (
        <div>

            <ReactQuill modules={modules} formats={formats} theme="snow" value={value} onChange={setValue} />{value}
        </div>
    );
};
export default YourComponent;