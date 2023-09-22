import "./navLinks.css"
import { PiInfinityFill, PiSelectionBackgroundFill } from 'react-icons/pi';
import { BiLinkAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom";



const NavLinks = () => {



    return ( 
        <div className="bar1">
            <div>
            <PiInfinityFill color="#623CFF" size={30} />
                <h2>devlinks</h2>
            </div>

            <div className="middle">
            <button className="links"><BiLinkAlt /> <Link to={`/links`}>Links</Link>  </button>
                <button className="details"><CgProfile/> <Link to={`/profile`}>Profile Details</Link>  </button>
               

            </div>
                
              <button className="preview"> <Link to={`/`}>Preview</Link>  </button>
        </div>

     );
}
 
export default NavLinks;