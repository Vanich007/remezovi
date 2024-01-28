"use client";
import { useState, useMemo } from "react";





const MOCK={id: 1, text: '<p><img src="http://localhost:5000/1706295606931-photo_5442929174693138786_y.jpg"></p><h1>Привет!</h1><p>Ронаент</p><p><img src="http://localhost:5000/1706364450240-photo_5442929174693138691_x.jpg"></p>'}
const Viewer = () => {
    const [value, setValue] = useState("");


    return (
        <div dangerouslySetInnerHTML={{__html: MOCK.text}}>


        </div>
    );
};
export default Viewer;