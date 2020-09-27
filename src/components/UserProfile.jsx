
import React, { useState } from 'react';
import Logo from '../img/avatar2.png';
import { updateProfile } from '../actions/aProfile';
import ListReviews from './ListReviews';
import { connect } from 'react-redux';
import { logInUser } from '../actions/aActiveUser';
import { Redirect } from 'react-router-dom';

import '../css/UserProfile.css';






const UserProfile = (props) => {

    let thisUser = {};

    for (const element of props.users) {
        if (element.username === props.activeUser.username)
            thisUser = { ...element };
    }

    let [username, setUserName] = useState(thisUser.username);
    let [email, setEmail] = useState(thisUser.email);
    let [password, setPassword] = useState(thisUser.password);
    let [bio, setBio] = useState(thisUser.bio);
    let fileUrl = "";


    const handleSubmit = event => {
        event.preventDefault();

        let isValidUsername = true;

        const usrPEmail = document.querySelector("#user-email").value;
        const usrPUsername = document.querySelector("#username-input").value;
        const usrPPassword = document.querySelector("#user-Password").value;
        const usrPBio = document.querySelector("#userBio").value;

        for (const user of props.users) {
            if (user.username === usrPUsername) isValidUsername = false;
        }

        if (isValidUsername) {

            props.dispatch(updateProfile(props.activeUser.username, usrPUsername, usrPEmail, usrPPassword, usrPBio, fileUrl));
            props.dispatch(logInUser(usrPUsername));
            alert("Changes to profile were saved.");
            toggleEdit();

        }
        else alert("This username is already taken. Please use different username.");



    }

    const toggleEdit = () => {


        const emailInput = document.querySelector("#user-email");
        const usernameInput = document.querySelector("#username-input");
        const passwordInput = document.querySelector("#user-Password");
        const bioInput = document.querySelector("#userBio");
        const fileInput = document.querySelector("#file");
        const updateButton = document.querySelector("#update-profile");

        let elementsToChange = [emailInput, usernameInput, passwordInput, bioInput, fileInput, updateButton];

        for (let element of elementsToChange) {
            element.disabled = !(element.disabled);
        }


    }

    //  Used this resource to come up with the idea, modified code to work in our app
    //  https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
    const loadFile = function (event) {
        const image = document.getElementById('output');
        if (event.target.files[0] !== undefined) {
            fileUrl = URL.createObjectURL(event.target.files[0]);
            image.src = fileUrl;
        }


    }

    if (props.activeUser.username !== undefined) {


        return (

            <>
                <h1 className="screen-reader-text">User Profile</h1>

                <form onSubmit={handleSubmit} >

                    <div>
                        <img src={Logo} alt="Avatar" className="avatar" alt="User Picture" /> <br />
                        <input type="file" accept="image/*" name="image" id="file" onChange={loadFile} className="upload-img" disabled={true} />
                        <p><label htmlFor="file" className="img-label">Upload Image</label></p>
                        <p><img id="output" width="200" /></p>
                    </div>

                    <label htmlFor="username-input" className="labels" type="text">Username</label> <br />
                    <input
                        id="username-input"
                        htmlFor="username-input"
                        className="inputs"
                        value={username}
                        placeholder="Your Username"
                        type="text"
                        onChange={event => { setUserName(event.target.value); }}
                        disabled={true}
                    />

                    <label htmlFor="user-email" className="labels" type="text">Email</label><br />
                    <input
                        id="user-email"
                        className="inputs"
                        placeholder="Your email...." type="text"
                        value={email}
                        onChange={event => { setEmail(event.target.value); }}
                        disabled={true}
                    />

                    <label htmlFor="user-password" className="labels" type="text">Change Password</label><br />
                    <input
                        id="user-Password"
                        className="inputs"
                        placeholder="" type="password"
                        value={password}
                        onChange={event => { setPassword(event.target.value); }}
                        disabled={true}
                    />

                    <label value="Name" type="text">Bio</label><br />
                    <textarea
                        htmlFor="userBio"
                        placeholder="Enter your bio here...."
                        type="text" rows="10" cols="20"
                        id="userBio"
                        value={bio}
                        onChange={event => { setBio(event.target.value); }}
                        disabled={true}
                    />

                    <input id="update-profile" className="submitBtn" value="Submit" type="submit" disabled={true} />
                    <input type="button" className="submitBtn" value="Edit" disabled={false} onClick={toggleEdit} />
                </form>

                <section className="p-reviews-section">
                    <h2>Your Reviews</h2>
                    <ListReviews username={props.activeUser.username} />
                </section>
            </>

        );
    }
    else return (
        <Redirect to="/" />
    );

}




export default connect(state => ({ users: state.users, activeUser: state.activeUser, state: state }))(UserProfile);
