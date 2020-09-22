import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {


    return (
        <>
            <nav className="sign-in">
                <h2>Sign In</h2>
                <ul>
                    <li>
                    <Link to="/">
                        Sign In
                    </Link>
                    </li>
                </ul>
            </nav>
            <nav className="browse">
                <h2>Browse</h2>
                <ul>
                    <li>
                    <Link to="/Browse">
                        Browse
                    </Link>
                    </li>
                </ul>
            </nav>
            <nav className="recommended">
                <h2>Recommended</h2>
                <ul>
                    <li>
                    <Link to="/Recommended">
                        Recommended
                    </Link>
                    </li>
                </ul>
            </nav>
            <nav className="user-profile">
                <h2>User Profile</h2>
                <ul>
                    <li>
                    <Link to="/UserProfile">
                        User Profile
                    </Link>
                    </li>
                </ul>
            </nav>


        </>

    );

}
export default Nav;