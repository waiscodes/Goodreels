import { render } from '@testing-library/react';
import React,{useState} from 'react';

import '../css/UserProfile.css';
import Logo from '../images/avatar2.png';
import { updateProfile } from '../actions/aProfile';
import ListReviews  from './ListReviews';
import { connect } from 'react-redux';






function UserProfile(props) {
    //const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    //const [bio, setBio] = useState('');
    let thisUser = useState('');

    for (const element of props.users) {
        if (element.username === props.activeUser.username)
            thisUser = { ...element };
    
    }
    const handleSubmit = event => {
        event.preventDefault();
        
        const usrPEmail = document.querySelector("#user-email").value;
        const usrPUsername = document.querySelector("#username-input").value;
        const usrPBio = document.querySelector("#userBio").value;
        alert(`${ usrPBio }  ${ usrPUsername }  ${ usrPEmail }`);
        
        

        // props.state.dispatch(updateProfile(username = setUserName(event.target.value),
        //email = setEmail(event.target.value),
        //bio= setBio(event.target.value)));
    

    }
        
    
        const loadFile = function (event) {
            const image = document.getElementById('output');
            image.src = URL.createObjectURL(event.target.files[0]);
    
        }
    
        return (

            <div>
                <h1 className="profile-head">User Profile</h1>
         
                <form onSubmit={handleSubmit} >
                    <div >
                        <img src={Logo} alt="Avatar" className="avatar" /> <br />
                        <input type="file" accept="image/*" name="image" id="file" onChange={loadFile} className="upload-img" />
                        <p><label for="file" className="img-label">Upload Image</label></p>
                        <p><img id="output" width="200" /></p>
                        
                    </div>
                    <div className="container">
                        <div className="">
                            <label htmlFor="username-input"
                                className="labels"
                                type="text">Username</label> <br />
                            <input id="username-input"
                                htmlFor="username-input"
                                className="inputs"
                                placeholder="Your Username"
                                type="text"
                                
                            //onchange={event => { setUserName(event.target.value); }}
                            />
                        </div>
                        <div >
                            <label htmlFor="user-email" className="labels" type="text">Email</label><br />
                            <input id="user-email" className="inputs"
                                placeholder="Your email...." type="text"
                            //onchange={event => { setEmail(event.target.value); }}
                            />
                        </div>
                        <div className="">
                            <label value="Name" type="text">Bio</label><br />
                            <textarea htmlFor="userBio"
                                placeholder="Enter your bio here...."
                                type="text" rows="10" cols="20"
                                id="userBio" required
                            //onchange={event => { setBio(event.target.value); }}
                            />
                        </div>
                        <input className="submitBtn" value="submit" type="submit" />
                        <input className="submitBtn" value="Edit" type="submit" />
                    </div>
                </form>
                <ul>
                {/* <ListReviews username={props.activeUser.username} /> */}
                </ul>
            </div>
             
        );
    
    }

    


export default connect(state => ({ users: state.users, activeUser: state.activeUser, state: state}) )(UserProfile);
