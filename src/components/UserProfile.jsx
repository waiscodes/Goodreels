import { render } from '@testing-library/react';
import React from 'react';
<<<<<<< HEAD
import { reduxForm } from 'redux-form';
import '../css/UserProfile.css';
import Logo from '../images/avatar2.png';
import { useState } from 'react';
import { addReview } from '../actions/aReviews';

import { connect } from 'react-redux';




=======
import '../css/UserProfile.css';
>>>>>>> 512ec6ae345216e53355288ec63e037bcd2fe2be


const UserProfile = () => {
    const [bio, setBio] = useState();
    //let thisUser = {};

    // for of loop throught props.users {
    //if (user.username === props.active.username )
   // thisUser = {...user}
      
}
const handleSubmit = (e) => {
    e.preventDefault();

   props.state.dispatch(addReview())
}

     
 

   
   
    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
        
    }   
    


        return (

            <div>
                <h1 className="profile-head">User Profile</h1>
         
                <form onSubmit={} >
                    <div >
                        <img src={Logo} alt="Avatar" className="avatar"  /> <br />
                        <input type="file" accept="image/*" name="image" id="file" onChange={loadFile} className="upload-img" />
                        <p><label for="file" className="img-label">Upload Image</label></p>
                        <p><img id="output" width="200" /></p>
                        
                    </div>
                    <div className="container">
                        <div className="">
                            <label className="labels" value={thisUser.username} type="text">Username</label> <br />
                            <input className="inputs" placeholder="Your Username" type="text" 
                                 />
                        </div>
                        <div >
                            <label className="labels" value={thisUser.email} type="text">Email</label><br />
                            <input className="inputs" 
                                placeholder="Your email...." type="text"
                                
                            />
                        </div>
                        <div className="">
                            <label value="Name" type="text">Bio</label><br />
                            <textarea value={bio} placeholder="Enter your bio here...."
                                type="text" rows="10" cols="20"
                                
                            />
                        </div>
                        <input className="submitBtn" value="submit" type="submit" />
                        <input className="submitBtn" value="Edit" type="submit" />
                    </div>
                </form>
                <ListReviews username={props.activeUser.username}/>
            </div>

        );
    
    }


export default connect(state => ({ users: state.users, activeUser: state.activeUser, state: state}) )(UserProfile);
