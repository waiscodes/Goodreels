import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="/Browse">
                            Browse
                        </Link>
                    </li>
                    <li>
                        <Link to="/Recommended">
                            Recommended
                        </Link>
                    </li>
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