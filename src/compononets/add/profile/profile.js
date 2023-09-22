import "./profile.css"
import img2 from "../../../images/WhatsApp Image 2020-09-25 at 12.10.26 PM.jpeg"
import { HiOutlineMail } from 'react-icons/hi';
import React, { useState } from 'react';
import { useContext } from "react";
import { MyContext } from "../../context";

const Profile = () => {

    const { handleNameChange, handleEmailChange,handleImgChange } = useContext(MyContext)


    const [input, setInput] = useState({
        imageSrc : null ,
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // Set the image source to the data URL of the selected file
                setInput((prev) => ({
                    ...prev,
                    imageSrc : e.target.result
                }));
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };


    return (
        <div className="mainContainer ">
            <h1>Profile Details</h1>
            <p>add your details to create a personal touch to your profile </p>

            <div>
                <h1>Image Upload</h1>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {input.imageSrc && (
                    <div className="picContainer">
                        <p className="profile-label">Profile picture</p>
                        <img src={input.imageSrc} alt="Uploaded" />
                        <p className="img-instruction">
                            Image must be below 1024x1024. Use PNG or JPG format.
                        </p>
                    </div>
                )}
            </div>

            <div className="infoContainer">
                <div className="firstContainer">
                    <label>First Name</label>
                    <input
                        type="text"
                        onChange={(e) =>
                            setInput((prev) => ({
                                ...prev,
                                firstName: e.target.value, // Use e.target.value, not e.target.event
                            }))
                        }
                    />
                </div>

                <div className="lastContainer">
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setInput((prev) => ({
                        ...prev,
                        lastName: e.target.value
                    }))} />
                </div>
                <div className="emailContainer">
                    <label>Email</label>
                    <div className="email-container">
                        <i><HiOutlineMail /></i>
                        <input type="text" className="email" onChange={(e) => setInput((prev) => ({
                            ...prev,
                            email: e.target.value
                        }))} />
                    </div>

                </div>

            </div>

            <hr class="solid"></hr>


            <button className="save" onClick={() => {
                handleImgChange(input.imageSrc);
                handleNameChange(input.firstName + " " + input.lastName);
                handleEmailChange(input.email);
                

            }


            }> Save </button>

        </div>


    );
}

export default Profile;