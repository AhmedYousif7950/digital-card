import React, { useState, useContext } from "react";
import "./addLinks.css";
import { FiLink } from "react-icons/fi";
import { MyContext } from "../../context";

const AddLinks = () => {
  const { data, setData, addLinks } = useContext(MyContext);
  const [linkContainers, setLinkContainers] = useState([]);
  

  const isLinkValid = (links) => {
    let result = true ;
    linkContainers.map((link)=> {
      if (!link.url || !link.linkType) result = false ;
    })
    return result ;

  }

  const addLinkContainer = () => {
    setLinkContainers([ { id:linkContainers.length+1,linkType: "", url: "" },...linkContainers]);
  };
  
  const removeLinkContainer = (indexToRemove) => {
    const updatedLinkContainers = linkContainers.filter((_, index) => index !== indexToRemove);
    setLinkContainers(updatedLinkContainers);
  };
  

const handleSave = () => {
 
  if (linkContainers.length === 0) {
    return; 
  }
if(isLinkValid(linkContainers)) addLinks(linkContainers)
}

  

  return (
    <div className="mainContainer ">
      <h1>Customize your links</h1>
      <p>Add/edit/remove links below and then share all your profiles with the world!</p>
      <button className="add-link" onClick={addLinkContainer}>
        + Add new link
      </button>

      <div className="scrolling">
        {linkContainers.map((linkContainer, index) => (
          <div className="link-container" key={index}>
            <div className="container-header">
              <label>= Link </label>
              <button className="remove" onClick={() => removeLinkContainer(index)}>
                Remove
              </button>
            </div>
            <label>Platform</label>
            
            <select value={linkContainer.linkType} onChange={(e) => setLinkContainers(
              (prev)=> {
              const newData = [...prev]
              const index = newData.findIndex((container)=> container.id == linkContainer.id)
              newData[index] = {
                ...newData[index], 
                linkType: e.target.value
              }
              return newData
            })}>

              <option value="">Select Platform</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Github">Github</option>
            </select>
            <label> Link </label>

            <div className="link-input">
              <i>
                <FiLink />
              </i>
              <input
                type="text"
                className="email"
                value={linkContainer.url}
                onChange={(e) => setLinkContainers((prev)=> {
                  const newData = [...prev]
                  const index = newData.findIndex((container)=> container.id == linkContainer.id)
                  newData[index] = {
                    ...newData[index], 
                    url: e.target.value
                  }
  
                  return newData
                })}/>
            </div>
          </div>
        ))}
      </div>

      <hr className="solid"></hr>

      <button className="save" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AddLinks;
