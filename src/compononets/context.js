import { createContext, useContext, useState } from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


export const MyContext = createContext();

export default function MyContextProvider({ children }) {

  const linkTypes=  {
    "Facebook": {
      bg: "#129AF7",
      icon: <AiFillFacebook />,
    },

"Twitter": {
  bg: "#1D9BF0",
    icon: <AiFillTwitterCircle />,
},
"Instagram": {
  bg: "#9D3E99",
    icon: <AiFillInstagram />,
},
"Youtube": {
  bg: "#FF0000",
    icon: <AiFillYoutube />,
},
"Github": {
  bg: "#000000",
    icon: <AiFillGithub />,
},

  }

const [data, setData] = useState({
  img: null,
  name: "",
  email: "",
  links: [],

});

const handleNameChange = (newName) => {
  setData((prevData) => ({
    ...prevData,
    name: newName,
  }));
};

const handleEmailChange = (newEmail) => {
  setData((prevData) => ({
    ...prevData,
    email: newEmail,
  }));
};

const handleImgChange = (newImg) => {
  setData((prevData) => ({
    ...prevData,
    img: newImg,
  }));
};

const addLink = (newLink) => {
  setData((prevData) => ({
    ...prevData,
    links: [newLink, ...prevData.links],
  }));
};

const addLinks = (newLinks) => {
  setData((prevData) => ({
    ...prevData,
    links: [...newLinks],
  }));
};

const removeLink = (id) => {
  setData(prevData => {
    const removedIndex = prevData.links.findIndex((link) => link.id == id)
    const newData = [...prevData.links]
    newData.splice(removedIndex, 1)
    return {
      ...prevData,
      links: newData,
    }
  })
};


const updateLink = (id, linkType, url) => {
  setData(prevData => {
    const editedIndex = prevData.links.findIndex((link) => link.id == id)
    const newData = [...prevData.links]
    newData[editedIndex] = {
      id,
      linkType,
      url,
    }
    return {
      ...prevData,
      links: newData,
    }
  })
};





return (
  <MyContext.Provider value={{ data, setData, handleNameChange, handleEmailChange, handleImgChange, addLink, addLinks, removeLink, updateLink , linkTypes }}>
    {children}
  </MyContext.Provider>
);
}



