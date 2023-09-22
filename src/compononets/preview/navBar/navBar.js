import './navBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
<div className='bar0'>
     
<button className='back'><Link to={`/editor`}>Back to editor</Link></button>
<button className='share'>share link </button>
        

</div>
     );
}
 
export default NavBar;
