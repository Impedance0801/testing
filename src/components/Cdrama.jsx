import React from 'react';
import { CdramaData } from "../Homepagedata/cdrama";
import './C.css';

export default function Cdrama() {
  return (
    <div className="w-full">
      <div className="Catogry mb-4">C Drama</div>
      <div className="hello">
        {CdramaData.map((elem, index) => (
          <div key={index} className="">
            <img
              className="image "
              src={elem.image}
              alt={`${elem.title} Image`}
            />
            <div className="title">{elem.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
