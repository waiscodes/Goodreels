import React from 'react';
import '../css/UserProfile.css';
import Logo from '../images/avatar2.png';




const UserProfile = () => {


    return (

        <div>
            <h1 className="profile-head">User Profile</h1>
         
            <form>
             <div > 
                <img src={Logo} alt="Avatar" className="avatar"/> <br/>
                    <input id="image" type="file" name="profile_photo" placeholder="Photo" required={Logo} capture />
                </div> 
                <div className="container">
                <div>
                    <label className="labels" value="Name" type="text">Username</label> <br/>
                    <input value="" placeholder ="Your Username" type="text"/>
                </div>
                <div>
                    <label className="labels" value="Name" type="text">Email</label><br/>
                    <input value="" placeholder ="Your email...." type="text"/>
                </div>
                <div>
                    <label  value="Name" type="text">Bio</label><br/>
                    <textarea value="" placeholder ="Your email...." type="text" rows="10" cols="20"/>
                    </div>
                    <input value="submit" type="submit" />
                    <input value="Edit"  type="submit"/>
                    </div>
            </form>
        </div>

    );
    
}
export default UserProfile;