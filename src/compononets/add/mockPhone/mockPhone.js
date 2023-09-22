import "./mockPhone.css"
import img2 from "../../../images/WhatsApp Image 2020-09-25 at 12.10.26 PM.jpeg"
import React from 'react';
import { MyContext } from '../../context';
import { useContext } from "react";

const MockPhone = () => {
  const { linkTypes, data, setData } = useContext(MyContext);
    return ( 
<div className="container">

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="auto" fill="none" viewBox="0 0 308 632">
      <defs>
  
        <clipPath id="circleClip">
          <circle cx="180" cy="320" r="50" />
        </clipPath>
      </defs>
      <path stroke="#737373" d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"/>
      <path fill="#fff" stroke="#737373" d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"/>

      
    </svg>

    <div className="content-container">
      <img src={data.img}></img>
      <h4>{data.name}</h4>
      <p>{data.email}</p>
      {
  data.links.map((linkElement) => linkElement.linkType && (
    <div style={{
      backgroundColor: linkTypes[linkElement.linkType]?.bg
    }} key={linkElement.id} className="one-link" >
      {linkTypes[linkElement.linkType]?.icon}
      <p>{linkElement?.linkType}</p>
    </div>
  ))
}
      
    </div>

</div>
        
     );
}
 
export default MockPhone;