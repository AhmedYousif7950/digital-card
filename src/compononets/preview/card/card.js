import "./card.css"
import { MyContext } from '../../context';
import { useContext } from "react";



const Card = () => {

   

    const { linkTypes,data, setData } = useContext(MyContext);

    return ( 
<div className="card">

<img src={data.img} ></img>
<h2>{data.name}</h2>
<p>{data.email}</p>
<div className="buttonsContainer">
{
  data.links.map((linkElement) => linkElement.linkType && (
    <div
    
    style={{
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
 
export default Card;